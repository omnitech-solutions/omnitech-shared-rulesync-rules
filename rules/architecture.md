---
targets:
  - '*'
root: false
description: Architecture best practices and patterns
globs:
  - '**/*'
cursor:
  description: Architecture best practices and patterns
  globs:
    - '**/*'
---

# Architecture Rules

## Architecture Best Practices

- **Separation of Concerns:** Keep business logic, data access, and presentation
  layers separate
- **DRY Principle:** Don't Repeat Yourself - extract common patterns into
  reusable modules
- **SOLID Principles:** Apply Single Responsibility, Open/Closed, Liskov
  Substitution, Interface Segregation, Dependency Inversion
- **API-First Design:** Design APIs before implementation, use
  OpenAPI/Schema-first for GraphQL
- **Type Safety:** Leverage TypeScript, PHP type hints, and Ruby type
  annotations where available
- **Error Handling:** Implement consistent error handling patterns across all
  layers
- **Security by Default:** Apply security best practices at the architecture
  level
- **Scalability:** Design for horizontal scaling and performance from the start
- **Observability:** Include logging, monitoring, and tracing in architectural
  decisions
- **Documentation:** Document architectural decisions and patterns
- **Decision Records:** Capture significant tradeoffs with lightweight ADRs
- **Risk & Rollout:** Identify risks early and plan incremental rollout paths

---

## Federated GraphQL Architecture

### Schema Design

- **Federation Keys:** Use `@key` directive to identify entities across services
- **Service Boundaries:** Each service owns its domain entities and operations
- **Composition:** Use `@extends` to extend types from other services
- **Resolvers:** Implement field resolvers for federated fields

```graphql
# Service A: User Service
type User @key(fields: "id") {
  id: ID!
  email: String!
  name: String!
}

# Service B: Post Service
type Post @key(fields: "id") {
  id: ID!
  title: String!
  author: User! @provides(fields: "name")
}

extend type User @key(fields: "id") {
  id: ID! @external
  posts: [Post!]!
}
```

### Service Communication

- **Gateway Pattern:** Use Apollo Gateway or similar to compose federated
  schemas
- **Service Discovery:** Implement service registry for dynamic service
  discovery
- **Error Propagation:** Handle errors from federated services gracefully
- **Caching Strategy:** Implement appropriate caching at gateway and service
  levels

---

## Monorepo Structure

### Workspace Organization

```
project/
├── apps/
│   ├── web/              # React/Vue frontend
│   ├── api/              # Node.js/Express API
│   ├── graphql-gateway/  # Apollo Gateway
│   └── graphql-services/ # Federated GraphQL services
├── packages/
│   ├── shared/           # Shared TypeScript/JavaScript code
│   ├── ui/               # Shared UI components
│   └── config/           # Shared configuration
├── services/
│   ├── rails-api/        # Ruby on Rails service
│   └── laravel-api/      # Laravel service
└── tools/
    ├── eslint/           # Shared ESLint config
    ├── typescript/        # Shared TypeScript config
    └── tailwind/          # Shared Tailwind config
```

### Importing Workspace Packages

```typescript
// ✅ GOOD: Workspace alias
import { sharedUtil } from '@project/shared';
import { Button } from '@project/ui';

// ❌ BAD: Relative paths across packages
import { util } from '../../../packages/shared';
```

---

## API Design Patterns

### RESTful APIs

- **Resource-Based URLs:** Use nouns, not verbs (`/users`, not `/getUsers`)
- **HTTP Methods:** Use GET, POST, PUT, PATCH, DELETE appropriately
- **Status Codes:** Return appropriate HTTP status codes
- **Versioning:** Version APIs in URL (`/api/v1/users`) or headers

### GraphQL APIs

- **Query Complexity:** Limit query depth and complexity
- **Pagination:** Use cursor-based pagination for large datasets
- **Mutations:** Use mutations for all write operations
- **Subscriptions:** Use subscriptions for real-time updates

---

## Error Handling

### Consistent Error Response Format

```typescript
// TypeScript/JavaScript
interface ApiError {
  error: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  };
}
```

```php
// Laravel/PHP
return response()->json([
    'error' => [
        'code' => 'VALIDATION_ERROR',
        'message' => 'Invalid input data',
        'details' => $errors
    ]
], 400);
```

```ruby
# Ruby on Rails
render json: {
  error: {
    code: 'VALIDATION_ERROR',
    message: 'Invalid input data',
    details: errors
  }
}, status: :bad_request
```

---

## Database Patterns

### Multi-Database Architecture

- **Service-Owned Databases:** Each service owns its database
- **Database per Service:** Avoid shared databases between services
- **Event Sourcing:** Consider event sourcing for audit trails and replay
- **CQRS:** Separate read and write models when appropriate

### Transaction Management

- **Local Transactions:** Use transactions within service boundaries
- **Distributed Transactions:** Avoid two-phase commit; use saga pattern instead
- **Eventual Consistency:** Accept eventual consistency across services

---

## Caching Strategy

### Cache Layers

1. **Application Cache:** In-memory cache (Redis, Memcached)
2. **CDN Cache:** Static assets and API responses
3. **Database Cache:** Query result caching
4. **Browser Cache:** Client-side caching

### Cache Invalidation

- **Time-Based:** TTL for cache entries
- **Event-Based:** Invalidate on data changes
- **Tag-Based:** Invalidate by cache tags

---

## Security Architecture

### Authentication & Authorization

- **JWT Tokens:** Use JWT for stateless authentication
- **OAuth 2.0:** Use OAuth for third-party integrations
- **RBAC:** Role-Based Access Control for authorization
- **API Keys:** Use API keys for service-to-service communication

### Data Protection

- **Encryption at Rest:** Encrypt sensitive data in databases
- **Encryption in Transit:** Use TLS/SSL for all communications
- **Secrets Management:** Use secret management services (AWS Secrets Manager,
  HashiCorp Vault)
- **Input Validation:** Validate and sanitize all inputs

---

## Performance Patterns

### Async Processing

- **Message Queues:** Use queues for background jobs (RabbitMQ, SQS, Redis)
- **Event-Driven:** Use events for loose coupling
- **Background Workers:** Process heavy tasks asynchronously

### Database Optimization

- **Indexing:** Add indexes for frequently queried fields
- **Query Optimization:** Optimize N+1 queries
- **Connection Pooling:** Use connection pools for database connections
- **Read Replicas:** Use read replicas for read-heavy workloads

---

## Observability

### Logging

- **Structured Logging:** Use JSON structured logs
- **Log Levels:** Use appropriate log levels (DEBUG, INFO, WARN, ERROR)
- **Correlation IDs:** Include correlation IDs for request tracing
- **Sensitive Data:** Never log passwords, tokens, or PII

### Monitoring

- **Metrics:** Track key metrics (latency, error rate, throughput)
- **Alerting:** Set up alerts for critical issues
- **Dashboards:** Create dashboards for system health
- **Distributed Tracing:** Use tracing for microservices (Jaeger, Zipkin)

---

## Decision Records (ADRs)

- Record significant architectural decisions with context, options, decision,
  and consequences
- Keep ADRs short, versioned, and linked from relevant specs/docs
- Revisit ADRs when assumptions change

---

## Risk & Rollout Planning

- Identify technical risks and mitigations early in design
- Plan incremental rollout paths and fallback strategies
- Prefer reversible changes for high-impact systems

---

## Anti-Patterns

### Don't: Create God Objects

```typescript
// ❌ BAD: Class doing too much
class UserManager {
  createUser() {}
  deleteUser() {}
  sendEmail() {}
  processPayment() {}
  generateReport() {}
}

// ✅ GOOD: Single responsibility
class UserService {
  createUser() {}
  deleteUser() {}
}

class EmailService {
  sendEmail() {}
}
```

### Don't: Tight Coupling

```typescript
// ❌ BAD: Direct dependency
class OrderService {
  constructor() {
    this.paymentService = new PaymentService(); // Tight coupling
  }
}

// ✅ GOOD: Dependency injection
class OrderService {
  constructor(paymentService: PaymentService) {
    this.paymentService = paymentService; // Loose coupling
  }
}
```

### Don't: Ignore Error Handling

```typescript
// ❌ BAD: Silent failure
async function processOrder(orderId: string) {
  try {
    await paymentService.charge(orderId);
  } catch (error) {
    // Swallowed error
  }
}

// ✅ GOOD: Proper error handling
async function processOrder(orderId: string) {
  try {
    await paymentService.charge(orderId);
  } catch (error) {
    logger.error('Failed to charge order', { orderId, error });
    throw new OrderProcessingError('Payment failed', { cause: error });
  }
}
```

---

## Related Documentation

- `.rulesync/rules/stacks/graphql/overview.md` - GraphQL-specific patterns
- `.rulesync/rules/stacks/graphql/schema.md` - GraphQL schema design
- `.rulesync/rules/stacks/graphql/resolvers.md` - GraphQL execution boundaries
- `.rulesync/rules/stacks/graphql/error-handling.md` - GraphQL error semantics
- `.rulesync/rules/stacks/react/overview.md` - React architecture patterns
- `.rulesync/rules/stacks/vue/overview.md` - Vue.js architecture patterns
- `.rulesync/rules/stacks/vue/state.md` - Vue state boundaries
- `.rulesync/rules/stacks/vue/routing.md` - Vue route boundaries
- `.rulesync/rules/stacks/rails/overview.md` - Rails architecture patterns
- `.rulesync/rules/stacks/laravel/overview.md` - Laravel architecture patterns
- `.rulesync/rules/stacks/nodejs/overview.md` - Node.js architecture patterns
- `.rulesync/rules/stacks/nodejs/runtime.md` - Node runtime model
- `.rulesync/rules/stacks/nodejs/http-api.md` - HTTP boundary patterns
- `.rulesync/rules/stacks/nodejs/data-access.md` - Persistence boundaries
