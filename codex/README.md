# Codex Rules Bundle

This directory provides codex-specific rule/command wrappers that reference the
shared rules in the package root (single source of truth).

- Rules in `codex/rules` mirror `.rulesync/rules` and stack rules.
- Commands in `codex/commands` mirror `.rulesync/commands` (Gemini uses TOML).
- Subagents in `codex/subagents` mirror `.rulesync/subagents`.

Update the shared rules and commands to change behavior across all bundles.
