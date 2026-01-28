# Platform-Specific MCP Configurations

This directory contains example MCP configurations for different AI platforms.

## Files

- **cursor-mcp.json** - Configuration for Cursor IDE (works with Claude, GPT,
  Gemini, Grok)
- **windsurf-mcp.json** - Configuration for Windsurf IDE
- **continue-mcp.json** - Configuration for Continue VS Code extension
- **jetbrains-mcp.json** - Configuration for JetBrains IDEs (IntelliJ, PyCharm,
  WebStorm, etc.)

## Usage

1. Copy the appropriate configuration file for your platform
2. Merge it into your platform's MCP configuration
3. Adjust environment variables as needed
4. Restart your IDE/editor

These configs assume the package is installed in `node_modules`. If you're
developing inside the shared rules repo, replace the MCP server path with
`./mcp-server/omnitech-shared-mcp/src/server.ts` and set `RULESYNC_ROOT` to
`${workspaceFolder}` (or `$PROJECT_DIR$` for JetBrains).

### JetBrains

- Configuration location: `.idea/mcp.json` in your workspace
- Works with all JetBrains IDEs that support MCP (IntelliJ IDEA, PyCharm,
  WebStorm, etc.)
- Uses `$PROJECT_DIR$` as the workspace root variable
- Requires MCP plugin to be installed in the JetBrains IDE

## Platform-Specific Notes

### Cursor

- Configuration location: Cursor Settings → Features → Model Context Protocol
- Supports multiple AI models (Claude, GPT, Gemini, Grok)
- Can use the same MCP configuration for all models

### Windsurf

- Configuration location: Windsurf Settings → MCP Servers
- Native MCP support with UI for configuration
- Requires `cwd` to be set to workspace folder

### Continue

- Configuration location: `.continue/config.json` in your workspace
- Works with any AI model that Continue supports
- Requires VS Code to be installed

## Environment Variables

Add API keys and other environment variables to the `env` object:

```json
{
  "env": {
    "OPENAI_API_KEY": "your-key-here",
    "ANTHROPIC_API_KEY": "your-key-here",
    "GOOGLE_API_KEY": "your-key-here",
    "XAI_API_KEY": "your-key-here"
  }
}
```

**Important:** Never commit API keys to version control. Use environment
variables or secret management tools.
