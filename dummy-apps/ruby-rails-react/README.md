# Ruby + Rails + React

Minimal Rails API backend + React frontend demo app.

## Run (Local Dev)

From repo root:

```bash
cd dummy-apps/ruby-rails-react
pnpm install
pnpm dev
```

Rails runs on `http://localhost:3000` and Vite on `http://localhost:5173`.

## Rulesync Rules (Install / Update)

These instructions apply to any repo that wants to consume the shared rules
package.

### Install

1. Configure GitHub Packages in your `.npmrc`:

```
@omnitech:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

2. Add the package:

```bash
pnpm add @omnitech/shared-rulesync-rules
```

3. Add a sync script to your `package.json`:

```json
{
  "scripts": {
    "sync-rules": "rm -rf .rulesync && cp -r node_modules/@omnitech/shared-rulesync-rules/ .rulesync && rm -rf .rulesync/node_modules .rulesync/package.json && pnpm rulesync"
  }
}
```

4. Sync rules into `.rulesync`:

```bash
pnpm sync-rules
```

### Update

```bash
pnpm update @omnitech/shared-rulesync-rules && pnpm sync-rules
```

## AI + MCP (Configure & Connect)

### Recommended: automated setup

From the repo root:

```bash
pnpm install
pnpm setup-mcp
```

This generates a platform-specific MCP config and (optionally) `.env.mcp`.
Restart your IDE after setup.

### Manual setup (precise paths)

Use the platform config examples in `docs/platform-configs/`:

- Cursor: `.cursor/mcp.json`
- Windsurf: `.windsurf/mcp.json`
- Continue (VS Code): `.continue/config.json`
- JetBrains: `.idea/mcp.json`
- Direct MCP: `mcp.json` at the repo root

Example MCP server config (same for all platforms):

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

### API keys (set as env vars)

Set the provider key your AI platform needs:

```
OPENAI_API_KEY=...
ANTHROPIC_API_KEY=...
GOOGLE_API_KEY=...
XAI_API_KEY=...
```

If you create `.env.mcp`, add it to `.gitignore`.

### Verify MCP connection

1. Restart the IDE after config changes.
2. Open the AI chat panel and run any MCP-backed command.
3. Check the platform MCP status/logs if it fails to connect.

### Platform-specific setup (all)

Cursor:

1. Open Cursor Settings → Features → Model Context Protocol.
2. Paste config from `docs/platform-configs/cursor-mcp.json`.
3. Save and restart Cursor.

Windsurf:

1. Open Windsurf Settings → MCP Servers.
2. Add a server using `docs/platform-configs/windsurf-mcp.json`.
3. Save and restart Windsurf.

Continue (VS Code):

1. Install Continue.
2. Create `.continue/config.json` in the workspace root.
3. Paste config from `docs/platform-configs/continue-mcp.json`.
4. Restart VS Code.

JetBrains:

1. Install the MCP plugin for your IDE.
2. Create `.idea/mcp.json` in the workspace root.
3. Paste config from `docs/platform-configs/jetbrains-mcp.json`.
4. Restart the IDE.

## Swagger / API Client (Optional)

If you regenerate client types from Rails:

```bash
cd dummy-apps/ruby-rails-react/backend
bundle exec rake rswag:specs:swaggerize

cd ../frontend
pnpm api:gen
```
