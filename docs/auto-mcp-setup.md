# Auto MCP Setup

This document describes the automatic MCP (Model Context Protocol) setup feature
that configures IDE integration during package installation.

## Overview

The `auto-mcp-setup.ts` script automatically detects your development
environment and configures MCP integration when the package is installed. This
provides a seamless setup experience without requiring manual configuration.

## How It Works

### During Installation

When you install `@omnitech/shared-rulesync-rules`, the `postinstall` script
automatically runs:

```bash
pnpm install @omnitech/shared-rulesync-rules
```

The auto-setup script:

1. **Detects CI Environment** - Skips setup in CI/CD environments
2. **Analyzes Development Environment** - Detects IDEs, API keys, and project
   type
3. **Auto-Configures MCP** - Sets up MCP configuration if conditions are met
4. **Provides Guidance** - Shows helpful instructions if auto-setup isn't
   possible

### Environment Detection

The script detects:

#### IDEs and Editors

- **Windsurf** - `.windsurf/` directory or `WINDSURF_FOLDER` env var
- **Cursor** - `.cursor/` directory or `CURSOR_FOLDER` env var
- **Continue (VS Code)** - `.vscode/` directory or `VSCODE_PID` env var
- **JetBrains IDEs** - `.idea/` directory (IntelliJ, PyCharm, WebStorm, etc.)

#### API Keys

- `OPENAI_API_KEY` - For GPT/Codex models
- `ANTHROPIC_API_KEY` - For Claude models
- `GOOGLE_API_KEY` - For Gemini models
- `XAI_API_KEY` - For Grok models

#### Project Context

- Node.js projects (presence of `package.json`)
- Git repositories (presence of `.git/`)

### Auto-Configuration Conditions

Automatic setup occurs when:

1. ✅ **IDE Detected** - At least one supported IDE is detected
2. ✅ **API Keys Available** - At least one API key is found in environment
3. ✅ **Node.js Project** - Project has `package.json`
4. ✅ **Not CI Environment** - Not running in CI/CD

If these conditions are met, the script automatically:

1. **Selects Best IDE** - Prioritizes Windsurf > Cursor > JetBrains
2. **Maps API Keys** - Maps available keys to corresponding AI platforms
3. **Generates Configuration** - Creates platform-specific MCP config
4. **Writes Config Files** - Writes to appropriate IDE configuration directory

## Generated Configurations

### Cursor Configuration

**File:** `.cursor/mcp.json`

```json
{
  "mcpServers": {
    "omnitech-shared-mcp": {
      "command": "tsx",
      "args": ["./mcp-server/omnitech-shared-mcp/src/server.ts"],
      "env": {
        "NODE_ENV": "development",
        "OPENAI_API_KEY": "...",
        "RULESYNC_ROOT": "${workspaceFolder}"
      }
    }
  }
}
```

### Windsurf Configuration

**File:** `.windsurf/mcp.json`

```json
{
  "mcpServers": {
    "omnitech-shared-mcp": {
      "command": "tsx",
      "args": ["./mcp-server/omnitech-shared-mcp/src/server.ts"],
      "env": {
        "NODE_ENV": "development",
        "GOOGLE_API_KEY": "...",
        "RULESYNC_ROOT": "${workspaceFolder}"
      },
      "cwd": "${workspaceFolder}"
    }
  }
}
```

### Continue Configuration

**File:** `.continue/config.json`

```json
{
  "mcpServers": {
    "omnitech-shared-mcp": {
      "command": "tsx",
      "args": ["./mcp-server/omnitech-shared-mcp/src/server.ts"],
      "env": {
        "NODE_ENV": "development",
        "ANTHROPIC_API_KEY": "...",
        "RULESYNC_ROOT": "${workspaceFolder}"
      }
    }
  }
}
```

### JetBrains Configuration

**File:** `.idea/mcp.json`

```json
{
  "mcpServers": {
    "omnitech-shared-mcp": {
      "command": "tsx",
      "args": ["./mcp-server/omnitech-shared-mcp/src/server.ts"],
      "env": {
        "NODE_ENV": "development",
        "OPENAI_API_KEY": "...",
        "RULESYNC_ROOT": "$PROJECT_DIR$"
      }
    }
  }
}
```

### Direct Configuration

**File:** `mcp.json`

```json
{
  "mcpServers": {
    "omnitech-shared-mcp": {
      "command": "tsx",
      "args": ["./mcp-server/omnitech-shared-mcp/src/server.ts"],
      "env": {
        "NODE_ENV": "development",
        "OPENAI_API_KEY": "...",
        "RULESYNC_ROOT": "${workspaceFolder}"
      }
    }
  }
}
```

## Usage Examples

### Automatic Setup (Recommended)

1. **Set API Keys in Environment**

   ```bash
   export OPENAI_API_KEY=sk-...
   export ANTHROPIC_API_KEY=sk-...
   ```

2. **Install Package**

   ```bash
   pnpm install @omnitech/shared-rulesync-rules
   ```

3. **Restart IDE** - MCP configuration will be loaded automatically

### Manual Setup

If auto-setup doesn't work or you need custom configuration:

```bash
pnpm setup-mcp
```

This runs the interactive setup wizard with full customization options.

### Force Auto-Setup

You can also run the auto-setup manually:

```bash
pnpm setup-mcp:auto
```

## Troubleshooting

### Auto-Setup Didn't Run

**Check Environment Variables:**

```bash
echo $OPENAI_API_KEY
echo $ANTHROPIC_API_KEY
```

**Check IDE Detection:**

```bash
ls -la .windsurf .cursor .vscode .idea
```

**Run Manually:**

```bash
pnpm setup-mcp:auto
```

### Configuration Not Working

**Verify Configuration File:**

```bash
cat .cursor/mcp.json  # or .windsurf/mcp.json, .idea/mcp.json, etc.
```

**Check MCP Server Path:**

```bash
ls -la ./mcp-server/omnitech-shared-mcp/src/server.ts
```

**Restart IDE** - MCP configurations require IDE restart

### API Key Issues

**Set Keys Before Installation:**

```bash
export OPENAI_API_KEY=sk-your-key-here
pnpm install @omnitech/shared-rulesync-rules
```

**Or Update Configuration Manually:**

```bash
# Edit the generated config file
vim .cursor/mcp.json
```

## Security Considerations

### API Keys

- ✅ **Auto-setup only uses existing environment variables**
- ✅ **Never asks for or stores API keys in code**
- ✅ **Configuration files contain keys but should be in .gitignore**
- ⚠️ **Add generated config files to .gitignore**

### Recommended .gitignore

```gitignore
# MCP configurations (contain API keys)
.cursor/mcp.json
.windsurf/mcp.json
.continue/config.json
.idea/mcp.json
mcp.json

# Environment files
.env.mcp
.env.local
```

## Environment Variables

### Detection Variables

- `CI` - Any CI environment indicator
- `CURSOR_FOLDER` - Cursor installation directory
- `WINDSURF_FOLDER` - Windsurf installation directory
- `VSCODE_PID` - VS Code process indicator

### API Key Variables

- `OPENAI_API_KEY` - OpenAI API key for GPT/Codex
- `ANTHROPIC_API_KEY` - Anthropic API key for Claude
- `GOOGLE_API_KEY` - Google API key for Gemini
- `XAI_API_KEY` - xAI API key for Grok

## Integration Examples

### Calling App Integration

```typescript
import { AutoMCPSetup } from '@omnitech/shared-rulesync-rules/scripts/auto-mcp-setup.js';

// Run auto-setup programmatically
const setup = new AutoMCPSetup();
await setup.run();
```

### Custom Installation Script

```bash
#!/bin/bash
# custom-install.sh

echo "🚀 Setting up project with MCP integration..."

# Set your API keys
export OPENAI_API_KEY=sk-your-key-here
export ANTHROPIC_API_KEY=sk-your-key-here

# Install package (triggers auto-setup)
pnpm install @omnitech/shared-rulesync-rules

echo "✅ Installation complete! Restart your IDE to use MCP."
```

## Next Steps

After auto-setup:

1. **Restart Your IDE** - Required to load MCP configuration
2. **Verify MCP Connection** - Check IDE's MCP server status
3. **Test MCP Tools** - Try using MCP-powered commands
4. **Review Configuration** - Ensure all settings are correct

## Related Documentation

- [MCP Setup Guide](./mcp-setup.md) - Comprehensive setup instructions
- [Interactive Setup](./mcp-cli-usage.md) - Manual setup CLI documentation
- [Platform Configurations](../platform-configs/) - Example configurations
- [Integration Examples](../examples/) - Code examples and integrations
