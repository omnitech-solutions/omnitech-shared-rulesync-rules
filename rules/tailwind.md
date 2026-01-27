---
targets:
  - '*'
root: false
description: Tailwind CSS best practices and patterns
globs:
  - '**/*.tsx'
  - '**/*.jsx'
  - '**/*.vue'
  - '**/*.css'
cursor:
  description: Tailwind CSS best practices and patterns
  globs:
    - '**/*.tsx'
    - '**/*.jsx'
    - '**/*.vue'
---
# Tailwind CSS Rules

## Tailwind Best Practices

- **Utility-First:** Use utility classes instead of custom CSS
- **Component Extraction:** Extract repeated patterns into components
- **Responsive Design:** Use responsive prefixes (sm:, md:, lg:, xl:)
- **Dark Mode:** Use dark: prefix for dark mode styles
- **Custom Colors:** Define custom colors in tailwind.config.js
- **Consistent Spacing:** Use Tailwind spacing scale
- **No Arbitrary Values:** Avoid arbitrary values when possible
- **Performance:** Use PurgeCSS to remove unused styles
- **Accessibility:** Ensure proper contrast and focus states

---

## Utility Classes

### Spacing

```tsx
// ✅ GOOD: Use Tailwind spacing scale
<div className="p-4 m-2">
  <h1 className="mb-4">Title</h1>
</div>

// ❌ BAD: Arbitrary values
<div className="p-[13px] m-[7px]">
  <h1 className="mb-[15px]">Title</h1>
</div>
```

### Colors

```tsx
// ✅ GOOD: Use Tailwind color palette
<button className="bg-blue-500 hover:bg-blue-600 text-white">
  Click me
</button>

// ✅ GOOD: Custom colors from config
<button className="bg-brand-primary hover:bg-brand-primary-dark">
  Click me
</button>
```

---

## Responsive Design

```tsx
// ✅ GOOD: Mobile-first responsive design
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

## Component Patterns

### Extract Repeated Patterns

```tsx
// ✅ GOOD: Extract to component
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {children}
    </div>
  );
}
```

---

## Related Documentation

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- `.rulesync/rules/ui-ux.md` - UI/UX patterns
