# MCP Server Setup Guide

This guide explains how to configure the MCP (Model Context Protocol) server for
different AI platforms.

## Supported Platforms

- **Claude** (Anthropic) - via Cursor, Continue, or direct API
- **Gemini** (Google) - via Cursor or direct API
- **Codex** (OpenAI) - via Cursor or direct API
- **Grok** (xAI) - via Cursor or direct API
- **Windsurf** - Native MCP support
- **GPT** (OpenAI) - via Cursor, Continue, or direct API

## MCP Configuration

The `mcp.json` file in this repository configures the MCP servers available to
AI agents.

### Current Configuration

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

## Platform-Specific Setup

### Claude (Anthropic) via Cursor

1. **Install Cursor** (if not already installed)
   - Download from [cursor.sh](https://cursor.sh)

2. **Configure MCP in Cursor**
   - Open Cursor Settings
   - Navigate to "Features" → "Model Context Protocol"
   - Add the MCP server configuration:

   ```json
   {
     "mcpServers": {
       "omnitech-shared-mcp": {
         "command": "tsx",
         "args": ["./mcp-server/omnitech-shared-mcp/src/server.ts"],
         "env": {}
       }
     }
   }
   ```

3. **Set Environment Variables** (if needed)
   - Add any required API keys or configuration to the `env` object

4. **Restart Cursor** to load the MCP configuration

### Gemini (Google) via Cursor

1. Follow the same steps as Claude setup above
2. Ensure you have Google API credentials configured
3. Add API key to environment variables if required:

   ```json
   {
     "mcpServers": {
       "omnitech-shared-mcp": {
         "command": "tsx",
         "args": ["./mcp-server/omnitech-shared-mcp/src/server.ts"],
         "env": {
           "GOOGLE_API_KEY": "your-api-key-here"
         }
       }
     }
   }
   ```

### GPT/Codex (OpenAI) via Cursor

1. Follow the same steps as Claude setup above
2. Ensure you have OpenAI API credentials configured
3. Add API key to environment variables if required:

   ```json
   {
     "mcpServers": {
       "omnitech-shared-mcp": {
         "command": "tsx",
         "args": ["./mcp-server/omnitech-shared-mcp/src/server.ts"],
         "env": {
           "OPENAI_API_KEY": "your-api-key-here"
         }
       }
     }
   }
   ```

### Grok (xAI) via Cursor

1. Follow the same steps as Claude setup above
2. Ensure you have xAI API credentials configured
3. Add API key to environment variables if required:

   ```json
   {
     "mcpServers": {
       "omnitech-shared-mcp": {
         "command": "tsx",
         "args": ["./mcp-server/omnitech-shared-mcp/src/server.ts"],
         "env": {
           "XAI_API_KEY": "your-api-key-here"
         }
       }
     }
   }
   ```

### Windsurf

Windsurf has native MCP support. Configuration is done through the Windsurf
settings:

1. **Open Windsurf Settings**
   - Click on Settings/Preferences
   - Navigate to "MCP Servers"

2. **Add MCP Server**
   - Click "Add Server"
   - Name: `omnitech-shared-mcp`
   - Command: `tsx`
   - Arguments: `./mcp-server/omnitech-shared-mcp/src/server.ts`
   - Working Directory: Your project root

3. **Configure Environment Variables**
   - Add any required environment variables in the server configuration

4. **Restart Windsurf** to load the configuration

### Continue (VS Code Extension)

1. **Install Continue Extension**
   - Install from VS Code marketplace:
     [Continue](https://marketplace.visualstudio.com/items?itemName=Continue.continue)

2. **Configure MCP in Continue**
   - Open Continue settings (`.continue/config.json`)
   - Add MCP server configuration:

   ```json
   {
     "mcpServers": {
       "omnitech-shared-mcp": {
         "command": "tsx",
         "args": ["./mcp-server/omnitech-shared-mcp/src/server.ts"],
         "env": {}
       }
     }
   }
   ```

3. **Restart VS Code** to load the configuration

## Environment Variables

Some MCP servers may require environment variables. Common ones include:

- `OPENAI_API_KEY` - For OpenAI GPT/Codex
- `ANTHROPIC_API_KEY` - For Claude
- `GOOGLE_API_KEY` - For Gemini
- `XAI_API_KEY` - For Grok
- `NODE_ENV` - Environment (development/production)

Add these to the `env` object in your MCP configuration:

```json
{
  "mcpServers": {
    "omnitech-shared-mcp": {
      "command": "tsx",
      "args": ["./mcp-server/omnitech-shared-mcp/src/server.ts"],
      "env": {
        "OPENAI_API_KEY": "${OPENAI_API_KEY}",
        "NODE_ENV": "development",
        "RULESYNC_ROOT": "${workspaceFolder}"
      }
    }
  }
}
```

## Verifying MCP Connection

After configuration, verify the MCP server is working:

1. **Check Server Status**
   - Most platforms show MCP server status in their settings
   - Look for "Connected" or "Active" status

2. **Test MCP Tools**
   - Try using a command that requires MCP (e.g., `/forge`)
   - Check for error messages in the platform's console/logs

3. **Common Issues**
   - **Server not starting**: Check that `npx` and `tsx` are available in PATH
   - **Module not found**: Run `pnpm install` to ensure dependencies are
     installed
   - **Permission errors**: Ensure the command has execute permissions
   - **Port conflicts**: Check if the port is already in use

## Troubleshooting

### MCP Server Not Loading

1. **Check Node.js Version**

   ```bash
   node --version  # Should be 18+ for MCP support
   ```

2. **Verify Dependencies**

   ```bash
   pnpm install
   ```

3. **Check Logs**
   - Most platforms provide logs in their developer console
   - Look for MCP-related error messages

### API Key Issues

1. **Verify API Key Format**
   - Ensure keys don't have extra spaces or newlines
   - Check that keys are properly set in environment variables

2. **Test API Key**
   - Try using the API key directly with the provider's API
   - Verify the key has necessary permissions

### Platform-Specific Issues

#### Cursor

- Check Cursor's MCP settings page for connection status
- Review Cursor's logs: Help → Toggle Developer Tools → Console

#### Windsurf

- Check Windsurf's MCP server status in settings
- Review server logs in the MCP configuration panel

#### Continue

- Check Continue's output panel for MCP errors
- Review VS Code's developer console

## Adding Additional MCP Servers

To add more MCP servers, extend the `mcp.json` configuration:

```json
{
  "mcpServers": {
    "omnitech-shared-mcp": {
      "command": "tsx",
      "args": ["./mcp-server/omnitech-shared-mcp/src/server.ts"],
      "env": {}
    },
    "your-custom-server": {
      "command": "node",
      "args": ["./path/to/server.js"],
      "env": {
        "CUSTOM_VAR": "value"
      }
    }
  }
}
```

## Security Best Practices

1. **Never Commit API Keys**
   - Use environment variables or secret management
   - Add `.env` files to `.gitignore`

2. **Use Secret Management**
   - Consider using tools like:
     - AWS Secrets Manager
     - HashiCorp Vault
     - GitHub Secrets (for CI/CD)

3. **Limit Permissions**
   - Only grant necessary permissions to MCP servers
   - Review what tools each server can access

4. **Regular Updates**
   - Keep MCP server dependencies updated
   - Review security advisories for dependencies

## Related Documentation

- [Model Context Protocol Specification](https://modelcontextprotocol.io/)
- [Cursor MCP Documentation](https://docs.cursor.com/mcp)
- [Windsurf MCP Documentation](https://docs.windsurf.ai/mcp)
- [Continue MCP Documentation](https://continue.dev/docs/mcp)
