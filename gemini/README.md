# Gemini Rules Bundle

This directory provides gemini-specific rule/command wrappers that reference the
shared rules in the package root (single source of truth).

- Rules in `gemini/rules` mirror `.rulesync/rules` and stack rules.
- Commands in `gemini/commands` mirror `.rulesync/commands` (Gemini uses TOML).
- Subagents in `gemini/subagents` mirror `.rulesync/subagents`.

Update the shared rules and commands to change behavior across all bundles.
