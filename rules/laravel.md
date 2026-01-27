---
targets:
  - '*'
root: false
description: Laravel (PHP 8.x) best practices and patterns
globs:
  - '**/*.php'
  - '**/app/**'
  - '**/config/**'
cursor:
  description: Laravel (PHP 8.x) best practices and patterns
  globs:
    - '**/*.php'
---

# Laravel Rules

## Laravel Best Practices

- **MVC Pattern:** Keep controllers thin, models focused, views simple
- **RESTful Routes:** Use RESTful routing conventions
- **Eloquent ORM:** Use Eloquent query methods, avoid raw SQL
- **Service Classes:** Extract complex business logic into service classes
- **Validation:** Use Form Requests for MVC-only apps; for DDD, validate in
  commands
- **N+1 Queries:** Use `with()` or `load()` to prevent N+1 queries
- **Type Hints:** Use PHP 8.x type hints and return types
- **Testing:** Write tests using PHPUnit
- **Security:** Use Laravel's built-in security features
- **Performance:** Use database indexes, caching, and queues
- **Layer Isolation:** Keep Laravel in Infrastructure; Domain/Application stay
  framework-agnostic

---

## Framework Layer Isolation (DDD)

- Laravel-specific code lives in Infrastructure (controllers, routes, models,
  jobs)
- Domain and Application must not import framework types
- Bind interfaces to implementations in service providers

```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

final class BillingServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(
            BillingRepository::class,
            EloquentBillingRepository::class,
        );
    }
}
```

---

## MVC Pattern

### Controllers

```php
<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    public function index(): JsonResponse
    {
        $users = User::with('posts')->paginate(15);
        return response()->json($users);
    }

    public function show(User $user): JsonResponse
    {
        return response()->json($user);
    }

    public function store(StoreUserRequest $request): JsonResponse
    {
        $user = User::create($request->validated());
        return response()->json($user, 201);
    }

    public function update(UpdateUserRequest $request, User $user): JsonResponse
    {
        $user->update($request->validated());
        return response()->json($user);
    }

    public function destroy(User $user): JsonResponse
    {
        $user->delete();
        return response()->json(null, 204);
    }
}
```

### Models

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }

    public function getFullNameAttribute(): string
    {
        return "{$this->first_name} {$this->last_name}";
    }
}
```

### Service Classes

```php
<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserCreationService
{
    public function create(array $data): User
    {
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        $this->sendWelcomeEmail($user);
        $this->createDefaultSettings($user);

        return $user;
    }

    private function sendWelcomeEmail(User $user): void
    {
        // Send welcome email
    }

    private function createDefaultSettings(User $user): void
    {
        // Create default settings
    }
}
```

---

## Controller Pattern (DDD)

- Controllers are thin: validate input, build commands, call handlers, return
  resources
- No business rules or transactions in controllers

```php
<?php

namespace App\Http\Controllers;

use App\Application\Commands\ActivateUserCommand;
use App\Application\Handlers\ActivateUserHandler;
use App\Http\Resources\UserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

final class ActivateUserController extends Controller
{
    public function __construct(private ActivateUserHandler $handler)
    {
    }

    public function __invoke(Request $request, string $userId): JsonResponse
    {
        $validated = $request->validate([
            'reason' => ['required', 'string'],
        ]);
        $command = ActivateUserCommand::fromArray($userId, $validated);
        $user = $this->handler->handle($command);

        return UserResource::make($user)->response();
    }
}
```

---

## Eloquent Patterns

### Query Methods

```php
// ✅ GOOD: Use Eloquent methods
User::where('active', true)
    ->orderBy('created_at', 'desc')
    ->limit(10)
    ->get();

// ❌ BAD: Raw SQL
DB::select("SELECT * FROM users WHERE active = 1 ORDER BY created_at DESC LIMIT 10");
```

### Preventing N+1 Queries

```php
// ❌ BAD: N+1 query problem
$users = User::all();
foreach ($users as $user) {
    echo $user->posts->count(); // N queries!
}

// ✅ GOOD: Eager loading
$users = User::with('posts')->get();
foreach ($users as $user) {
    echo $user->posts->count(); // 2 queries total
}
```

### Scopes

```php
class User extends Model
{
    public function scopeActive($query)
    {
        return $query->where('active', true);
    }

    public function scopeRecent($query)
    {
        return $query->orderBy('created_at', 'desc');
    }
}

// Usage
User::active()->recent()->get();
```

---

## Validation (DDD-Friendly)

- Validate at the edge (controller/request), then construct commands from
  validated data
- Keep Application/Domain free of framework-specific request types
- Use Form Requests when you are not using commands/handlers

```php
<?php

namespace App\Application\Commands;

final class UpdateItemsCommand
{
    private function __construct(
        public readonly string $userId,
        public readonly array $items,
    ) {}

    /** @param array{items: array<int, array{item_id: string, quantity: int}>} $data */
    public static function fromArray(string $userId, array $data): self
    {
        return new self($userId, $data['items']);
    }
}
```

---

## Form Requests (MVC-Only)

```php
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ];
    }

    public function messages(): array
    {
        return [
            'email.unique' => 'This email is already registered.',
            'password.min' => 'Password must be at least 8 characters.',
        ];
    }
}
```

---

## Service Provider Pattern

- Register routes, migrations, and bindings in providers
- Bind interfaces to concrete implementations

```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

final class UserServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->loadRoutesFrom(__DIR__.'/../routes/api.php');
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
    }

    public function register(): void
    {
        $this->app->bind(UserRepository::class, EloquentUserRepository::class);
    }
}
```

---

## Migrations & Schema

- Use stable, non-sequential identifiers for aggregates (UUID/ULID per team
  standards)
- Add indexes for hot query columns
- Use soft deletes for user-generated aggregates where recovery is required

```php
Schema::create('users', function (Blueprint $table) {
    $table->uuid('id')->primary();
    $table->string('email')->unique();
    $table->timestamps();
    $table->softDeletes();
    $table->index(['email']);
});
```

---

## API Resources

- Use API Resources to shape responses
- Keep domain models out of HTTP responses

```php
<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

final class UserResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'email' => $this->email,
            'created_at' => $this->created_at,
        ];
    }
}
```

---

## Routing

### RESTful Routes

```php
// routes/api.php
use App\Http\Controllers\UserController;

Route::apiResource('users', UserController::class);

// routes/web.php
Route::resource('users', UserController::class);
```

### Custom Routes

```php
Route::prefix('users')->group(function () {
    Route::post('{user}/activate', [UserController::class, 'activate']);
    Route::post('{user}/deactivate', [UserController::class, 'deactivate']);
    Route::get('search', [UserController::class, 'search']);
});
```

---

## Testing

### Feature Tests

```php
<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_create_user(): void
    {
        $response = $this->postJson('/api/users', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ]);

        $response->assertStatus(201)
            ->assertJsonStructure([
                'id',
                'name',
                'email',
            ]);

        $this->assertDatabaseHas('users', [
            'email' => 'john@example.com',
        ]);
    }
}
```

---

## Queues

### Job Classes

```php
<?php

namespace App\Jobs;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendWelcomeEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public User $user
    ) {}

    public function handle(): void
    {
        // Send welcome email
    }
}

// Usage
SendWelcomeEmail::dispatch($user);
```

---

## Jobs & Listeners (DDD)

- Jobs do async work and call handlers/services
- Listeners should be thin and may dispatch jobs

```php
final class ProcessUserActivationJob implements ShouldQueue
{
    use Queueable;

    public function __construct(private string $userId) {}

    public function handle(ActivateUserHandler $handler): void
    {
        $handler->handle(new ActivateUserCommand($this->userId));
    }
}
```

---

## Security

### Authentication

```php
// Using Laravel Sanctum or Passport
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('users', UserController::class);
});
```

### Authorization

```php
// Policies
class UserPolicy
{
    public function update(User $user, User $model): bool
    {
        return $user->id === $model->id || $user->isAdmin();
    }
}

// Usage in controller
$this->authorize('update', $user);
```

---

## Anti-Patterns

### Don't: Put Business Logic in Controllers

```php
// ❌ BAD: Business logic in controller
public function store(Request $request)
{
    $user = User::create($request->all());
    Mail::to($user->email)->send(new WelcomeMail($user));
    $user->settings()->create([...]);
    // More business logic...
}

// ✅ GOOD: Use service classes
public function store(StoreUserRequest $request)
{
    $user = app(UserCreationService::class)->create($request->validated());
    return response()->json($user, 201);
}
```

### Don't: Ignore N+1 Queries

```php
// ❌ BAD: N+1 queries
$users = User::all();
foreach ($users as $user) {
    echo $user->posts->count();
}

// ✅ GOOD: Eager loading
$users = User::with('posts')->get();
foreach ($users as $user) {
    echo $user->posts->count();
}
```

---

## Related Documentation

- [Laravel Documentation](https://laravel.com/docs)
- `.rulesync/rules/architecture.md` - Architecture patterns
- `.rulesync/rules/testing.md` - Testing patterns
