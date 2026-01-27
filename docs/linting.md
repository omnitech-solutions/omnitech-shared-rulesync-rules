# Linting and Code Quality

This project uses a comprehensive linting and code quality setup to ensure
consistent, maintainable code across all contributors.

## 🛠️ Tools Used

### ESLint

- **Purpose**: JavaScript/TypeScript linting and code quality
- **Config**: `.eslintrc.json`
- **Rules**: TypeScript-aware with strict formatting rules

### Prettier

- **Purpose**: Code formatting and consistency
- **Config**: `.prettierrc.json`
- **Integration**: Works with ESLint via `eslint-config-prettier`

### Husky

- **Purpose**: Git hooks for automated quality checks
- **Config**: `.husky/` directory
- **Hooks**: Pre-commit and commit-msg validation

### lint-staged

- **Purpose**: Run linters only on staged files
- **Config**: `package.json` > `lint-staged`
- **Performance**: Fast checks on changed files only

### Commitlint

- **Purpose**: Enforce conventional commit messages
- **Config**: `commitlint.config.json`
- **Standard**: Conventional Commits specification

## 📋 Available Scripts

```bash
# Lint all files (fails on errors)
pnpm lint

# Fix auto-fixable linting issues
pnpm lint:fix

# Quick lint check (quiet mode)
pnpm lint:check

# Format all files with Prettier
pnpm format

# Check formatting without changing files
pnpm format:check

# Type checking without compilation
pnpm typecheck

# Watch TypeScript compilation
pnpm typecheck:watch

# Full quality check (typecheck + lint + format)
pnpm build

# Development mode with type watching
pnpm dev

# Clean build artifacts and cache
pnpm clean
```

## 🔧 Pre-commit Hooks

### Automatic Checks

When you run `git commit`, the following automatically runs:

1. **ESLint** - Fixes auto-fixable issues and reports errors
2. **Prettier** - Formats code consistently
3. **TypeScript** - Type checking (via build script)

### Commit Message Validation

Commit messages must follow
[Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`,
`ci`, `chore`, `revert`

**Examples**:

```bash
feat(mcp): add automatic IDE detection
fix: resolve TypeScript compilation errors
docs: update setup instructions
```

## 📁 Configuration Files

### `.eslintrc.json`

- TypeScript-aware ESLint configuration
- Strict formatting rules
- Prettier integration to avoid conflicts

### `.prettierrc.json`

- Consistent code formatting
- 100-character line length
- Single quotes, trailing commas

### `.editorconfig`

- Consistent editor settings across IDEs
- Handles different file types appropriately
- Ensures consistent indentation and line endings

### `commitlint.config.json`

- Enforces conventional commit messages
- Custom rules for subject case and length
- Prevents poor commit messages

## 🚀 Development Workflow

### Daily Development

1. Make your changes
2. Run `pnpm lint:fix` to auto-fix issues
3. Run `pnpm build` to verify everything passes
4. Commit with conventional message

### Pre-commit

- Git hooks automatically run linting and formatting
- Failed commits will show errors to fix
- Re-run `git commit` after fixing issues

### CI/CD Integration

- All quality checks run in CI
- Failing builds indicate quality issues
- Same rules as local development

## 🎯 Quality Standards

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Zero warnings policy
- **Prettier**: Consistent formatting
- **Line Length**: Maximum 100 characters

### Commit Quality

- **Messages**: Conventional commits required
- **Scope**: Use appropriate scope when relevant
- **Description**: Clear, concise change description

### File Organization

- **Imports**: Grouped and sorted
- **Exports**: Consistent export patterns
- **Naming**: Descriptive and conventional

## 🔍 Troubleshooting

### ESLint/Prettier Conflicts

```bash
# Reset and reformat
pnpm clean
pnpm format
pnpm lint:fix
```

### Commit Message Issues

```bash
# Check commit message
echo "feat: add new feature" | npx commitlint --verbose

# Amend last commit
git commit --amend -m "feat: add new feature"
```

### Type Checking Errors

```bash
# Detailed TypeScript errors
pnpm typecheck --pretty

# Watch mode for continuous checking
pnpm typecheck:watch
```

## 📚 Best Practices

### Writing Code

1. **Use TypeScript types** - Avoid `any` when possible
2. **Follow ESLint rules** - They prevent common issues
3. **Format as you go** - `pnpm format` saves time
4. **Write meaningful commits** - Future you will thank you

### Before Committing

1. Run `pnpm build` to verify everything
2. Check git status for unstaged changes
3. Review your commit message
4. Ensure tests pass (when applicable)

### Team Collaboration

1. **Same tools, same rules** - Consistency across team
2. **Help with PR reviews** - Quality tools help reviewers
3. **Document exceptions** - Why rules were disabled if needed
4. **Keep configs updated** - Regular dependency updates

## 🔄 Continuous Improvement

This linting setup is designed to:

- **Catch issues early** - Before they reach production
- **Maintain consistency** - Across all contributors
- **Enable fast reviews** - Focus on logic, not style
- **Reduce technical debt** - Enforce quality standards

Regular updates to linting tools and rules ensure the project benefits from the
latest best practices in JavaScript/TypeScript development.
