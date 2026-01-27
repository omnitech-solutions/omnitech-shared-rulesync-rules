# MCP Setup CLI Usage Guide

Complete guide for using the automated MCP setup script.

## Quick Start

```bash
# Install dependencies (if not already installed)
pnpm install

# Run the setup wizard
pnpm setup-mcp
```

## Interactive Mode

The script runs in interactive mode by default, prompting you for:

1. **IDE/Platform Selection**
   - Choose your development environment
   - Configures the correct file location

2. **AI Platform Selection**
   - Select which AI models you want to use
   - Automatically determines required API keys

3. **Environment Variables**
   - Prompts for missing API keys
   - Uses existing environment variables if available
   - Supports command-line arguments

## Command-Line Arguments

### Passing API Keys

```bash
pnpm setup-mcp \
  --openai_api_key=sk-your-openai-key \
  --anthropic_api_key=sk-your-anthropic-key \
  --google_api_key=your-google-key \
  --xai_api_key=your-xai-key
```

### Using Environment Variables

```bash
# Set environment variables
export OPENAI_API_KEY=sk-your-key
export ANTHROPIC_API_KEY=sk-your-key

# Run setup (will use existing env vars)
pnpm setup-mcp
```

### Mixed Approach

```bash
# Some from env, some from args
export OPENAI_API_KEY=sk-your-key
pnpm setup-mcp --anthropic_api_key=sk-your-key
```

## Platform-Specific Examples

### Cursor Setup

```bash
pnpm setup-mcp
# Select: 1 (Cursor)
# Select AI platforms: 1,2 (Claude and GPT)
# Enter API keys when prompted
```

### Windsurf Setup

```bash
pnpm setup-mcp
# Select: 2 (Windsurf)
# Select AI platforms: 1,2,3 (Claude, GPT, Gemini)
# Enter API keys when prompted
```

### Continue (VS Code) Setup

```bash
pnpm setup-mcp
# Select: 3 (Continue)
# Select AI platforms: 1,2 (Claude and GPT)
# Enter API keys when prompted
```

## Integration Examples

### From Calling Application

```typescript
// In your calling app
import { execSync } from 'child_process';

// Set environment variables
process.env.OPENAI_API_KEY = getOpenAIKey();
process.env.ANTHROPIC_API_KEY = getAnthropicKey();

// Run setup
execSync('pnpm exec setup-mcp', {
  cwd: process.cwd(),
  stdio: 'inherit',
  env: process.env,
});
```

### CI/CD Pipeline

```yaml
# GitHub Actions example
- name: Setup MCP
  run: |
    pnpm install
    pnpm setup-mcp \
      --openai_api_key=${{ secrets.OPENAI_API_KEY }} \
      --anthropic_api_key=${{ secrets.ANTHROPIC_API_KEY }}
  env:
    NODE_ENV: production
```

### Docker Setup

```dockerfile
# In Dockerfile
RUN pnpm install
RUN pnpm setup-mcp \
    --openai_api_key=${OPENAI_API_KEY} \
    --anthropic_api_key=${ANTHROPIC_API_KEY}
```

## Output Files

### Configuration Files

The script generates platform-specific configuration files:

- **Cursor**: `.cursor/mcp.json`
- **Windsurf**: `.windsurf/mcp.json`
- **Continue**: `.continue/config.json`
- **Direct**: `mcp.json`

### Environment File

Optionally generates `.env.mcp` with all environment variables:

```bash
# Generated .env.mcp
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-...
GOOGLE_API_KEY=...
XAI_API_KEY=...
NODE_ENV=development
```

**⚠️ Security:** Always add `.env.mcp` to `.gitignore`!

## Advanced Usage

### Custom MCP Servers

To add custom MCP servers, modify the script or extend it:

```typescript
// In your project
import { MCPSetup } from '@omnitech/shared-rulesync-rules/scripts/setup-mcp';

class CustomMCPSetup extends MCPSetup {
  // Override methods to add custom servers
}
```

### Non-Interactive Mode

For fully automated setups, you can modify the script to accept all parameters:

```bash
# Future: Non-interactive mode
pnpm setup-mcp \
  --platform=cursor \
  --ai-platforms=claude,gpt \
  --openai_api_key=sk-... \
  --anthropic_api_key=sk-... \
  --non-interactive
```

## Troubleshooting

### Script Not Executable

```bash
chmod +x scripts/setup-mcp.ts
```

### TypeScript Not Found

```bash
pnpm add -D typescript @types/node tsx
```

### Module Resolution Errors

Ensure `package.json` has `"type": "module"` for ESM support.

### Permission Denied

```bash
# Use pnpm/npm to run instead
pnpm setup-mcp
# Instead of
./scripts/setup-mcp.ts
```

## Best Practices

1. **Use Environment Variables in Production**
   - Never hardcode API keys
   - Use secret management tools
   - Pass via environment variables

2. **Version Control**
   - Commit generated `mcp.json` files (without secrets)
   - Never commit `.env.mcp` files
   - Use `.gitignore` appropriately

3. **Security**
   - Rotate API keys regularly
   - Use least-privilege API keys
   - Monitor API key usage

4. **Documentation**
   - Document which AI platforms are configured
   - Note any custom configurations
   - Keep setup instructions updated

## Related Documentation

- [MCP Setup Guide](./mcp-setup.md)
- [MCP Quick Start](./mcp-quick-start.md)
- [MCP Rules](../rules/mcp.md)
- [Scripts README](../scripts/README.md)
