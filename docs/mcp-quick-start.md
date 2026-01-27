# MCP Quick Start Guide

Quick setup instructions for getting the MCP server working with your AI platform.

## Supported Platforms

✅ **Claude** (Anthropic) - Cursor, Continue  
✅ **Gemini** (Google) - Cursor  
✅ **Codex** (OpenAI) - Cursor, Continue  
✅ **Grok** (xAI) - Cursor  
✅ **Windsurf** - Native support  
✅ **GPT** (OpenAI) - Cursor, Continue  

## 30-Second Setup

### Cursor

1. Open Cursor Settings → Features → Model Context Protocol
2. Copy configuration from `docs/platform-configs/cursor-mcp.json`
3. Paste into Cursor's MCP settings
4. Restart Cursor

### Windsurf

1. Open Windsurf Settings → MCP Servers
2. Click "Add Server"
3. Use configuration from `docs/platform-configs/windsurf-mcp.json`
4. Save and restart Windsurf

### Continue (VS Code)

1. Install Continue extension
2. Create `.continue/config.json` in your workspace
3. Copy configuration from `docs/platform-configs/continue-mcp.json`
4. Restart VS Code

## Verify Setup

After configuration, test the MCP connection:

1. Open your AI chat/assistant
2. Try a command that uses MCP (e.g., `/forge` if available)
3. Check for error messages

## Troubleshooting

**Server not starting?**
- Ensure Node.js 18+ is installed
- Run `pnpm install` to install dependencies
- Check that `npx` is available in PATH

**API key errors?**
- Verify API keys are set in environment variables
- Check platform-specific documentation for key requirements

**Still having issues?**
- See [Full MCP Setup Guide](./mcp-setup.md) for detailed instructions
- Check platform logs/console for error messages

## Next Steps

- Read [Full MCP Setup Guide](./mcp-setup.md) for detailed platform instructions
- Review [MCP Rules](../rules/mcp.md) for best practices
- Check [Platform Configs](./platform-configs/) for example configurations
