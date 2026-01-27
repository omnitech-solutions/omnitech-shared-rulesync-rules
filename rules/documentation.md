---
targets:
  - '*'
root: false
description: Documentation best practices and patterns
globs:
  - '**/*'
cursor:
  description: Documentation best practices and patterns
  globs:
    - '**/*'
---

# Documentation Rules

## Documentation Best Practices

- **Clarity Over Brevity:** Better to be clear than concise
- **Maintain Context:** Document the "why" more than the "what"
- **Update Proactively:** Update docs when code changes
- **Assume Fresh Eyes:** Write for someone unfamiliar with the code
- **Use Examples:** Show, don't just tell with code examples
- **Stay Current:** Remove outdated comments and documentation
- **Be Specific:** Avoid vague terms
- **Document Assumptions:** State implicit assumptions explicitly
- **Link Related Docs:** Reference related files, functions, or external
  resources
- **Test Documentation:** Verify that examples and instructions actually work
- **Decision Records:** Capture architectural decisions with lightweight ADRs
- **Operational Docs:** Provide runbooks, alerts, and troubleshooting notes

---

## Code Comments

### Inline Comments

```typescript
// ✅ GOOD: Explains why, provides context
// We use EventEmitter for in-memory message broadcasting
// because the system is offline-first and runs as a single instance
const messageEvents = new EventEmitter();

// ❌ BAD: States the obvious
// Create event emitter
const messageEvents = new EventEmitter();
```

### Function Documentation

````typescript
/**
 * Calculates the total price including tax.
 *
 * @param items - Array of items with price property
 * @param taxRate - Tax rate as decimal (e.g., 0.08 for 8%)
 * @returns Total price including tax
 *
 * @example
 * ```typescript
 * const total = calculateTotalWithTax(
 *   [{ price: 10 }, { price: 20 }],
 *   0.08
 * );
 * // Returns 32.4
 * ```
 */
function calculateTotalWithTax(items: Item[], taxRate: number): number {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  return subtotal * (1 + taxRate);
}
````

---

## README Files

### Structure

```markdown
# Project Name

Brief description of the project.

## Overview

1-2 paragraphs explaining the purpose and role.

## Features

- Feature 1
- Feature 2

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+

### Installation

\`\`\`bash npm install npm run dev \`\`\`

## API Documentation

See [API.md](./docs/API.md) for detailed API documentation.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.
```

---

## Decision Records (ADRs)

- Record the context, options, decision, and consequences
- Keep ADRs short, versioned, and linked from related specs or PRs
- Update ADRs when assumptions or constraints change

---

## Operational Documentation

- Provide runbooks for critical flows (deploy, rollback, incident response)
- Document alerts, dashboards, and ownership/contacts
- Include troubleshooting steps for common failures

---

## API Documentation

### OpenAPI/Swagger

```yaml
openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
paths:
  /users:
    get:
      summary: List all users
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
```

---

## Related Documentation

- `.rulesync/rules/code-quality.md` - Code quality standards
- `.rulesync/rules/architecture.md` - Architecture patterns
