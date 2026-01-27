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

- **Accessibility First:** Meet applicable accessibility standards (e.g., WCAG)
- **Responsive Design:** Test across common device sizes and orientations
- **Loading States:** Provide clear feedback during async operations
- **Error States:** Provide clear, actionable error messages
- **Consistent Design:** Use design system components and patterns
- **Keyboard Navigation:** All interactive elements must be keyboard accessible
- **Touch Targets:** Ensure tap targets are comfortably touchable
- **Color Contrast:** Ensure sufficient contrast for readability
- **Focus States:** Provide visible focus indicators
- **Semantic HTML:** Use proper HTML elements for structure
- **Progressive Disclosure:** Show complexity only when needed

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
  onKeyDown={e => {
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
<div
  className="
  w-full
  md:w-1/2
  lg:w-1/3
  xl:w-1/4
"
>
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

- `.rulesync/rules/stacks/react/overview.md` - React patterns
- `.rulesync/rules/stacks/vue/overview.md` - Vue.js patterns
- `.rulesync/rules/stacks/vue/forms.md` - Vue form guidance
- `.rulesync/rules/stacks/vue/accessibility.md` - Vue accessibility guidance
- `.rulesync/rules/stacks/tailwind/overview.md` - Utility-first CSS patterns
- `.rulesync/rules/stacks/tailwind/forms.md` - Utility-first form patterns
- `.rulesync/rules/stacks/tailwind/motion.md` - Utility-first motion patterns
- `.rulesync/rules/stacks/tailwind/accessibility.md` - Utility-first
  accessibility
