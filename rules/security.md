---
targets:
  - '*'
root: false
description: Security best practices and patterns
globs:
  - '**/*'
cursor:
  description: Security best practices and patterns
  globs:
    - '**/*'
---

# Security Rules

## Security Best Practices

- **Input Validation:** Validate and sanitize all user inputs
- **Authentication:** Implement secure authentication (JWT, OAuth)
- **Authorization:** Check permissions for all protected resources
- **SQL Injection:** Use parameterized queries, never raw SQL with user input
- **XSS Prevention:** Sanitize output, use Content Security Policy
- **CSRF Protection:** Use CSRF tokens for state-changing operations
- **Secrets Management:** Never commit secrets, use environment variables or
  secret managers
- **HTTPS Only:** Use HTTPS for all communications
- **Rate Limiting:** Implement rate limiting to prevent abuse
- **Error Messages:** Don't leak sensitive information in error messages

---

## Input Validation

### TypeScript/JavaScript

```typescript
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(100),
  age: z.number().int().min(0).max(120),
});

function createUser(input: unknown) {
  const validated = userSchema.parse(input);
  // Use validated data
}
```

### PHP/Laravel

```php
$request->validate([
    'email' => 'required|email|max:255',
    'name' => 'required|string|max:100',
    'age' => 'required|integer|min:0|max:120',
]);
```

### Ruby/Rails

```ruby
class User < ApplicationRecord
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :name, presence: true, length: { maximum: 100 }
  validates :age, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 120 }
end
```

---

## SQL Injection Prevention

### Parameterized Queries

```typescript
// ✅ GOOD: Parameterized query
const user = await db.query('SELECT * FROM users WHERE id = ?', [userId]);

// ❌ BAD: String concatenation
const user = await db.query(`SELECT * FROM users WHERE id = '${userId}'`);
```

### ORM Usage

```typescript
// ✅ GOOD: Use ORM
const user = await User.findById(userId);

// ❌ BAD: Raw SQL with user input
const user = await db.query(`SELECT * FROM users WHERE id = '${userId}'`);
```

---

## Authentication

### JWT Tokens

```typescript
import jwt from 'jsonwebtoken';

// Generate token
const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
  expiresIn: '24h',
});

// Verify token
const decoded = jwt.verify(token, process.env.JWT_SECRET!);
```

---

## Authorization

### Role-Based Access Control

```typescript
function requireRole(role: string) {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };
}
```

---

## Secrets Management

### Environment Variables

```bash
# .env (never commit)
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key
API_KEY=your-api-key
```

### Access in Code

```typescript
// ✅ GOOD: Use environment variables
const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
  throw new Error('DATABASE_URL is required');
}

// ❌ BAD: Hardcoded secrets
const dbUrl = 'postgresql://user:password@localhost/db';
```

---

## XSS Prevention

### Sanitize Output

```typescript
import DOMPurify from 'dompurify';

// ✅ GOOD: Sanitize user input
const safeHtml = DOMPurify.sanitize(userInput);

// ❌ BAD: Direct output
element.innerHTML = userInput;
```

### Content Security Policy

```typescript
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline'",
  );
  next();
});
```

---

## CSRF Protection

### Laravel

```php
// Automatically handled by Laravel
// Use @csrf in forms
<form method="POST" action="/users">
    @csrf
    <!-- form fields -->
</form>
```

### Express

```typescript
import csrf from 'csurf';

const csrfProtection = csrf({ cookie: true });
app.use(csrfProtection);
```

---

## Rate Limiting

```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

---

## Related Documentation

- `.rulesync/rules/architecture.md` - Architecture patterns
- `.rulesync/rules/code-quality.md` - Code quality standards
