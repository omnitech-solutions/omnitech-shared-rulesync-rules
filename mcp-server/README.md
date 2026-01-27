# MCP Server

Standalone MCP (Model Context Protocol) server for Rulesync.

## Directory Structure

```
mcp-server/
└── omnitech-shared-mcp/
    ├── src/
    │   └── server.ts          # MCP server implementation
    ├── dist/                   # Compiled JavaScript (after build)
    ├── package.json            # Server dependencies
    ├── tsconfig.json           # TypeScript configuration
    └── README.md               # Server documentation
```

## Quick Start

### Development

```bash
cd mcp-server/omnitech-shared-mcp
pnpm install
pnpm dev  # Runs with watch mode
```

### Production

```bash
cd mcp-server/omnitech-shared-mcp
pnpm install
pnpm build
pnpm start  # Runs compiled server
```

### Standalone Usage

The server can be run standalone:

```bash
# Development
tsx mcp-server/omnitech-shared-mcp/src/server.ts

# Production (after build)
node mcp-server/omnitech-shared-mcp/dist/server.js
```

## Integration

The server is automatically configured when you run `pnpm setup-mcp` or can be
manually added to your MCP configuration.

See [../docs/mcp-setup.md](../docs/mcp-setup.md) for integration instructions.

## Available Tools

- `list_rules` - List all available rule files
- `read_rule` - Read a specific rule file
- `list_commands` - List all available command files
- `read_command` - Read a specific command file
- `list_subagents` - List all available subagent definitions
- `read_subagent` - Read a specific subagent definition
- `validate_config` - Validate the MCP configuration file

## Related Documentation

- [Server README](./omnitech-shared-mcp/README.md) - Detailed server
  documentation
- [MCP Setup Guide](../docs/mcp-setup.md) - Integration instructions
- [MCP Rules](../rules/mcp.md) - MCP best practices
