---
targets:
  - '*'
root: false
description: Node.js best practices and patterns
globs:
  - '**/*.js'
  - '**/*.mjs'
  - '**/server.js'
  - '**/app.js'
cursor:
  description: Node.js best practices and patterns
  globs:
    - '**/*.js'
    - '**/*.mjs'
---

# Node.js Rules

## Node.js Best Practices

- **Async/Await:** Use async/await instead of callbacks
- **Error Handling:** Always handle errors in async operations
- **Environment Variables:** Use environment variables for configuration
- **Logging:** Use structured logging
- **Process Management:** Use a process manager appropriate to the deployment
- **Security:** Keep dependencies updated, use security scanning
- **Performance:** Use clustering for CPU-intensive tasks
- **Middleware:** Use middleware for cross-cutting concerns
- **Validation:** Validate all inputs
- **Rate Limiting:** Implement rate limiting

---

## Async/Await

```javascript
// ✅ GOOD: Async/await
async function fetchUser(id) {
  try {
    const user = await db.users.findById(id);
    return user;
  } catch (error) {
    logger.error('Failed to fetch user', { id, error });
    throw error;
  }
}

// ❌ BAD: Callbacks
function fetchUser(id, callback) {
  db.users.findById(id, (error, user) => {
    if (error) {
      callback(error);
    } else {
      callback(null, user);
    }
  });
}
```

---

## Error Handling

```javascript
// ✅ GOOD: Proper error handling
async function processRequest(req, res) {
  try {
    const result = await processData(req.body);
    res.json(result);
  } catch (error) {
    logger.error('Request processing failed', { error });
    res.status(500).json({ error: 'Internal server error' });
  }
}
```

---

## Middleware

```javascript
// Express middleware
function loggerMiddleware(req, res, next) {
  logger.info('Request', {
    method: req.method,
    path: req.path,
    ip: req.ip,
  });
  next();
}

app.use(loggerMiddleware);
```

---

## Related Documentation

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- `.rulesync/rules/architecture.md` - Architecture patterns
