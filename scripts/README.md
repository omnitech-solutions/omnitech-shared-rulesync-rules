# MCP Setup Script

Automated CLI tool for configuring MCP servers across different AI platforms.

## Usage

### Interactive Mode

Run the setup wizard interactively:

```bash
pnpm setup-mcp
```

or

```bash
npm run setup-mcp
```

### With Environment Variables

Pass environment variables via command line arguments:

```bash
# Pass API keys directly
pnpm setup-mcp --openai_api_key=sk-... --anthropic_api_key=sk-...

# Or use environment variables
OPENAI_API_KEY=sk-... ANTHROPIC_API_KEY=sk-... pnpm setup-mcp
```

### Non-Interactive Mode (Future)

For CI/CD or automated setups, you can pass all values:

```bash
pnpm setup-mcp \
  --platform=cursor \
  --ai-platforms=claude,gpt \
  --openai_api_key=sk-... \
  --anthropic_api_key=sk-...
```

## What It Does

1. **Prompts for IDE/Platform Selection**
   - Cursor
   - Windsurf
   - Continue (VS Code)
   - Direct MCP

2. **Prompts for AI Platform Selection**
   - Claude (Anthropic)
   - GPT (OpenAI)
   - Codex (OpenAI)
   - Gemini (Google)
   - Grok (xAI)

3. **Collects Environment Variables**
   - Automatically detects required API keys based on selected AI platforms
   - Checks existing environment variables
   - Prompts for missing values
   - Supports command-line arguments

4. **Generates Configuration**
   - Creates platform-specific MCP configuration file
   - Optionally generates `.env.mcp` file
   - Creates necessary directories

## Output Files

### Platform-Specific Configurations

- **Cursor**: `.cursor/mcp.json`
- **Windsurf**: `.windsurf/mcp.json`
- **Continue**: `.continue/config.json`
- **Direct MCP**: `mcp.json` (project root)

### Environment File

- `.env.mcp` - Contains all environment variables (optional)

**⚠️ Important:** Add `.env.mcp` to your `.gitignore` file!

## Examples

### Basic Setup

```bash
pnpm setup-mcp
```

Follow the interactive prompts to configure your MCP server.

### With Pre-set Environment Variables

```bash
export OPENAI_API_KEY=sk-your-key-here
export ANTHROPIC_API_KEY=sk-your-key-here
pnpm setup-mcp
```

The script will detect and use existing environment variables.

### Command-Line Arguments

```bash
pnpm setup-mcp \
  --openai_api_key=sk-... \
  --anthropic_api_key=sk-... \
  --google_api_key=... \
  --xai_api_key=...
```

## Troubleshooting

### Script Not Found

Ensure dependencies are installed:

```bash
pnpm install
```

### TypeScript Errors

Ensure TypeScript is properly configured:

```bash
pnpm add -D typescript @types/node tsx
```

### Permission Errors

Make the script executable:

```bash
chmod +x scripts/setup-mcp.ts
```

## Integration with Calling App

When used as a dependency, the calling app can:

1. **Install the package:**

   ```bash
   pnpm add @omnitech/shared-rulesync-rules
   ```

2. **Run the setup script:**

   ```bash
   # Using pnpm
   pnpm exec setup-mcp

   # Or using npx
   npx -p @omnitech/shared-rulesync-rules pnpm setup-mcp

   # Or directly via tsx
   npx tsx node_modules/@omnitech/shared-rulesync-rules/scripts/setup-mcp.ts
   ```

3. **Pass environment variables from calling app:**

   ```bash
   # From calling app's environment
   export OPENAI_API_KEY=$(get-api-key)
   export ANTHROPIC_API_KEY=$(get-anthropic-key)
   pnpm exec setup-mcp
   ```

4. **Programmatic usage:**

   ```typescript
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

## Advanced Usage

### Programmatic Usage

```typescript
import { MCPSetup } from '@omnitech/shared-rulesync-rules/scripts/setup-mcp';

const setup = new MCPSetup();
await setup.run();
```

### Custom Configuration

Modify `scripts/setup-mcp.ts` to add custom MCP servers or platforms.

## Related Documentation

- [MCP Setup Guide](../docs/mcp-setup.md)
- [MCP Quick Start](../docs/mcp-quick-start.md)
- [MCP Rules](../rules/mcp.md)
