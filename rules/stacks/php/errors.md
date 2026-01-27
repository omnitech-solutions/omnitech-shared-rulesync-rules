# PHP Error Handling Rules

## Exceptions

- **MUST** use domain-specific exception types.
- **MUST** include actionable context in exception messages.
- **MUST NOT** swallow exceptions silently.

---

## Boundaries

- **MUST** translate technical exceptions at system boundaries.
- **MUST NOT** leak framework or persistence exceptions into domain code.

---

## Control Flow

- **MUST NOT** use exceptions for normal control flow.
- **MUST** fail fast on invariant violations.
