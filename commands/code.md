---
targets:
  - '*'
description: ''
---
# CODE Task

**Persona:** Execute this task as the `@developer` subagent (Devin, Staff Engineer 💻).  
Load the persona characteristics from `.rulesync/subagents/developer.md` before proceeding.

**Required Context:** Review these rules before proceeding:

- `.rulesync/rules/architecture.md` - Architectural patterns and component structure
- `.rulesync/rules/code-quality.md` - Code quality standards and conventions
- `.rulesync/rules/testing.md` - Testing requirements and patterns
- `.rulesync/rules/documentation.md` - Documentation standards
- `.rulesync/rules/database.md` - Database schema patterns (if applicable)
- `.rulesync/rules/security.md` - Security best practices
- `.rulesync/rules/ui-ux.md` - UI/UX patterns (if building frontend)
- Technology-specific rules (GraphQL, React, Vue, Rails, Laravel, etc.)

---

## Task Objective

Implement a **Technical Specification** (from `/docs/specs`) with production-ready code, comprehensive test coverage, and thorough documentation. Mark the spec as complete and optionally create a draft pull request.

---

## Task Instructions

1. **Read the Technical Specification:**
   - Ask: "What's the path to the Technical Specification?" (e.g., `/docs/specs/magic-link-login.md`)
   - Parse its contents to understand requirements, architecture, data models, APIs, testing requirements
   - Read any referenced Product Brief for additional context
   - Identify which technologies are involved (GraphQL, React, Vue, Rails, Laravel, etc.)

2. **Ask clarification questions:**
   1. "I've reviewed the spec. Should I proceed with full implementation including tests and documentation?"
   2. "Are there any specific parts of the spec you'd like me to prioritize or implement first?"
   3. "Should I create a feature branch for this work?"

3. **Create feature branch (if approved):**
   - Branch naming from spec title: `feat/<feature-name-slug>`
   - Run: `git checkout -b feat/<feature-name-slug>`
   - Show branch creation confirmation

4. **Implement following technology-specific patterns:**

   **For GraphQL (Federated):**
   - Create schema definitions in appropriate service
   - Define resolvers following federation patterns
   - Add directives and federation keys
   - Follow patterns from `.rulesync/rules/graphql.md`

   **For React:**
   - Follow component patterns from `.rulesync/rules/react.md`
   - Use hooks appropriately (see `.rulesync/rules/react-hooks.md`)
   - Implement Server Components where applicable
   - Follow patterns from `.rulesync/rules/ui-ux.md`

   **For Vue.js:**
   - Use Composition API patterns
   - Follow component structure from `.rulesync/rules/vue.md`
   - Implement proper state management
   - Follow patterns from `.rulesync/rules/ui-ux.md`

   **For Ruby on Rails:**
   - Follow MVC patterns from `.rulesync/rules/rails.md`
   - Use ActiveRecord conventions
   - Implement proper service objects
   - Follow RESTful conventions

   **For Laravel (PHP 8.x):**
   - Follow MVC patterns from `.rulesync/rules/laravel.md`
   - Use Eloquent ORM conventions
   - Implement proper service classes
   - Follow RESTful conventions

   **For Node.js:**
   - Follow patterns from `.rulesync/rules/nodejs.md`
   - Use appropriate framework (Express, Fastify, etc.)
   - Implement proper middleware
   - Follow async/await patterns

5. **Write comprehensive tests:**

   Follow testing standards from `.rulesync/rules/testing.md`:
   - **Unit Tests** - Test all business logic, place test files alongside source
   - **Integration Tests** - Test API endpoints, database operations
   - **E2E Tests** - Test complete user workflows (if applicable)

   Run tests: `pnpm test` (or `npm test`, `rspec`, `phpunit`, etc.)

6. **Document the code:**

   Follow documentation standards from `.rulesync/rules/documentation.md`:
   - Add JSDoc/PHPDoc to all exported functions
   - Add inline comments explaining complex logic
   - Update relevant README files
   - Document new environment variables

7. **Run quality checks with enforcement gates:**

   Follow quality standards from `.rulesync/rules/code-quality.md`:

   ```bash
   # JavaScript/TypeScript projects
   pnpm lint
   pnpm typecheck
   pnpm test

   # Ruby on Rails
   bundle exec rubocop
   bundle exec rspec

   # Laravel
   composer phpstan
   composer test
   ```

   **Quality Gate Enforcement:**

   Evaluate results against these gates:

   **🚫 BLOCKER (P0) - Must Fix Before Proceeding:**
   - ❌ TypeScript/PHP type errors → **STOP** - Fix all type errors
   - ❌ Unit tests failing → **STOP** - All tests must pass
   - ❌ Test coverage < 80% on new code → **STOP** - Add more tests
   - ❌ Critical linter errors (security, bugs) → **STOP** - Fix immediately
   - ❌ Security vulnerabilities found → **STOP** - Address security issues

   **⚠️ WARNING (P1) - Should Fix (Ask user):**
   - ⚠️ Missing documentation on exported public APIs
   - ⚠️ E2E tests skipped or not run
   - ⚠️ Performance issues detected
   - ⚠️ Accessibility violations found
   - ⚠️ Minor linter warnings (>10 warnings)

   **ℹ️ INFO (P2) - Nice to Have (Continue with notes):**
   - ℹ️ Code duplication detected
   - ℹ️ Minor style warnings (<10 warnings)
   - ℹ️ Opportunity for optimization noted

   If any checks fail with P0 issues, fix them before proceeding to the next step.

8. **Update the Technical Specification:**
   - Update `Status` field from "Draft" to "✅ Completed"
   - Add an "Implementation Summary" section with:
     - Implemented by, date, branch name
     - Key components/features built
     - Files changed summary
     - Test coverage stats
     - Documentation updates

9. **Provide summary:**
   - List all files created or modified
   - Summarize what was implemented
   - Highlight key features and functionality
   - Show test coverage and quality check results

10. **Ask about next steps:**
    - "The implementation is complete! Would you like to:"
      - "1. Create a draft pull request? Run `/draft-pr`"
      - "2. Run QA review? Run `/review`"
      - "3. Get an explanation of how it works? Run `/explain`"
      - "4. Make any adjustments or improvements?"

---

## Notes

- Follow all coding standards from the rules files
- Aim for >90% test coverage on critical paths
- Ensure all code is properly documented
- Don't proceed to PR creation until all quality checks pass
- Adapt patterns to the specific technology stack being used
