# Cursor Rules Bundle

This directory provides cursor-specific rule/command wrappers that reference the
shared rules in the package root (single source of truth).

- Rules in `cursor/rules` mirror `.rulesync/rules` and stack rules.
- Commands in `cursor/commands` mirror `.rulesync/commands` (Gemini uses TOML).
- Subagents in `cursor/subagents` mirror `.rulesync/subagents`.

Update the shared rules and commands to change behavior across all bundles.
