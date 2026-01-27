# PHP Type Rules

## Type Safety

- **MUST** declare parameter and return types on all methods.
- **MUST** use `readonly` properties where mutation is not required.
- **MUST NOT** use `mixed` except at explicit boundaries.
- **SHOULD** use value objects for domain concepts.

---

## Enums & Exhaustiveness

- **MUST** use enums for fixed domain sets.
- **MUST** handle enums exhaustively using `match`.

---

## Collections

- **MUST NOT** pass raw arrays across boundaries.
- **SHOULD** use typed collections or documented array shapes.
