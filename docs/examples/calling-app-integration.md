# Calling App Integration Examples

Examples of how to integrate the MCP setup script into your application.

## Basic Integration

### Node.js/TypeScript Application

```typescript
// setup-mcp.ts
import { execSync } from 'child_process';
import * as path from 'path';

export async function setupMCP(options: {
  openaiApiKey?: string;
  anthropicApiKey?: string;
  googleApiKey?: string;
  xaiApiKey?: string;
  platform?: 'cursor' | 'windsurf' | 'continue' | 'direct';
  aiPlatforms?: string[];
}) {
  const env: Record<string, string> = {
    ...process.env,
  };

  // Set API keys from options
  if (options.openaiApiKey) env.OPENAI_API_KEY = options.openaiApiKey;
  if (options.anthropicApiKey) env.ANTHROPIC_API_KEY = options.anthropicApiKey;
  if (options.googleApiKey) env.GOOGLE_API_KEY = options.googleApiKey;
  if (options.xaiApiKey) env.XAI_API_KEY = options.xaiApiKey;

  // Build command with arguments
  const args: string[] = [];
  if (options.openaiApiKey)
    args.push(`--openai_api_key=${options.openaiApiKey}`);
  if (options.anthropicApiKey)
    args.push(`--anthropic_api_key=${options.anthropicApiKey}`);
  if (options.googleApiKey)
    args.push(`--google_api_key=${options.googleApiKey}`);
  if (options.xaiApiKey) args.push(`--xai_api_key=${options.xaiApiKey}`);

  try {
    execSync(`pnpm exec setup-mcp ${args.join(' ')}`, {
      cwd: process.cwd(),
      stdio: 'inherit',
      env,
    });
    console.log('✅ MCP setup completed successfully');
  } catch (error) {
    console.error('❌ MCP setup failed:', error);
    throw error;
  }
}

// Usage
await setupMCP({
  openaiApiKey: process.env.OPENAI_API_KEY,
  anthropicApiKey: process.env.ANTHROPIC_API_KEY,
  platform: 'cursor',
});
```

## Advanced Integration

### With Secret Management

```typescript
import { SecretsManager } from 'aws-sdk';
import { setupMCP } from './setup-mcp';

async function setupMCPWithSecrets() {
  const secretsManager = new SecretsManager();

  // Fetch secrets from AWS Secrets Manager
  const openaiKey = await getSecret('openai-api-key');
  const anthropicKey = await getSecret('anthropic-api-key');

  await setupMCP({
    openaiApiKey: openaiKey,
    anthropicApiKey: anthropicKey,
    platform: 'cursor',
  });
}
```

### CI/CD Integration

```yaml
# GitHub Actions
name: Setup MCP

on:
  workflow_dispatch:

jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v4
        with:
          version: 10

      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: pnpm install

      - name: Setup MCP
        run: |
          pnpm setup-mcp \
            --openai_api_key=${{ secrets.OPENAI_API_KEY }} \
            --anthropic_api_key=${{ secrets.ANTHROPIC_API_KEY }}
        env:
          NODE_ENV: production
```

### Docker Integration

```dockerfile
FROM node:20-slim

WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

# Copy MCP setup script
COPY --from=@omnitech/shared-rulesync-rules ./node_modules/@omnitech/shared-rulesync-rules ./

# Setup MCP with environment variables
ARG OPENAI_API_KEY
ARG ANTHROPIC_API_KEY
RUN pnpm setup-mcp \
    --openai_api_key=${OPENAI_API_KEY} \
    --anthropic_api_key=${ANTHROPIC_API_KEY}

# Your application code
COPY . .

CMD ["node", "index.js"]
```

## Environment Variable Patterns

### From .env File

```typescript
import * as dotenv from 'dotenv';
import { execSync } from 'child_process';

dotenv.config();

execSync('pnpm setup-mcp', {
  env: {
    ...process.env, // Includes .env variables
  },
  stdio: 'inherit',
});
```

### From Configuration Service

```typescript
import { ConfigService } from './config';

const config = new ConfigService();

execSync('pnpm setup-mcp', {
  env: {
    OPENAI_API_KEY: config.get('ai.openai.key'),
    ANTHROPIC_API_KEY: config.get('ai.anthropic.key'),
    GOOGLE_API_KEY: config.get('ai.google.key'),
    XAI_API_KEY: config.get('ai.xai.key'),
    NODE_ENV: config.get('env'),
  },
  stdio: 'inherit',
});
```

## Error Handling

```typescript
import { execSync } from 'child_process';

function setupMCPSafely() {
  try {
    execSync('pnpm setup-mcp', {
      stdio: 'inherit',
      env: process.env,
    });
    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      console.error('Setup failed:', error.message);
      return { success: false, error: error.message };
    }
    return { success: false, error: 'Unknown error' };
  }
}
```

## Related Documentation

- [MCP CLI Usage](../mcp-cli-usage.md)
- [MCP Setup Guide](../mcp-setup.md)
- [Scripts README](../../scripts/README.md)
