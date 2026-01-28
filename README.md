# Shared Rulesync Rules

Shared rules, commands, subagents, and MCP configuration for
[rulesync](https://github.com/dyoshikawa/rulesync) across Omnitech Solutions
repositories.

## Installation

This package is published to GitHub Packages. Add to your project:

```bash
pnpm add @omnitech/shared-rulesync-rules -D
pnpm add rulesync -D
```

OR

```bash
pnpm add ../../dev/omnitech-solutions/omnitech-shared-rulesync-rules
pnpm add rulesync -D
```

Requires `.npmrc` configured for GitHub Packages:

```
@omnitech:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### 🚀 Manual MCP Setup

#### Codex

```bash
codex mcp add rulesync npx tsx node_modules/@omnitech/shared-rulesync-rules/mcp-server/omnitech-shared-mcp/src/server.ts
```

#### Gemini

```bash
gemini mcp add rulesync npx tsx node_modules/@omnitech/shared-rulesync-rules/mcp-server/omnitech-shared-mcp/src/server.ts
```

### 🚀 Automatic MCP Setup

**New:** This package now includes automatic MCP (Model Context Protocol) IDE
integration! When you install the package, it will:

- 🔍 **Detect your IDE** (Windsurf, Cursor, Continue)
- 🔑 **Use existing API keys** from environment variables
- ⚙️ **Auto-configure MCP** for seamless integration
- 📚 **Provide guidance** if manual setup is needed

**For automatic setup:**

```bash
# Set your API keys in environment
export OPENAI_API_KEY=sk-...
export ANTHROPIC_API_KEY=sk-...

# Install package (auto-configures MCP)
pnpm add @omnitech/shared-rulesync-rules -D
pnpm add rulesync -D

# Restart your IDE to load MCP configuration
```

See [docs/auto-mcp-setup.md](./docs/auto-mcp-setup.md) for complete auto-setup
documentation.

## Usage

After installing, copy the rules to your `.rulesync/` directory and run
rulesync:

```bash
pnpm sync-rules
```

Example `sync-rules` script in `package.json`:

```json
{
  "scripts": {
    "sync-rules": "rm -rf .rulesync && cp -r node_modules/@omnitech/shared-rulesync-rules/ .rulesync && rm -rf .rulesync/node_modules .rulesync/package.json && pnpm rulesync"
  }
}
```

## LLM Provider Configuration Rule Installation

To install the LLM provider configuration rule, use the standard rulesync flow:

```bash
pnpm sync-rules
```

Then verify the rule is present in your synced rules:

```bash
ls .rulesync/rules/llm-provider-configuration.md
```

### LLM Provider Setup (Local and External)

Follow these steps to configure local or hosted LLMs using environment variables
only.

#### Local LLM (LM Studio, Ollama, etc.)

1. Start your local server (example: LM Studio on `http://localhost:1234/v1`).
2. Set the local provider environment variables:

```bash
export LLM_PROVIDER=local
export LLM_MODEL=openai/qwen3-coder-30b
export OPENAI_API_BASE=http://localhost:1234/v1
export OPENAI_API_KEY=lmstudio
```

3. Run your app or tool. It should use the local OpenAI-compatible endpoint with
   no external calls.

Optional (CLI helper):

```bash
pnpm setup-mcp
```

Choose to configure LLM provider variables when prompted to generate a
`.env.mcp` with `LLM_PROVIDER`, `LLM_MODEL`, and provider-specific keys.

#### External LLM (OpenAI or Anthropic)

OpenAI:

1. Set the OpenAI environment variables:

```bash
export LLM_PROVIDER=openai
export LLM_MODEL=gpt-4o-mini
export OPENAI_API_KEY=sk-...
```

2. Run your app or tool. It should call OpenAI's hosted API with no local
   endpoints configured.

Anthropic:

1. Set the Anthropic environment variables:

```bash
export LLM_PROVIDER=anthropic
export LLM_MODEL=claude-3-5-sonnet
export ANTHROPIC_API_KEY=sk-...
```

2. Run your app or tool. It should call Anthropic's API directly.

Other providers:

1. Set the generic provider environment variables:

```bash
export LLM_PROVIDER=other
export LLM_MODEL=provider-model-id
export LLM_API_BASE=https://api.provider.example
export LLM_API_KEY=...
```

2. Run your app or tool using the provider-appropriate client.

#### Failure Behavior (Missing or Invalid Variables)

If any required variable is missing or invalid, the application must fail
immediately with a clear configuration error and must not fall back to another
provider.

## Contents

- **rules/** - Coding standards and best practices. Shared, cross-stack rules
  live at the root; stack-specific rules live under `rules/stacks/` (React, Vue,
  Rails, Laravel, PHP, etc.). See `rules/stacks/README.md` for a stack index and
  task-focused subsets. DDD-specific reference guides live at the root
  (`ddd-architecture.md`, `ddd-code-quality.md`, `ddd-testing.md`)
- **commands/** - Slash commands for AI agents (brief, spec, code, test, review,
  etc.)
- **subagents/** - Agent personas (architect, developer, product-owner, qa)
- **templates/** - Template files for specs, briefs, PRs, etc.
- **mcp.json** - MCP server configuration
- **mcp-server/** - Standalone MCP server implementation (omnitech-shared-mcp)
- **scripts/** - Automated setup scripts (setup-mcp.ts, auto-mcp-setup.ts)
- **docs/** - Comprehensive documentation (MCP setup, auto-setup, CLI usage,
  integration examples)

## Supported Technologies

- **Federated GraphQL** - Apollo Federation patterns and best practices
- **React** - Component patterns, hooks, state management
- **Vue.js** - Composition API, component patterns, state management
- **TypeScript** - Type safety, patterns, best practices
- **Tailwind CSS** - Utility-first styling patterns
- **Ruby on Rails** - MVC patterns, ActiveRecord, conventions
- **Laravel (PHP 8.x)** - Eloquent, service patterns, conventions
- **Node.js** - Express, middleware, async patterns
- **PHP (8.x)** - Language conventions, error handling, and data access patterns

## Supported AI Platforms

This repository's MCP server configuration works with:

- **Claude** (Anthropic) - via Cursor, Continue, or direct API
- **Gemini** (Google) - via Cursor or direct API
- **Codex** (OpenAI) - via Cursor or direct API
- **Grok** (xAI) - via Cursor or direct API
- **Windsurf** - Native MCP support
- **GPT** (OpenAI) - via Cursor, Continue, or direct API

See [docs/mcp-setup.md](./docs/mcp-setup.md) for detailed setup instructions for
each platform.

## MCP Server Setup

This repository includes MCP (Model Context Protocol) server configuration that
works with multiple AI platforms:

- **Claude** (Anthropic) - via Cursor, Continue, or direct API
- **Gemini** (Google) - via Cursor or direct API
- **Codex** (OpenAI) - via Cursor or direct API
- **Grok** (xAI) - via Cursor or direct API
- **Windsurf** - Native MCP support
- **GPT** (OpenAI) - via Cursor, Continue, or direct API

### Automated Setup (Recommended)

Use the interactive CLI tool to automatically configure MCP:

```bash
pnpm install
pnpm setup-mcp
```

The script will:

- Prompt for IDE/platform selection (Cursor, Windsurf, Continue, Direct)
- Prompt for AI platform selection (Claude, GPT, Gemini, Grok, Codex)
- Collect required API keys (from environment or prompts)
- Generate platform-specific MCP configuration
- Optionally create `.env.mcp` file

**With environment variables:**

```bash
export OPENAI_API_KEY=sk-...
export ANTHROPIC_API_KEY=sk-...
pnpm setup-mcp
```

**With command-line arguments:**

```bash
pnpm setup-mcp --openai_api_key=sk-... --anthropic_api_key=sk-...
```

See [docs/mcp-cli-usage.md](./docs/mcp-cli-usage.md) for complete CLI
documentation.

**Integration Examples:** See
[docs/examples/calling-app-integration.md](./docs/examples/calling-app-integration.md)
for examples of integrating the setup script into your application.

### Manual Setup

See `docs/mcp-quick-start.md` for 30-second manual setup instructions.

See `docs/mcp-setup.md` for comprehensive platform-specific setup instructions.

### Platform Configuration Examples

- Cursor: `docs/platform-configs/cursor-mcp.json`
- Windsurf: `docs/platform-configs/windsurf-mcp.json`
- Continue (VS Code): `docs/platform-configs/continue-mcp.json`
- JetBrains: `docs/platform-configs/jetbrains-mcp.json`

### Platform-Specific Setup (All)

Cursor:

1. Open Cursor Settings → Features → Model Context Protocol
2. Paste config from `docs/platform-configs/cursor-mcp.json`
3. Restart Cursor

Windsurf:

1. Open Windsurf Settings → MCP Servers
2. Add a server using `docs/platform-configs/windsurf-mcp.json`
3. Restart Windsurf

Continue (VS Code):

1. Install Continue
2. Create `.continue/config.json` in the workspace root
3. Paste config from `docs/platform-configs/continue-mcp.json`
4. Restart VS Code

JetBrains:

1. Install the MCP plugin for your IDE
2. Create `.idea/mcp.json` in the workspace root
3. Paste config from `docs/platform-configs/jetbrains-mcp.json`
4. Restart the IDE

## MCP Server

This repository includes a standalone MCP server at
`mcp-server/omnitech-shared-mcp/` that provides tools for accessing Rulesync
configuration.

### Building the MCP Server

```bash
cd mcp-server/omnitech-shared-mcp
pnpm install
pnpm build
```

### Running Standalone

```bash
# Development mode
cd mcp-server/omnitech-shared-mcp
pnpm dev

# Production mode
pnpm start

# Or directly
tsx mcp-server/omnitech-shared-mcp/src/server.ts
```

See [mcp-server/README.md](./mcp-server/README.md) for detailed server
documentation.

## Updating

To get the latest rules:

```bash
pnpm update @omnitech/shared-rulesync-rules && pnpm sync-rules
```
