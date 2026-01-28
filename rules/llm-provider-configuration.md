---
targets:
  - '*'
root: false
description: Standardized LLM provider configuration via environment variables
summary: Local and external LLM provider selection and validation rules
globs:
  - '**/*'
cursor:
  description: LLM provider configuration rules
  globs:
    - '**/*'
---

# Rule: LLM Provider Configuration (Local + External)

## Purpose

Standardize how applications connect to any LLM provider (local or hosted) using
environment variables only, without coupling to a specific stack, SDK, or
architecture.

This rule ensures:

- Local-first development
- Explicit provider selection
- Zero hardcoding
- Safe fallback behavior

---

## Non-Negotiable Constraints

- DO NOT hardcode model names, URLs, or API keys
- DO NOT mix local and external providers implicitly
- DO NOT auto-fallback between providers
- DO NOT introduce orchestration layers or agents
- DO NOT assume production deployment
- DO NOT change app architecture

If the provider configuration is ambiguous, stop and ask.

---

## Provider Selection (Required)

The application MUST determine the LLM provider using:

```env
LLM_PROVIDER=local | openai | anthropic | google | other
```

Behavior:

- The value must be explicit
- No default provider is allowed
- Unknown values must fail fast

---

## Common Required Variables (All Providers)

All LLM integrations must read:

```env
LLM_PROVIDER=
LLM_MODEL=
```

- `LLM_MODEL` must exactly match the provider's model identifier
- The application must not infer or auto-select models

---

## Local LLM (LM Studio, Ollama, etc.)

### Required Environment Variables

```env
LLM_PROVIDER=local
OPENAI_API_BASE=http://localhost:1234/v1
OPENAI_API_KEY=local
LLM_MODEL=qwen3-coder-30b
```

Notes:

- Uses OpenAI-compatible protocol
- API key can be any non-empty value
- Must work fully offline (except local server)

### Required Behavior

When `LLM_PROVIDER=local`:

1. Use an OpenAI-compatible client
2. Set:
   - `baseURL` <- `OPENAI_API_BASE`
   - `apiKey` <- `OPENAI_API_KEY`
3. Send requests using standard chat/completions APIs
4. Do not call external services
5. Do not log prompts unless already required

---

## External LLM -- OpenAI

### Required Environment Variables

```env
LLM_PROVIDER=openai
OPENAI_API_KEY=sk-...
LLM_MODEL=gpt-4o-mini
```

Behavior:

- Use OpenAI's hosted API
- Do not override base URLs
- Do not mix with local endpoints

---

## External LLM -- Anthropic

### Required Environment Variables

```env
LLM_PROVIDER=anthropic
ANTHROPIC_API_KEY=sk-...
LLM_MODEL=claude-3-5-sonnet
```

Behavior:

- Use Anthropic SDK or HTTP API
- Do not proxy through OpenAI-style clients

---

## External LLM -- Other Providers

### Required Environment Variables

```env
LLM_PROVIDER=other
LLM_API_BASE=https://...
LLM_API_KEY=...
LLM_MODEL=...
```

Behavior:

- Use provider-appropriate client
- Follow the same hard rules:
  - No hardcoding
  - No auto-fallback
  - No architecture changes

---

## Forbidden Behavior (All Providers)

- Silent provider switching
- Hardcoded defaults
- Mixed credentials
- Cloud fallbacks when local is configured
- SDK-specific abstractions leaking into business logic

---

## Failure Rules

If any required variable is missing or invalid:

- Fail immediately
- Emit a clear configuration error
- Do not retry with another provider

---

## Verification Checklist

- Provider is selected via `LLM_PROVIDER`
- Model is selected via `LLM_MODEL`
- Local provider works with no internet
- External provider works with no local server
- Changing `.env` switches providers cleanly

---

## Scope

This rule applies to:

- API routes
- Background jobs
- CLI tools
- MCP servers
- Internal automation
- Agent runtimes

This rule does not prescribe UI behavior.
