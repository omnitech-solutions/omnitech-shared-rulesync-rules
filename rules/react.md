---
targets:
  - '*'
root: false
description: React best practices and patterns
globs:
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/components/**'
cursor:
  description: React best practices and patterns
  globs:
    - '**/*.tsx'
    - '**/*.jsx'
  - '**/components/**'
---
# React Rules

## React Best Practices

- **Functional Components:** Use functional components with hooks, avoid class components
- **Component Composition:** Compose small, focused components
- **Custom Hooks:** Extract reusable logic into custom hooks
- **Type Safety:** Use TypeScript for all components
- **Performance:** Use React.memo, useMemo, useCallback appropriately
- **State Management:** Use React Query for server state, Context/useState for client state
- **Error Boundaries:** Implement error boundaries for error handling
- **Accessibility:** Ensure WCAG 2.1 AA compliance
- **Testing:** Write tests for components using React Testing Library
- **Code Splitting:** Use lazy loading for route-based code splitting

---

## Component Structure

### Component File Organization

```typescript
// components/UserCard/UserCard.tsx
import { User } from '@/types';

interface UserCardProps {
  user: User;
  onSelect?: (user: User) => void;
}

export function UserCard({ user, onSelect }: UserCardProps) {
  return (
    <div onClick={() => onSelect?.(user)}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}
```

### Component Patterns

```typescript
// ✅ GOOD: Small, focused component
function UserAvatar({ user }: { user: User }) {
  return (
    <img
      src={user.avatar}
      alt={user.name}
      className="w-10 h-10 rounded-full"
    />
  );
}

// ✅ GOOD: Composed component
function UserCard({ user }: { user: User }) {
  return (
    <div className="card">
      <UserAvatar user={user} />
      <UserInfo user={user} />
    </div>
  );
}
```

---

## Hooks

### useState

```typescript
// ✅ GOOD: Initialize with function for expensive computations
const [count, setCount] = useState(() => {
  return expensiveComputation();
});

// ✅ GOOD: Use functional updates for state based on previous state
setCount(prev => prev + 1);
```

### useEffect

```typescript
// ✅ GOOD: Cleanup function
useEffect(() => {
  const subscription = subscribe();
  return () => {
    subscription.unsubscribe();
  };
}, [dependencies]);

// ✅ GOOD: Separate effects by concern
useEffect(() => {
  // Handle document title
}, [title]);

useEffect(() => {
  // Handle analytics
}, [page]);
```

### Custom Hooks

```typescript
// hooks/useUser.ts
export function useUser(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchUser(userId)
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [userId]);

  return { user, loading, error };
}
```

---

## Performance Optimization

### React.memo

```typescript
// ✅ GOOD: Memoize expensive components
const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
  return <div>{/* Expensive rendering */}</div>;
});
```

### useMemo

```typescript
// ✅ GOOD: Memoize expensive calculations
const sortedUsers = useMemo(() => {
  return users.sort((a, b) => a.name.localeCompare(b.name));
}, [users]);
```

### useCallback

```typescript
// ✅ GOOD: Memoize callbacks passed to child components
const handleClick = useCallback(() => {
  onSelect(user);
}, [user, onSelect]);
```

---

## State Management

### Server State with React Query

```typescript
import { useQuery, useMutation } from '@tanstack/react-query';

function UserList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const createUser = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data?.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
```

### Client State with Context

```typescript
// contexts/ThemeContext.tsx
const ThemeContext = createContext<{
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}>({
  theme: 'light',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

---

## Error Handling

### Error Boundaries

```typescript
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong</div>;
    }

    return this.props.children;
  }
}
```

---

## Testing

### Component Testing

```typescript
import { render, screen } from '@testing-library/react';
import { UserCard } from './UserCard';

describe('UserCard', () => {
  it('renders user information', () => {
    const user = { id: '1', name: 'John Doe', email: 'john@example.com' };
    render(<UserCard user={user} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });
});
```

---

## Anti-Patterns

### Don't: Use Index as Key

```typescript
// ❌ BAD: Using index as key
{items.map((item, index) => (
  <Item key={index} item={item} />
))}

// ✅ GOOD: Use unique ID
{items.map(item => (
  <Item key={item.id} item={item} />
))}
```

### Don't: Mutate State Directly

```typescript
// ❌ BAD: Mutating state
const [users, setUsers] = useState([]);
users.push(newUser); // Mutation!

// ✅ GOOD: Create new array
setUsers([...users, newUser]);
```

### Don't: Overuse useMemo/useCallback

```typescript
// ❌ BAD: Unnecessary memoization
const name = useMemo(() => user.name, [user.name]);

// ✅ GOOD: Simple assignment
const name = user.name;
```

---

## Related Documentation

- `.rulesync/rules/react-hooks.md` - React hooks patterns
- `.rulesync/rules/ui-ux.md` - UI/UX patterns
- `.rulesync/rules/typescript.md` - TypeScript patterns
