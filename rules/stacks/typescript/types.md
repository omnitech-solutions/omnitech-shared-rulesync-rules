---
targets:
  - '*'
root: false
description: TypeScript type modeling rules
summary: Unions, intersections, and expressive domain types
stack: typescript
globs:
  - '**/*.ts'
  - '**/*.tsx'
cursor:
  description: TypeScript type modeling rules
  globs:
    - '**/*.ts'
    - '**/*.tsx'
---

# TypeScript Type Rules

## Type Modeling

- MUST model domain concepts with explicit types.
- MUST avoid untyped or overly broad primitives for critical data.
- SHOULD use discriminated unions for workflow state.
- SHOULD define interfaces and types outside function/component bodies.
- SHOULD colocate types with usage unless shared across multiple files.

---

## Type Precision

- MUST keep types as narrow as is practical.
- SHOULD prefer readonly structures for immutable data.
- SHOULD avoid optional fields that are effectively required.

---

## Composition

- SHOULD prefer small, composable types over massive interfaces.
- MAY use utility types when they improve clarity.

---

## Source-of-Truth Types

- SHOULD prefer existing source-of-truth types before defining new ones.
- SHOULD derive UI types from API responses, validation schemas, or DB models.
- SHOULD avoid duplicating shapes when a canonical type already exists.

```ts
// ✅ GOOD: Derive from existing types
type UserSummary = Pick<User, 'id' | 'name' | 'email'>;
type CreateUserInput = Omit<User, 'id' | 'createdAt'>;

// ❌ BAD: Duplicating a known shape
interface UserSummary {
  id: string;
  name: string;
  email: string;
}
```

---

## Related Rules

- `.rulesync/rules/stacks/typescript/overview.md`
- `.rulesync/rules/stacks/typescript/types.md`
