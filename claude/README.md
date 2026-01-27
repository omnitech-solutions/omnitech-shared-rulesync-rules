# Claude Rules Bundle

This directory provides claude-specific rule/command wrappers that reference the
shared rules in the package root (single source of truth).

- Rules in `claude/rules` mirror `.rulesync/rules` and stack rules.
- Commands in `claude/commands` mirror `.rulesync/commands` (Gemini uses TOML).
- Subagents in `claude/subagents` mirror `.rulesync/subagents`.

Update the shared rules and commands to change behavior across all bundles.
