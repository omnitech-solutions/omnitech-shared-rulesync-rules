---
targets:
  - '*'
root: false
description: Testing best practices and patterns
globs:
  - '**/*.test.*'
  - '**/*.spec.*'
  - '**/__tests__/**'
  - '**/spec/**'
cursor:
  description: Testing best practices and patterns
  globs:
    - '**/*.test.*'
    - '**/*.spec.*'
---
# Testing Rules

## Testing Best Practices

- **Test Behavior, Not Implementation:** Focus on what code does, not how
- **Arrange-Act-Assert:** Structure tests clearly with setup, execution, verification
- **One Assertion Per Test:** Keep tests focused on a single behavior
- **Descriptive Names:** Test names should read like specifications
- **Test Isolation:** Each test should be independent and runnable alone
- **Fast Tests:** Unit tests should run in milliseconds
- **Coverage Targets:** Aim for 80%+ coverage on critical paths
- **Mock External Dependencies:** Isolate units under test
- **Test Edge Cases:** Empty inputs, null values, boundary conditions
- **Integration Tests:** Test interactions between components

---

## Test Structure

### Arrange-Act-Assert Pattern

```typescript
// TypeScript/Jest
describe('UserService', () => {
  it('creates a new user', async () => {
    // Arrange
    const userData = { name: 'John', email: 'john@example.com' };
    const userService = new UserService();

    // Act
    const user = await userService.create(userData);

    // Assert
    expect(user.name).toBe('John');
    expect(user.email).toBe('john@example.com');
  });
});
```

```php
// PHP/PHPUnit
public function testCreatesNewUser(): void
{
    // Arrange
    $userData = ['name' => 'John', 'email' => 'john@example.com'];
    $userService = new UserService();

    // Act
    $user = $userService->create($userData);

    // Assert
    $this->assertEquals('John', $user->name);
    $this->assertEquals('john@example.com', $user->email);
}
```

```ruby
# Ruby/RSpec
describe UserService do
  it 'creates a new user' do
    # Arrange
    user_data = { name: 'John', email: 'john@example.com' }
    user_service = UserService.new

    # Act
    user = user_service.create(user_data)

    # Assert
    expect(user.name).to eq('John')
    expect(user.email).to eq('john@example.com')
  end
end
```

---

## Test Types

### Unit Tests

Test individual functions or methods in isolation.

```typescript
describe('calculateTotal', () => {
  it('sums all item prices', () => {
    const items = [
      { price: 10 },
      { price: 20 },
      { price: 30 },
    ];
    
    expect(calculateTotal(items)).toBe(60);
  });
});
```

### Integration Tests

Test interactions between components.

```typescript
describe('User API', () => {
  it('creates user and sends welcome email', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'John', email: 'john@example.com' });

    expect(response.status).toBe(201);
    expect(emailService.send).toHaveBeenCalled();
  });
});
```

### E2E Tests

Test complete user workflows.

```typescript
describe('User Registration Flow', () => {
  it('allows user to register and login', async () => {
    await page.goto('/register');
    await page.fill('[name="email"]', 'john@example.com');
    await page.fill('[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    
    await expect(page).toHaveURL('/dashboard');
  });
});
```

---

## Mocking

### Mock External Dependencies

```typescript
// Mock database
jest.mock('./database', () => ({
  users: {
    findById: jest.fn(),
  },
}));

// Mock API calls
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
}));
```

---

## Test Coverage

### Coverage Targets

- **Critical Business Logic:** 90%+
- **API Endpoints:** 80%+
- **Utility Functions:** 80%+
- **Components:** 70%+
- **Overall:** 80%+

### Coverage Reports

```bash
# TypeScript/Jest
npm test -- --coverage

# PHP/PHPUnit
phpunit --coverage-html coverage/

# Ruby/RSpec
rspec --format documentation --format html --out coverage.html
```

---

## Anti-Patterns

### Don't: Test Implementation Details

```typescript
// ❌ BAD: Testing internal state
it('sets loading state', () => {
  const component = render(<UserList />);
  expect(component.state.loading).toBe(true);
});

// ✅ GOOD: Test observable behavior
it('shows loading indicator', () => {
  render(<UserList />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
```

### Don't: Create Test Interdependencies

```typescript
// ❌ BAD: Tests depend on execution order
let userId: string;

it('creates user', () => {
  userId = createUser();
});

it('updates user', () => {
  updateUser(userId); // Depends on previous test
});

// ✅ GOOD: Each test is independent
it('updates user', async () => {
  const user = await createUser();
  await updateUser(user.id);
});
```

---

## Related Documentation

- `.rulesync/rules/code-quality.md` - Code quality standards
- `.rulesync/rules/architecture.md` - Architecture patterns
