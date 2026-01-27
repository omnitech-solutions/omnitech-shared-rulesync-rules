---
targets:
  - '*'
root: false
description: TypeScript best practices and patterns
globs:
  - '**/*.ts'
  - '**/*.tsx'
cursor:
  description: TypeScript best practices and patterns
  globs:
    - '**/*.ts'
    - '**/*.tsx'
---

# TypeScript Rules

## TypeScript Best Practices

- **Strict Mode:** Always use strict TypeScript configuration
- **No Any Types:** Avoid `any`, use `unknown` and type guards instead
- **Type Inference:** Leverage TypeScript's type inference where appropriate
- **Type Definitions:** Define interfaces and types for all data structures
- **Utility Types:** Use built-in utility types (Pick, Omit, Partial, etc.)
- **Type Guards:** Use type guards for runtime type checking
- **Generic Types:** Use generics for reusable, type-safe code
- **Discriminated Unions:** Use discriminated unions for complex state
- **Type Exports:** Export types and interfaces for reuse

---

## Type Safety

### Avoid Any

```typescript
// ❌ BAD: Using any
function processData(data: any): any {
  return data.value;
}

// ✅ GOOD: Proper typing
function processData<T extends { value: unknown }>(data: T): T['value'] {
  return data.value;
}
```

### Use Unknown for Untrusted Data

```typescript
// ✅ GOOD: Use unknown and type guards
function processUserInput(input: unknown): User {
  if (isUser(input)) {
    return input;
  }
  throw new Error('Invalid user data');
}

function isUser(value: unknown): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'email' in value
  );
}
```

---

## Type Definitions

### Interfaces vs Types

```typescript
// ✅ GOOD: Use interfaces for objects
interface User {
  id: string;
  email: string;
  name: string;
}

// ✅ GOOD: Use types for unions, intersections, primitives
type Status = 'active' | 'inactive' | 'pending';
type UserWithStatus = User & { status: Status };
```

### Utility Types

```typescript
// Pick specific properties
type UserSummary = Pick<User, 'id' | 'name'>;

// Omit properties
type CreateUserInput = Omit<User, 'id' | 'createdAt'>;

// Make properties optional
type PartialUser = Partial<User>;

// Make properties required
type RequiredUser = Required<User>;
```

---

## Generics

```typescript
// ✅ GOOD: Generic function
function getById<T extends { id: string }>(
  items: T[],
  id: string,
): T | undefined {
  return items.find(item => item.id === id);
}

// Usage
const user = getById(users, '123');
const post = getById(posts, '456');
```

---

## Related Documentation

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- `.rulesync/rules/code-quality.md` - Code quality standards
