# PHP Performance Rules

## Memory & IO

- **MUST** stream large datasets.
- **MUST** avoid loading unbounded collections into memory.
- **SHOULD** use generators for incremental processing.

---

## Hot Paths

- **MUST** minimize allocations in hot paths.
- **SHOULD** cache expensive computations at safe boundaries.
