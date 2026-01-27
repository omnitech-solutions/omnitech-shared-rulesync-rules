# Shared Rulesync Rules

Shared rules, commands, subagents, and MCP configuration for
[rulesync](https://github.com/dyoshikawa/rulesync) across Omnitech Solutions
repositories.

## Installation

This package is published to GitHub Packages. Add to your project:

```bash
pnpm add @omnitech/shared-rulesync-rules
```

Requires `.npmrc` configured for GitHub Packages:

```
@omnitech:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
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
pnpm add @omnitech/shared-rulesync-rules

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

See [docs/mcp-quick-start.md](./docs/mcp-quick-start.md) for 30-second manual
setup instructions.

See [docs/mcp-setup.md](./docs/mcp-setup.md) for comprehensive platform-specific
setup instructions.

### Platform Configuration Examples

- [Cursor Configuration](./docs/platform-configs/cursor-mcp.json) - Works with
  Claude, GPT, Gemini, Grok
- [Windsurf Configuration](./docs/platform-configs/windsurf-mcp.json) - Native
  MCP support
- [Continue Configuration](./docs/platform-configs/continue-mcp.json) - VS Code
  extension

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
