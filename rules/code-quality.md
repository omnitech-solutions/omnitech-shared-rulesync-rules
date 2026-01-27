---
targets:
  - '*'
root: false
description: Code quality best practices and patterns
globs:
  - '**/*'
cursor:
  description: Code quality best practices and patterns
  globs:
    - '**/*'
---

# Code Quality Rules

## Code Quality Standards

- **Type Safety:** Use TypeScript, PHP type hints, and Ruby type annotations
- **DRY Principle:** Don't Repeat Yourself - extract common patterns
- **SOLID Principles:** Apply Single Responsibility, Open/Closed, Liskov
  Substitution, Interface Segregation, Dependency Inversion
- **Meaningful Names:** Use descriptive variable, function, and class names
- **Small Functions:** Keep functions focused and refactor when they do too much
- **Error Handling:** Handle errors explicitly and contextually
- **Documentation:** Document public APIs and complex logic
- **Code Formatting:** Use the formatter configured for the repo
- **Linting:** Use the repo’s static analysis tooling to catch issues early
- **Code as Communication:** Favor clarity and intent over cleverness
- **No Dead Code:** Remove unused code, don't comment it out

---

## TypeScript

### Type Safety

```typescript
// ✅ GOOD: Strict typing
function getUser(id: string): Promise<User> {
  return db.users.findById(id);
}

// ❌ BAD: Using any
function getUser(id: any): Promise<any> {
  return db.users.findById(id);
}
```

### Type Definitions

```typescript
// ✅ GOOD: Explicit interfaces
interface User {
  id: string;
  email: string;
  name: string;
}

function createUser(data: User): User {
  return db.users.create(data);
}
```

---

## PHP (Laravel)

### Type Hints

```php
// ✅ GOOD: Type hints and return types
public function getUser(string $id): User
{
    return User::findOrFail($id);
}

// ❌ BAD: No type hints
public function getUser($id)
{
    return User::find($id);
}
```

### Property Types

```php
class User
{
    public function __construct(
        public string $name,
        public string $email,
        public ?DateTime $createdAt = null
    ) {}
}
```

---

## Ruby (Rails)

### Type Annotations

```ruby
# ✅ GOOD: Type annotations (Sorbet/RBS)
# typed: true
class User
  extend T::Sig

  sig { params(id: String).returns(User) }
  def self.find(id)
    # ...
  end
end
```

---

## Naming Conventions

### Functions/Methods

```typescript
// ✅ GOOD: Descriptive names
function calculateTotalPrice(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// ❌ BAD: Abbreviated or unclear
function calc(items: Item[]): number {
  return items.reduce((s, i) => s + i.p, 0);
}
```

### Variables

```typescript
// ✅ GOOD: Clear variable names
const userEmailAddress = user.email;
const isUserActive = user.status === 'active';

// ❌ BAD: Abbreviations or single letters
const uea = user.email;
const flag = user.status === 'active';
```

---

## Function Size

### Small, Focused Functions

```typescript
// ✅ GOOD: Small, focused function
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ❌ BAD: Large function doing multiple things
function processUser(user: User): void {
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(user.email)) {
    throw new Error('Invalid email');
  }

  // Save to database
  db.users.save(user);

  // Send email
  emailService.send(user.email, 'Welcome!');

  // Update analytics
  analytics.track('user_created', { userId: user.id });

  // More logic...
}
```

---

## Error Handling

### Explicit Error Handling

```typescript
// ✅ GOOD: Explicit error handling
async function fetchUser(id: string): Promise<User> {
  try {
    const user = await db.users.findById(id);
    if (!user) {
      throw new NotFoundError(`User ${id} not found`);
    }
    return user;
  } catch (error) {
    if (error instanceof NotFoundError) {
      throw error;
    }
    throw new DatabaseError('Failed to fetch user', { cause: error });
  }
}
```

---

## Code Formatting

### Consistent Formatting

```typescript
// Use Prettier for TypeScript/JavaScript
// Use RuboCop for Ruby
// Use Pint for PHP/Laravel
```

### Configuration Files

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

---

## Linting

### ESLint (TypeScript/JavaScript)

```json
// .eslintrc.json
{
  "extends": ["eslint:recommended", "@typescript-eslint/recommended"],
  "rules": {
    "no-console": "warn",
    "no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error"
  }
}
```

### RuboCop (Ruby)

```yaml
# .rubocop.yml
AllCops:
  TargetRubyVersion: 3.2

Style/StringLiterals:
  EnforcedStyle: single_quotes
```

### PHPStan (PHP)

```neon
# phpstan.neon
parameters:
  level: 8
  paths:
    - app
```

---

## Anti-Patterns

### Don't: Use Magic Numbers

```typescript
// ❌ BAD: Magic numbers
if (user.age > 18 && user.age < 65) {
  // ...
}

// ✅ GOOD: Named constants
const MIN_AGE = 18;
const MAX_AGE = 65;

if (user.age > MIN_AGE && user.age < MAX_AGE) {
  // ...
}
```

### Don't: Comment Out Code

```typescript
// ❌ BAD: Commented out code
// function oldFunction() {
//   // Old implementation
// }

// ✅ GOOD: Remove unused code
// If needed, check git history
```

### Don't: Deep Nesting

```typescript
// ❌ BAD: Deep nesting
if (user) {
  if (user.active) {
    if (user.subscription) {
      if (user.subscription.valid) {
        // Do something
      }
    }
  }
}

// ✅ GOOD: Early returns
if (!user || !user.active || !user.subscription?.valid) {
  return;
}
// Do something
```

---

## Related Documentation

- `.rulesync/rules/architecture.md` - Architecture patterns
- `.rulesync/rules/testing.md` - Testing patterns
- `.rulesync/rules/documentation.md` - Documentation patterns
