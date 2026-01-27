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
- **Form Requests:** Use form requests for validation
- **N+1 Queries:** Use `with()` or `load()` to prevent N+1 queries
- **Type Hints:** Use PHP 8.x type hints and return types
- **Testing:** Write tests using PHPUnit
- **Security:** Use Laravel's built-in security features
- **Performance:** Use database indexes, caching, and queues

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

## Form Requests

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
