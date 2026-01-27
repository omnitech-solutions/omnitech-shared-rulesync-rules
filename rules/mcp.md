---
targets:
  - '*'
root: false
description: MCP (Model Context Protocol) best practices and patterns
globs:
  - '**/mcp.json'
  - '**/.cursor/**'
cursor:
  description: MCP (Model Context Protocol) best practices and patterns
  globs:
    - '**/mcp.json'
---

# MCP Rules

## MCP Best Practices

- **Configuration Management:** Keep MCP configuration in version control
- **Environment Variables:** Use environment variables for API keys and secrets
- **Server Isolation:** Run MCP servers in isolated environments when possible
- **Error Handling:** Implement proper error handling in MCP server code
- **Logging:** Log MCP server operations for debugging
- **Security:** Never expose sensitive data through MCP tools
- **Documentation:** Document all custom MCP tools and their usage
- **Testing:** Test MCP servers independently before integration
- **Versioning:** Version MCP server implementations
- **Platform Compatibility:** Ensure MCP servers work across supported platforms

---

## MCP Configuration

### Basic Structure

```json
{
  "mcpServers": {
    "server-name": {
      "command": "node",
      "args": ["./path/to/server.js"],
      "env": {
        "NODE_ENV": "development",
        "RULESYNC_ROOT": "${workspaceFolder}"
      }
    }
  }
}
```

### Platform-Specific Configuration

#### Cursor

```json
{
  "mcpServers": {
    "omnitech-shared-mcp": {
      "command": "tsx",
      "args": ["./mcp-server/omnitech-shared-mcp/src/server.ts"],
      "env": {
        "NODE_ENV": "development",
        "RULESYNC_ROOT": "${workspaceFolder}"
      }
    }
  }
}
```

#### Windsurf

```json
{
  "mcpServers": {
    "omnitech-shared-mcp": {
      "command": "tsx",
      "args": ["./mcp-server/omnitech-shared-mcp/src/server.ts"],
      "cwd": "${workspaceFolder}",
      "env": {
        "NODE_ENV": "development",
        "RULESYNC_ROOT": "${workspaceFolder}"
      }
    }
  }
}
```

#### Continue

```json
{
  "mcpServers": {
    "omnitech-shared-mcp": {
      "command": "tsx",
      "args": ["./mcp-server/omnitech-shared-mcp/src/server.ts"],
      "env": {
        "NODE_ENV": "development",
        "RULESYNC_ROOT": "${workspaceFolder}"
      }
    }
  }
}
```

---

## Environment Variables

### Security Best Practices

```json
{
  "mcpServers": {
    "omnitech-shared-mcp": {
      "command": "tsx",
      "args": ["./mcp-server/omnitech-shared-mcp/src/server.ts"],
      "env": {
        "API_KEY": "${API_KEY}", // ✅ GOOD: Reference from environment
        "NODE_ENV": "development"
      }
    }
  }
}
```

```json
{
  "mcpServers": {
    "omnitech-shared-mcp": {
      "command": "tsx",
      "args": ["./mcp-server/omnitech-shared-mcp/src/server.ts"],
      "env": {
        "API_KEY": "sk-1234567890abcdef" // ❌ BAD: Hardcoded secret
      }
    }
  }
}
```

---

## MCP Server Development

### Error Handling

```typescript
// ✅ GOOD: Proper error handling
export async function handleToolCall(tool: string, args: unknown) {
  try {
    const result = await executeTool(tool, args);
    return { success: true, data: result };
  } catch (error) {
    logger.error('MCP tool execution failed', { tool, args, error });
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
```

### Logging

```typescript
// ✅ GOOD: Structured logging
import { logger } from './logger';

export async function handleToolCall(tool: string, args: unknown) {
  logger.info('MCP tool called', {
    tool,
    args: sanitizeArgs(args), // Remove sensitive data
    timestamp: new Date().toISOString(),
  });

  // Tool execution...
}
```

---

## Platform Compatibility

### Testing Across Platforms

1. **Test in Cursor** - Verify Claude, GPT, Gemini, Grok all work
2. **Test in Windsurf** - Verify native MCP support
3. **Test in Continue** - Verify VS Code integration
4. **Test Direct API** - Verify direct MCP protocol usage

### Platform-Specific Considerations

- **Cursor:** Supports multiple AI models with same MCP config
- **Windsurf:** Requires `cwd` to be set for workspace context
- **Continue:** Requires VS Code to be installed
- **Direct API:** May require additional authentication setup

---

## Anti-Patterns

### Don't: Hardcode Secrets

```json
{
  "mcpServers": {
    "server": {
      "env": {
        "API_KEY": "sk-1234567890" // ❌ BAD
      }
    }
  }
}
```

### Don't: Expose Sensitive Data

```typescript
// ❌ BAD: Exposing sensitive data in MCP tools
export function getUserData(userId: string) {
  return {
    userId,
    password: user.password, // Never expose passwords!
    apiKey: user.apiKey, // Never expose API keys!
  };
}
```

---

## Related Documentation

- [Model Context Protocol Specification](https://modelcontextprotocol.io/)
- `docs/mcp-setup.md` - Detailed setup guide for all platforms
- `docs/platform-configs/` - Platform-specific configuration examples
