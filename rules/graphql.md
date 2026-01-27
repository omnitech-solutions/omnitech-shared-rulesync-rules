---
targets:
  - '*'
root: false
description: GraphQL and Federated GraphQL best practices
globs:
  - '**/*.graphql'
  - '**/*.gql'
  - '**/schema.*'
  - '**/resolvers/**'
cursor:
  description: GraphQL and Federated GraphQL best practices
  globs:
    - '**/*.graphql'
    - '**/*.gql'
    - '**/schema.*'
    - '**/resolvers/**'
---

# GraphQL Rules

## GraphQL Best Practices

- **Schema-First Design:** Define schema before implementing resolvers
- **Federation Keys:** Use `@key` directive to identify entities across services
- **Type Safety:** Generate TypeScript types from schema
- **Query Complexity:** Limit query depth and complexity
- **Pagination:** Use cursor-based pagination for large datasets
- **Error Handling:** Return GraphQL errors with appropriate error codes
- **N+1 Problem:** Use DataLoader to batch and cache database queries
- **Security:** Implement query depth limiting and rate limiting
- **Documentation:** Add descriptions to all types, fields, and arguments
- **Versioning:** Avoid breaking changes; use deprecation instead

---

## Schema Design

### Type Definitions

```graphql
"""
User represents a user in the system.
"""
type User @key(fields: "id") {
  """
  Unique identifier for the user.
  """
  id: ID!

  """
  User's email address.
  """
  email: String!

  """
  User's full name.
  """
  name: String!

  """
  User's profile picture URL.
  """
  avatar: String

  """
  When the user was created.
  """
  createdAt: DateTime!
}

"""
DateTime scalar for ISO 8601 date-time strings.
"""
scalar DateTime
```

### Federation Directives

```graphql
# Define entity with key
type User @key(fields: "id") {
  id: ID!
  email: String!
}

# Extend entity from another service
extend type User @key(fields: "id") {
  id: ID! @external
  posts: [Post!]! @requires(fields: "id")
}

# Reference entity from another service
type Post {
  id: ID!
  author: User! @provides(fields: "name email")
}
```

### Input Types

```graphql
input CreateUserInput {
  """
  User's email address (must be unique).
  """
  email: String!

  """
  User's full name.
  """
  name: String!

  """
  Optional password for the user.
  """
  password: String
}

input UpdateUserInput {
  """
  User's full name.
  """
  name: String

  """
  User's profile picture URL.
  """
  avatar: String
}
```

---

## Resolver Patterns

### Basic Resolver

```typescript
// TypeScript/Node.js
import { Resolvers } from './generated/graphql';

const resolvers: Resolvers = {
  Query: {
    user: async (parent, args, context) => {
      const user = await context.dataSources.users.findById(args.id);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    },
  },
  Mutation: {
    createUser: async (parent, args, context) => {
      const user = await context.dataSources.users.create(args.input);
      return { user };
    },
  },
};
```

### Federated Resolver

```typescript
// Resolve federated field
const resolvers: Resolvers = {
  User: {
    posts: async (parent, args, context) => {
      // parent.id is provided by the gateway
      return await context.dataSources.posts.findByUserId(parent.id);
    },
  },
};
```

### DataLoader Pattern

```typescript
import DataLoader from 'dataloader';

// Create DataLoader for batching
const userLoader = new DataLoader(async (ids: readonly string[]) => {
  const users = await db.users.findByIds(ids);
  return ids.map(id => users.find(u => u.id === id) || null);
});

// Use in resolver
const resolvers: Resolvers = {
  Post: {
    author: async (parent, args, context) => {
      return await context.dataLoaders.user.load(parent.authorId);
    },
  },
};
```

---

## Error Handling

### GraphQL Errors

```typescript
import { GraphQLError } from 'graphql';

// Custom error with code
throw new GraphQLError('User not found', {
  extensions: {
    code: 'USER_NOT_FOUND',
    userId: args.id,
  },
});

// Validation error
throw new GraphQLError('Invalid input', {
  extensions: {
    code: 'VALIDATION_ERROR',
    fields: validationErrors,
  },
});
```

### Error Format

```graphql
type Error {
  """
  Error code for programmatic handling.
  """
  code: String!

  """
  Human-readable error message.
  """
  message: String!

  """
  Additional error details.
  """
  details: JSON
}
```

---

## Query Complexity

### Depth Limiting

```typescript
import depthLimit from 'graphql-depth-limit';

const MAX_QUERY_DEPTH = 10;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [depthLimit(MAX_QUERY_DEPTH)],
});
```

### Complexity Analysis

```typescript
import { createComplexityLimitRule } from 'graphql-query-complexity';

const MAX_QUERY_COMPLEXITY = 1000;
const complexityRule = createComplexityLimitRule(MAX_QUERY_COMPLEXITY, {
  scalarCost: 1,
  objectCost: 10,
  listFactor: 10,
});
```

---

## Pagination

### Cursor-Based Pagination

```graphql
type PageInfo {
  """
  Cursor for the next page.
  """
  endCursor: String

  """
  Whether there are more pages.
  """
  hasNextPage: Boolean!

  """
  Whether there are previous pages.
  """
  hasPreviousPage: Boolean!

  """
  Cursor for the previous page.
  """
  startCursor: String
}

type UserConnection {
  """
  List of users.
  """
  edges: [UserEdge!]!

  """
  Pagination information.
  """
  pageInfo: PageInfo!
}

type UserEdge {
  """
  User node.
  """
  node: User!

  """
  Cursor for this user.
  """
  cursor: String!
}
```

### Resolver Implementation

```typescript
const resolvers: Resolvers = {
  Query: {
    users: async (parent, args, context) => {
      const { first, after } = args;
      const limit = first || 20;
      const offset = after ? decodeCursor(after) : 0;

      const users = await context.dataSources.users.findMany({
        limit: limit + 1, // Fetch one extra to check hasNextPage
        offset,
      });

      const hasNextPage = users.length > limit;
      const edges = users.slice(0, limit).map(user => ({
        node: user,
        cursor: encodeCursor(user.id),
      }));

      return {
        edges,
        pageInfo: {
          hasNextPage,
          hasPreviousPage: offset > 0,
          startCursor: edges[0]?.cursor,
          endCursor: edges[edges.length - 1]?.cursor,
        },
      };
    },
  },
};
```

---

## Subscriptions

### Real-Time Updates

```graphql
type Subscription {
  """
  Subscribe to user updates.
  """
  userUpdated(userId: ID!): User!

  """
  Subscribe to new posts.
  """
  postCreated: Post!
}
```

### Resolver Implementation

```typescript
import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

const resolvers: Resolvers = {
  Subscription: {
    userUpdated: {
      subscribe: (parent, args) => {
        return pubsub.asyncIterator(`USER_UPDATED_${args.userId}`);
      },
    },
    postCreated: {
      subscribe: () => {
        return pubsub.asyncIterator('POST_CREATED');
      },
    },
  },
  Mutation: {
    createPost: async (parent, args, context) => {
      const post = await context.dataSources.posts.create(args.input);
      pubsub.publish('POST_CREATED', { postCreated: post });
      return { post };
    },
  },
};
```

---

## Type Generation

### Code Generation

```bash
# Generate TypeScript types from schema
graphql-codegen --config codegen.yml
```

```yaml
# codegen.yml
schema: './schema.graphql'
generates:
  ./generated/graphql.ts:
    plugins:
      - typescript
      - typescript-resolvers
```

---

## Testing

### Unit Testing Resolvers

```typescript
import { resolvers } from './resolvers';
import { createMockContext } from './test-helpers';

describe('User resolvers', () => {
  it('fetches user by id', async () => {
    const context = createMockContext({
      dataSources: {
        users: {
          findById: jest.fn().mockResolvedValue({
            id: '1',
            email: 'test@example.com',
            name: 'Test User',
          }),
        },
      },
    });

    const result = await resolvers.Query.user(null, { id: '1' }, context);

    expect(result).toEqual({
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
    });
  });
});
```

---

## Security

### Authentication

```typescript
// Add user to context
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    const user = token ? await verifyToken(token) : null;
    return { user };
  },
});
```

### Authorization

```typescript
// Check authorization in resolver
const resolvers: Resolvers = {
  Mutation: {
    deleteUser: async (parent, args, context) => {
      if (!context.user) {
        throw new GraphQLError('Unauthorized', {
          extensions: { code: 'UNAUTHORIZED' },
        });
      }

      if (context.user.id !== args.id && !context.user.isAdmin) {
        throw new GraphQLError('Forbidden', {
          extensions: { code: 'FORBIDDEN' },
        });
      }

      return await context.dataSources.users.delete(args.id);
    },
  },
};
```

### Rate Limiting

```typescript
import rateLimit from 'express-rate-limit';

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 100;

const limiter = rateLimit({
  windowMs: RATE_LIMIT_WINDOW_MS,
  max: RATE_LIMIT_MAX,
});

app.use('/graphql', limiter);
```

---

## Anti-Patterns

### Don't: Expose Internal Implementation

```graphql
# ❌ BAD: Exposing database IDs and internal structure
type User {
  databaseId: Int!
  internalStatus: String!
  rawData: JSON!
}

# ✅ GOOD: Abstract internal details
type User {
  id: ID!
  status: UserStatus!
  profile: UserProfile!
}
```

### Don't: Over-Fetching

```graphql
# ❌ BAD: Fetching unnecessary nested data
query {
  users {
    id
    email
    posts {
      id
      title
      comments {
        id
        content
        author {
          id
          email
          posts {
            # Deep nesting
          }
        }
      }
    }
  }
}

# ✅ GOOD: Fetch only what's needed
query {
  users {
    id
    email
    posts {
      id
      title
    }
  }
}
```

### Don't: Ignore N+1 Queries

```typescript
// ❌ BAD: N+1 query problem
const resolvers: Resolvers = {
  Query: {
    posts: async () => {
      return await db.posts.findAll();
    },
  },
  Post: {
    author: async parent => {
      return await db.users.findById(parent.authorId); // N queries!
    },
  },
};

// ✅ GOOD: Use DataLoader
const resolvers: Resolvers = {
  Post: {
    author: async (parent, args, context) => {
      return await context.dataLoaders.user.load(parent.authorId);
    },
  },
};
```

---

## Related Documentation

- [Apollo Federation Docs](https://www.apollographql.com/docs/federation/)
- [GraphQL Best Practices](https://graphql.org/learn/best-practices/)
- `.rulesync/rules/architecture.md` - Architecture patterns
- `.rulesync/rules/security.md` - Security patterns
