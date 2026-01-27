# PHP Testing Rules

## Test Scope

- **MUST** test domain logic without frameworks.
- **MUST** use integration tests for IO and persistence boundaries.

---

## Determinism

- **MUST** keep tests deterministic and order-independent.
- **MUST** isolate shared state between tests.

---

## Failure Paths

- **MUST** test error conditions and invariant violations.
