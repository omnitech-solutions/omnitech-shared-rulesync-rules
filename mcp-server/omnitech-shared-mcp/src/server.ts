#!/usr/bin/env node

/**
 * Omnitech Shared MCP Server
 *
 * Standalone MCP server for Rulesync configuration and tooling.
 * Provides tools for managing rules, commands, subagents, and MCP configuration.
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from '@modelcontextprotocol/sdk/types.js';
import * as fs from 'fs';
import * as path from 'path';

class OmnitechSharedMCPServer {
  private server: Server;
  private projectRoot: string;
  private readonly bundles = ['claude', 'codex', 'cursor', 'gemini'] as const;

  constructor() {
    this.server = new Server(
      {
        name: 'omnitech-shared-mcp',
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: {},
        },
      },
    );

    // Determine project root (where rulesync rules are located)
    this.projectRoot = process.env.RULESYNC_ROOT || process.cwd();

    this.setupHandlers();
  }

  private setupHandlers(): void {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'list_rules',
            description: 'List all available rule files in the rulesync configuration',
            inputSchema: {
              type: 'object',
              properties: {
                category: {
                  type: 'string',
                  description: 'Filter by category (optional)',
                  enum: [
                    'architecture',
                    'code-quality',
                    'testing',
                    'security',
                    'documentation',
                    'performance',
                    'ui-ux',
                    'technology',
                  ],
                },
                bundle: {
                  type: 'string',
                  description:
                    'Optional agent bundle (claude, codex, cursor, gemini). Defaults to .rulesync.',
                  enum: ['claude', 'codex', 'cursor', 'gemini'],
                },
              },
            },
          },
          {
            name: 'read_rule',
            description: 'Read a specific rule file',
            inputSchema: {
              type: 'object',
              properties: {
                ruleName: {
                  type: 'string',
                  description: 'Name of the rule file (without .md extension)',
                },
                bundle: {
                  type: 'string',
                  description:
                    'Optional agent bundle (claude, codex, cursor, gemini). Defaults to .rulesync.',
                  enum: ['claude', 'codex', 'cursor', 'gemini'],
                },
              },
              required: ['ruleName'],
            },
          },
          {
            name: 'list_commands',
            description: 'List all available command files',
            inputSchema: {
              type: 'object',
              properties: {
                bundle: {
                  type: 'string',
                  description:
                    'Optional agent bundle (claude, codex, cursor, gemini). Defaults to .rulesync.',
                  enum: ['claude', 'codex', 'cursor', 'gemini'],
                },
              },
            },
          },
          {
            name: 'read_command',
            description: 'Read a specific command file',
            inputSchema: {
              type: 'object',
              properties: {
                commandName: {
                  type: 'string',
                  description: 'Name of the command file (without .md extension)',
                },
                bundle: {
                  type: 'string',
                  description:
                    'Optional agent bundle (claude, codex, cursor, gemini). Defaults to .rulesync.',
                  enum: ['claude', 'codex', 'cursor', 'gemini'],
                },
              },
              required: ['commandName'],
            },
          },
          {
            name: 'list_subagents',
            description: 'List all available subagent definitions',
            inputSchema: {
              type: 'object',
              properties: {
                bundle: {
                  type: 'string',
                  description:
                    'Optional agent bundle (claude, codex, cursor, gemini). Defaults to .rulesync.',
                  enum: ['claude', 'codex', 'cursor', 'gemini'],
                },
              },
            },
          },
          {
            name: 'read_subagent',
            description: 'Read a specific subagent definition',
            inputSchema: {
              type: 'object',
              properties: {
                subagentName: {
                  type: 'string',
                  description: 'Name of the subagent (without .md extension)',
                },
                bundle: {
                  type: 'string',
                  description:
                    'Optional agent bundle (claude, codex, cursor, gemini). Defaults to .rulesync.',
                  enum: ['claude', 'codex', 'cursor', 'gemini'],
                },
              },
              required: ['subagentName'],
            },
          },
          {
            name: 'validate_config',
            description: 'Validate the MCP configuration file',
            inputSchema: {
              type: 'object',
              properties: {
                configPath: {
                  type: 'string',
                  description: 'Path to mcp.json file (optional, defaults to mcp.json)',
                },
              },
            },
          },
          {
            name: 'list_bundles',
            description: 'List available agent bundles',
            inputSchema: {
              type: 'object',
              properties: {},
            },
          },
          {
            name: 'validate_bundle',
            description: 'Validate that a bundle has expected folders and files',
            inputSchema: {
              type: 'object',
              properties: {
                bundle: {
                  type: 'string',
                  description: 'Agent bundle to validate',
                  enum: ['claude', 'codex', 'cursor', 'gemini'],
                },
              },
              required: ['bundle'],
            },
          },
        ] as Tool[],
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async request => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'list_rules':
            return await this.listRules(
              args?.category as string | undefined,
              args?.bundle as string | undefined,
            );

          case 'read_rule':
            return await this.readRule(
              args?.ruleName as string,
              args?.bundle as string | undefined,
            );

          case 'list_commands':
            return await this.listCommands(args?.bundle as string | undefined);

          case 'read_command':
            return await this.readCommand(
              args?.commandName as string,
              args?.bundle as string | undefined,
            );

          case 'list_subagents':
            return await this.listSubagents(args?.bundle as string | undefined);

          case 'read_subagent':
            return await this.readSubagent(
              args?.subagentName as string,
              args?.bundle as string | undefined,
            );

          case 'validate_config':
            return await this.validateConfig(args?.configPath as string | undefined);

          case 'list_bundles':
            return await this.listBundles();

          case 'validate_bundle':
            return await this.validateBundle(args?.bundle as string);

          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  private async listRules(
    category?: string,
    bundle?: string,
  ): Promise<{
    content: Array<{ type: string; text: string }>;
  }> {
    const rulesDir = path.join(this.resolveRulesRoot(bundle), 'rules');

    if (!fs.existsSync(rulesDir)) {
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                error: 'Rules directory not found',
                path: rulesDir,
                hint: 'Run pnpm sync-rules to set up rules',
              },
              null,
              2,
            ),
          },
        ],
      };
    }

    const files = fs
      .readdirSync(rulesDir)
      .filter(file => file.endsWith('.md') || file.endsWith('.mdc'))
      .map(file => file.replace(/\.md$|\.mdc$/u, ''));

    const filtered = category ? files.filter(file => file.includes(category)) : files;

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(
            {
              rules: filtered,
              count: filtered.length,
              category: category || 'all',
            },
            null,
            2,
          ),
        },
      ],
    };
  }

  private async readRule(
    ruleName: string,
    bundle?: string,
  ): Promise<{
    content: Array<{ type: string; text: string }>;
  }> {
    const base = this.resolveRulesRoot(bundle);
    const rulePath = this.findFile(
      base,
      'rules',
      ruleName,
      ['.md', '.mdc'],
      bundle ? this.resolveRulesRoot() : undefined,
    );
    const content = fs.readFileSync(rulePath, 'utf-8');

    return {
      content: [
        {
          type: 'text',
          text: content,
        },
      ],
    };
  }

  private async listCommands(bundle?: string): Promise<{
    content: Array<{ type: string; text: string }>;
  }> {
    const commandsDir = path.join(this.resolveRulesRoot(bundle), 'commands');

    if (!fs.existsSync(commandsDir)) {
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                error: 'Commands directory not found',
                path: commandsDir,
              },
              null,
              2,
            ),
          },
        ],
      };
    }

    const files = fs
      .readdirSync(commandsDir)
      .filter(file => file.endsWith('.md') || file.endsWith('.toml'))
      .map(file => file.replace(/\.md$|\.toml$/u, ''));

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(
            {
              commands: files,
              count: files.length,
            },
            null,
            2,
          ),
        },
      ],
    };
  }

  private async readCommand(
    commandName: string,
    bundle?: string,
  ): Promise<{
    content: Array<{ type: string; text: string }>;
  }> {
    const base = this.resolveRulesRoot(bundle);
    const commandPath = this.findFile(
      base,
      'commands',
      commandName,
      ['.md', '.toml'],
      bundle ? this.resolveRulesRoot() : undefined,
    );
    const content = fs.readFileSync(commandPath, 'utf-8');

    return {
      content: [
        {
          type: 'text',
          text: content,
        },
      ],
    };
  }

  private async listSubagents(bundle?: string): Promise<{
    content: Array<{ type: string; text: string }>;
  }> {
    const subagentsDir = path.join(this.resolveRulesRoot(bundle), 'subagents');

    if (!fs.existsSync(subagentsDir)) {
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                error: 'Subagents directory not found',
                path: subagentsDir,
              },
              null,
              2,
            ),
          },
        ],
      };
    }

    const files = fs
      .readdirSync(subagentsDir)
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace('.md', ''));

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(
            {
              subagents: files,
              count: files.length,
            },
            null,
            2,
          ),
        },
      ],
    };
  }

  private async readSubagent(
    subagentName: string,
    bundle?: string,
  ): Promise<{
    content: Array<{ type: string; text: string }>;
  }> {
    const base = this.resolveRulesRoot(bundle);
    const subagentPath = this.findFile(
      base,
      'subagents',
      subagentName,
      ['.md'],
      bundle ? this.resolveRulesRoot() : undefined,
    );
    const content = fs.readFileSync(subagentPath, 'utf-8');

    return {
      content: [
        {
          type: 'text',
          text: content,
        },
      ],
    };
  }

  private async validateConfig(configPath?: string): Promise<{
    content: Array<{ type: string; text: string }>;
  }> {
    const configFile = configPath || path.join(this.projectRoot, 'mcp.json');

    if (!fs.existsSync(configFile)) {
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                valid: false,
                error: 'Configuration file not found',
                path: configFile,
              },
              null,
              2,
            ),
          },
        ],
      };
    }

    try {
      const content = fs.readFileSync(configFile, 'utf-8');
      const config = JSON.parse(content);

      // Basic validation
      const errors: string[] = [];
      if (!config.mcpServers) {
        errors.push('Missing mcpServers property');
      } else {
        for (const [name, server] of Object.entries(config.mcpServers)) {
          const s = server as { command?: string; args?: unknown[] };
          if (!s.command) {
            errors.push(`Server ${name}: Missing command`);
          }
          if (!s.args || !Array.isArray(s.args)) {
            errors.push(`Server ${name}: Missing or invalid args`);
          }
        }
      }

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                valid: errors.length === 0,
                errors: errors.length > 0 ? errors : undefined,
                servers: Object.keys(config.mcpServers || {}),
              },
              null,
              2,
            ),
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                valid: false,
                error: error instanceof Error ? error.message : String(error),
              },
              null,
              2,
            ),
          },
        ],
      };
    }
  }

  private resolveRulesRoot(bundle?: string): string {
    if (bundle) {
      if (!this.bundles.includes(bundle as (typeof this.bundles)[number])) {
        throw new Error(`Unknown bundle: ${bundle}`);
      }
      const bundleRoot = path.join(this.projectRoot, bundle);
      if (!fs.existsSync(bundleRoot)) {
        throw new Error(`Bundle not found: ${bundle}`);
      }
      return bundleRoot;
    }

    const rulesyncRoot = path.join(this.projectRoot, '.rulesync');
    if (fs.existsSync(rulesyncRoot)) {
      return rulesyncRoot;
    }

    return this.projectRoot;
  }

  private findFile(
    base: string,
    subdir: string,
    name: string,
    exts: string[],
    fallbackBase?: string,
  ): string {
    for (const ext of exts) {
      const candidate = path.join(base, subdir, `${name}${ext}`);
      if (fs.existsSync(candidate)) {
        return candidate;
      }
    }

    if (fallbackBase) {
      for (const ext of exts) {
        const candidate = path.join(fallbackBase, subdir, `${name}${ext}`);
        if (fs.existsSync(candidate)) {
          return candidate;
        }
      }
    }

    throw new Error(`File not found: ${path.join(base, subdir, name)} (${exts.join(', ')})`);
  }

  private async listBundles(): Promise<{
    content: Array<{ type: string; text: string }>;
  }> {
    const bundles = this.bundles.filter(bundle =>
      fs.existsSync(path.join(this.projectRoot, bundle)),
    );

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(
            {
              bundles,
              count: bundles.length,
            },
            null,
            2,
          ),
        },
      ],
    };
  }

  private async validateBundle(bundle: string): Promise<{
    content: Array<{ type: string; text: string }>;
  }> {
    if (!this.bundles.includes(bundle as (typeof this.bundles)[number])) {
      throw new Error(`Unknown bundle: ${bundle}`);
    }

    const bundleRoot = path.join(this.projectRoot, bundle);
    const checks = {
      root: fs.existsSync(bundleRoot),
      rules: fs.existsSync(path.join(bundleRoot, 'rules')),
      commands: fs.existsSync(path.join(bundleRoot, 'commands')),
      subagents: fs.existsSync(path.join(bundleRoot, 'subagents')),
    };

    const missing = Object.entries(checks)
      .filter(([, ok]) => !ok)
      .map(([key]) => key);

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(
            {
              bundle,
              ok: missing.length === 0,
              missing,
            },
            null,
            2,
          ),
        },
      ],
    };
  }

  async run(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Omnitech Shared MCP Server running on stdio');
  }
}

// Run server if called directly
const isMainModule =
  import.meta.url === `file://${process.argv[1]}` ||
  process.argv[1]?.includes('server.ts') ||
  process.argv[1]?.includes('server.js');

if (isMainModule) {
  const server = new OmnitechSharedMCPServer();
  server.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

export { OmnitechSharedMCPServer };
