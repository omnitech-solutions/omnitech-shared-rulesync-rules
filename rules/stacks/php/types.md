# PHP Type Rules

## Type Modeling

- MUST model domain concepts with explicit types.
- MUST avoid untyped or overly broad primitives for critical data.
- SHOULD use discriminated unions for workflow state.

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

## Related Rules

- `.rulesync/rules/stacks/php/overview.md`
- `.rulesync/rules/stacks/php/types.md`
