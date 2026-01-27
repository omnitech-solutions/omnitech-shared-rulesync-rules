# Omnitech Shared MCP Server

Standalone MCP (Model Context Protocol) server for Rulesync configuration and
tooling.

## Overview

This MCP server provides tools for managing and accessing Rulesync configuration
files, including rules, commands, subagents, and MCP configuration validation.

## Installation

```bash
cd mcp-server/omnitech-shared-mcp
pnpm install
pnpm build
```

## Usage

### Standalone Mode

Run the server directly:

```bash
# Development mode (with watch)
pnpm dev

# Production mode
pnpm start

# Or directly with tsx
tsx src/server.ts
```

### As MCP Server

Configure in your MCP client (Cursor, Windsurf, Continue):

```json
{
  "mcpServers": {
    "omnitech-shared-mcp": {
      "command": "node",
      "args": ["./mcp-server/omnitech-shared-mcp/dist/server.js"],
      "env": {
        "RULESYNC_ROOT": "${workspaceFolder}"
      }
    }
  }
}
```

Or using tsx for development:

```json
{
  "mcpServers": {
    "omnitech-shared-mcp": {
      "command": "tsx",
      "args": ["./mcp-server/omnitech-shared-mcp/src/server.ts"],
      "env": {
        "RULESYNC_ROOT": "${workspaceFolder}"
      }
    }
  }
}
```

## Available Tools

### `list_rules`

List all available rule files.

**Parameters:**

- `category` (optional): Filter by category
- `bundle` (optional): Use agent bundle (`claude`, `codex`, `cursor`, `gemini`)

**Example:**

```json
{
  "name": "list_rules",
  "arguments": {
    "category": "architecture",
    "bundle": "cursor"
  }
}
```

### `read_rule`

Read a specific rule file.

**Parameters:**

- `ruleName` (required): Name of the rule file (without .md extension)
- `bundle` (optional): Use agent bundle (`claude`, `codex`, `cursor`, `gemini`)

**Example:**

```json
{
  "name": "read_rule",
  "arguments": {
    "ruleName": "architecture",
    "bundle": "claude"
  }
}
```

### `list_commands`

List all available command files.

**Parameters:**

- `bundle` (optional): Use agent bundle (`claude`, `codex`, `cursor`, `gemini`)

### `read_command`

Read a specific command file.

**Parameters:**

- `commandName` (required): Name of the command file (without .md extension)
- `bundle` (optional): Use agent bundle (`claude`, `codex`, `cursor`, `gemini`)

### `list_subagents`

List all available subagent definitions.

**Parameters:**

- `bundle` (optional): Use agent bundle (`claude`, `codex`, `cursor`, `gemini`)

### `read_subagent`

Read a specific subagent definition.

**Parameters:**

- `subagentName` (required): Name of the subagent (without .md extension)
- `bundle` (optional): Use agent bundle (`claude`, `codex`, `cursor`, `gemini`)

### `validate_config`

Validate the MCP configuration file.

**Parameters:**

- `configPath` (optional): Path to mcp.json file (defaults to mcp.json)

### `list_bundles`

List available agent bundles.

### `validate_bundle`

Validate that a bundle has expected folders and files.

**Parameters:**

- `bundle` (required): `claude`, `codex`, `cursor`, `gemini`

## Environment Variables

- `RULESYNC_ROOT`: Root directory where `.rulesync` folder is located (defaults
  to `process.cwd()`)

## Development

```bash
# Install dependencies
pnpm install

# Build TypeScript
pnpm build

# Run in development mode (with watch)
pnpm dev

# Type check
pnpm typecheck
```

## Building

```bash
pnpm build
```

This compiles TypeScript to JavaScript in the `dist/` directory.

## Testing

Test the server by running it and sending MCP protocol messages via stdio:

```bash
# Start server
pnpm start

# In another terminal, send test messages
echo '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | pnpm start
```

## Related Documentation

- [MCP Setup Guide](../../docs/mcp-setup.md)
- [MCP Rules](../../rules/mcp.md)
- [Model Context Protocol Specification](https://modelcontextprotocol.io/)
