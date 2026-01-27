---
targets:
  - '*'
root: false
description: Vue.js best practices and patterns
globs:
  - '**/*.vue'
  - '**/components/**'
cursor:
  description: Vue.js best practices and patterns
  globs:
    - '**/*.vue'
    - '**/components/**'
---

# Vue.js Rules

## Vue.js Best Practices

- **Composition API:** Use Composition API for new components (prefer over
  Options API)
- **TypeScript:** Use TypeScript with `<script setup lang="ts">`
- **Component Composition:** Compose small, focused components
- **Composables:** Extract reusable logic into composables
- **Performance:** Use `v-memo`, `v-once`, and computed properties appropriately
- **State Management:** Use Pinia for global state management
- **Error Handling:** Implement error boundaries and proper error handling
- **Accessibility:** Ensure WCAG 2.1 AA compliance
- **Testing:** Write tests for components using Vue Test Utils
- **Code Splitting:** Use lazy loading for route-based code splitting

---

## Component Structure

### Single File Component

```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import type { User } from '@/types';

interface Props {
  user: User;
  onSelect?: (user: User) => void;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  select: [user: User];
}>();

const handleClick = () => {
  emit('select', props.user);
};
</script>

<template>
  <div @click="handleClick" class="user-card">
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
  </div>
</template>

<style scoped>
.user-card {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
```

---

## Composition API

### Basic Setup

```vue
<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';

// Reactive state
const count = ref(0);
const name = ref('');

// Computed properties
const doubleCount = computed(() => count.value * 2);

// Watchers
watch(count, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`);
});

// Lifecycle hooks
onMounted(() => {
  console.log('Component mounted');
});
</script>
```

### Composables

```typescript
// composables/useUser.ts
import { ref, computed } from 'vue';
import type { User } from '@/types';

export function useUser(userId: string) {
  const user = ref<User | null>(null);
  const loading = ref(true);
  const error = ref<Error | null>(null);

  const fetchUser = async () => {
    try {
      loading.value = true;
      user.value = await api.getUser(userId);
    } catch (e) {
      error.value = e as Error;
    } finally {
      loading.value = false;
    }
  };

  const userName = computed(() => user.value?.name ?? 'Unknown');

  return {
    user,
    loading,
    error,
    userName,
    fetchUser,
  };
}
```

---

## State Management with Pinia

### Store Definition

```typescript
// stores/user.ts
import { defineStore } from 'pinia';
import type { User } from '@/types';

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null as User | null,
    users: [] as User[],
  }),

  getters: {
    isAuthenticated: state => state.currentUser !== null,
    userCount: state => state.users.length,
  },

  actions: {
    async fetchUsers() {
      this.users = await api.getUsers();
    },

    setCurrentUser(user: User) {
      this.currentUser = user;
    },
  },
});
```

### Using Store in Component

```vue
<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { currentUser, isAuthenticated } = storeToRefs(userStore);

onMounted(() => {
  userStore.fetchUsers();
});
</script>
```

---

## Performance Optimization

### v-memo

```vue
<template>
  <div v-for="item in items" :key="item.id" v-memo="[item.id, item.name]">
    <ExpensiveComponent :item="item" />
  </div>
</template>
```

### Computed Properties

```vue
<script setup lang="ts">
import { computed } from 'vue';

const sortedUsers = computed(() => {
  return users.value.sort((a, b) => a.name.localeCompare(b.name));
});
</script>
```

---

## Error Handling

### Error Boundary Pattern

```vue
<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue';

const error = ref<Error | null>(null);

onErrorCaptured(err => {
  error.value = err;
  return false; // Prevent error from propagating
});
</script>

<template>
  <div v-if="error" class="error">
    <p>Something went wrong: {{ error.message }}</p>
  </div>
  <slot v-else />
</template>
```

---

## Testing

### Component Testing

```typescript
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import UserCard from './UserCard.vue';

describe('UserCard', () => {
  it('renders user information', () => {
    const user = { id: '1', name: 'John Doe', email: 'john@example.com' };
    const wrapper = mount(UserCard, {
      props: { user },
    });

    expect(wrapper.text()).toContain('John Doe');
    expect(wrapper.text()).toContain('john@example.com');
  });
});
```

---

## Anti-Patterns

### Don't: Mutate Props

```vue
<script setup lang="ts">
// ❌ BAD: Mutating props
const props = defineProps<{ count: number }>();
props.count++; // Error!

// ✅ GOOD: Use emit or computed
const emit = defineEmits<{ update: [value: number] }>();
const localCount = computed({
  get: () => props.count,
  set: value => emit('update', value),
});
</script>
```

### Don't: Use v-if with v-for

```vue
<!-- ❌ BAD: v-if and v-for on same element -->
<div v-for="item in items" v-if="item.active" :key="item.id">
  {{ item.name }}
</div>

<!-- ✅ GOOD: Use template or computed -->
<template v-for="item in activeItems" :key="item.id">
  <div>{{ item.name }}</div>
</template>
```

---

## Related Documentation

- `.rulesync/rules/ui-ux.md` - UI/UX patterns
- `.rulesync/rules/typescript.md` - TypeScript patterns
- [Vue.js Documentation](https://vuejs.org/)
