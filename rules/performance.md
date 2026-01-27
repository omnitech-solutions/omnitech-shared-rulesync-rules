---
targets:
  - '*'
root: false
description: Performance best practices and patterns
globs:
  - '**/*'
cursor:
  description: Performance best practices and patterns
  globs:
    - '**/*'
---

# Performance Rules

## Performance Best Practices

- **Database Optimization:** Use indexes, optimize queries, prevent N+1 queries
- **Caching Strategy:** Implement appropriate caching layers (application, CDN,
  database)
- **Code Splitting:** Lazy load routes and components
- **Bundle Size:** Monitor and optimize bundle sizes
- **Image Optimization:** Use appropriate image formats and sizes
- **API Response Times:** Define and measure response-time budgets
- **Database Queries:** Optimize with proper indexes and query patterns
- **Background Jobs:** Use queues for heavy processing
- **Connection Pooling:** Use connection pools for database connections
- **Monitoring:** Track performance metrics and set up alerts
- **Avoid Premature Optimization:** Measure before changing behavior

---

## Database Performance

### Indexing

```sql
-- ✅ GOOD: Add indexes for frequently queried fields
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_posts_user_id ON posts(user_id);
```

### Query Optimization

```typescript
// ❌ BAD: N+1 query problem
const users = await User.findAll();
for (const user of users) {
  const posts = await Post.findAll({ where: { userId: user.id } });
}

// ✅ GOOD: Eager loading
const users = await User.findAll({
  include: [{ model: Post }],
});
```

---

## Caching

### Application Cache

```typescript
// Redis caching
import Redis from 'ioredis';
const redis = new Redis();

async function getUser(id: string) {
  const cacheKey = `user:${id}`;
  const cached = await redis.get(cacheKey);

  if (cached) {
    return JSON.parse(cached);
  }

  const user = await db.users.findById(id);
  await redis.setex(cacheKey, 3600, JSON.stringify(user));
  return user;
}
```

---

## Frontend Performance

### Code Splitting

```typescript
// React lazy loading
const UserProfile = React.lazy(() => import('./UserProfile'));

// Vue lazy loading
const UserProfile = () => import('./UserProfile.vue');
```

### Bundle Optimization

```typescript
// Tree shaking
import { debounce } from 'lodash-es'; // ✅ GOOD: Import specific function

import _ from 'lodash'; // ❌ BAD: Import entire library
```

---

## API Performance

### Response Time Targets

- Set SLOs per endpoint class (read vs write, user-facing vs batch)
- Monitor p95/p99 latencies and regressions
- Budget for client-side rendering and network conditions

### Pagination

```typescript
// ✅ GOOD: Cursor-based pagination
async function getUsers(cursor?: string, limit = 20) {
  const users = await db.users.findMany({
    take: limit + 1,
    cursor: cursor ? { id: cursor } : undefined,
    orderBy: { createdAt: 'desc' },
  });

  const hasNextPage = users.length > limit;
  return {
    items: users.slice(0, limit),
    nextCursor: hasNextPage ? users[limit - 1].id : null,
  };
}
```

---

## Performance Verification

- Benchmark critical paths before and after changes
- Use realistic data volumes and production-like conditions
- Track regressions with automated performance checks

---

## Related Documentation

- `.rulesync/rules/architecture.md` - Architecture patterns
- `.rulesync/rules/database.md` - Database patterns
