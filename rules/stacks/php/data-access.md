# PHP Data Access Rules

## Boundaries

- **MUST** isolate persistence behind repositories or adapters.
- **MUST NOT** embed SQL or ORM logic in domain code.

---

## Queries

- **MUST** use prepared statements or ORM APIs.
- **MUST** paginate unbounded result sets.
- **MUST NOT** return raw database rows.

---

## Mapping

- **MUST** map persistence models to domain models explicitly.
