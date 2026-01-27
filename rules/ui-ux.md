---
targets:
  - '*'
root: false
description: UI/UX best practices and patterns
globs:
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/*.vue'
cursor:
  description: UI/UX best practices and patterns
  globs:
    - '**/*.tsx'
    - '**/*.jsx'
    - '**/*.vue'
---
# UI/UX Rules

## UI/UX Best Practices

- **Accessibility First:** Ensure WCAG 2.1 AA compliance
- **Responsive Design:** Test across mobile (320px+), tablet (768px+), and desktop (1024px+)
- **Loading States:** Always show loading indicators for async operations
- **Error States:** Provide clear, actionable error messages
- **Consistent Design:** Use design system components and patterns
- **Keyboard Navigation:** All interactive elements must be keyboard accessible
- **Touch Targets:** Minimum 44x44px tap targets for mobile
- **Color Contrast:** Ensure sufficient contrast ratios (4.5:1 for text)
- **Focus States:** Provide visible focus indicators
- **Semantic HTML:** Use proper HTML elements for structure

---

## Accessibility

### ARIA Labels

```tsx
// ✅ GOOD: Descriptive ARIA labels
<button aria-label="Close dialog" onClick={handleClose}>
  <Icon name="close" />
</button>

// ✅ GOOD: Describe state changes
<button
  aria-expanded={isOpen}
  aria-controls="menu"
  onClick={toggleMenu}
>
  Menu
</button>
```

### Keyboard Navigation

```tsx
// ✅ GOOD: Keyboard accessible
<button
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Submit
</button>
```

---

## Responsive Design

### Mobile-First Approach

```tsx
// ✅ GOOD: Mobile-first with Tailwind
<div className="
  w-full
  md:w-1/2
  lg:w-1/3
  xl:w-1/4
">
  Content
</div>
```

---

## Loading States

```tsx
// ✅ GOOD: Show loading state
function UserList() {
  const { data, isLoading } = useQuery(['users'], fetchUsers);
  
  if (isLoading) {
    return <div>Loading users...</div>;
  }
  
  return (
    <div>
      {data.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
```

---

## Error States

```tsx
// ✅ GOOD: Clear error message
function UserList() {
  const { data, error } = useQuery(['users'], fetchUsers);
  
  if (error) {
    return (
      <div role="alert">
        <p>Failed to load users. Please try again.</p>
        <button onClick={refetch}>Retry</button>
      </div>
    );
  }
  
  return <div>{/* ... */}</div>;
}
```

---

## Related Documentation

- `.rulesync/rules/react.md` - React patterns
- `.rulesync/rules/vue.md` - Vue.js patterns
- `.rulesync/rules/tailwind.md` - Tailwind CSS patterns
