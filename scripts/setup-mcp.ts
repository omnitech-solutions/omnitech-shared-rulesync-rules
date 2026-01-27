#!/usr/bin/env node

/**
 * MCP Setup Script
 * 
 * Interactive CLI tool to configure MCP servers for different AI platforms.
 * Supports: Claude, Gemini, Codex, Grok, Windsurf, GPT
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

// Get directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface PlatformConfig {
  name: string;
  id: string;
  description: string;
  envVars: string[];
  configPath?: string;
}

const PLATFORMS: PlatformConfig[] = [
  {
    name: 'Cursor',
    id: 'cursor',
    description: 'Cursor IDE (supports Claude, GPT, Gemini, Grok)',
    envVars: ['OPENAI_API_KEY', 'ANTHROPIC_API_KEY', 'GOOGLE_API_KEY', 'XAI_API_KEY'],
    configPath: '.cursor/mcp.json',
  },
  {
    name: 'Windsurf',
    id: 'windsurf',
    description: 'Windsurf IDE (native MCP support)',
    envVars: ['OPENAI_API_KEY', 'ANTHROPIC_API_KEY', 'GOOGLE_API_KEY', 'XAI_API_KEY'],
    configPath: '.windsurf/mcp.json',
  },
  {
    name: 'Continue (VS Code)',
    id: 'continue',
    description: 'Continue extension for VS Code',
    envVars: ['OPENAI_API_KEY', 'ANTHROPIC_API_KEY', 'GOOGLE_API_KEY', 'XAI_API_KEY'],
    configPath: '.continue/config.json',
  },
  {
    name: 'Direct MCP',
    id: 'direct',
    description: 'Direct MCP configuration (mcp.json in project root)',
    envVars: ['OPENAI_API_KEY', 'ANTHROPIC_API_KEY', 'GOOGLE_API_KEY', 'XAI_API_KEY'],
    configPath: 'mcp.json',
  },
];

interface AIPlatform {
  name: string;
  id: string;
  envVar: string;
  description: string;
}

const AI_PLATFORMS: AIPlatform[] = [
  { name: 'Claude (Anthropic)', id: 'claude', envVar: 'ANTHROPIC_API_KEY', description: 'Anthropic Claude' },
  { name: 'GPT (OpenAI)', id: 'gpt', envVar: 'OPENAI_API_KEY', description: 'OpenAI GPT' },
  { name: 'Codex (OpenAI)', id: 'codex', envVar: 'OPENAI_API_KEY', description: 'OpenAI Codex' },
  { name: 'Gemini (Google)', id: 'gemini', envVar: 'GOOGLE_API_KEY', description: 'Google Gemini' },
  { name: 'Grok (xAI)', id: 'grok', envVar: 'XAI_API_KEY', description: 'xAI Grok' },
];

interface MCPConfig {
  mcpServers: {
    [key: string]: {
      command: string;
      args: string[];
      env?: Record<string, string>;
      cwd?: string;
    };
  };
}

class MCPSetup {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  private question(query: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(query, resolve);
    });
  }

  private close(): void {
    this.rl.close();
  }

  private async selectPlatform(): Promise<PlatformConfig> {
    console.log('\n📋 Select your IDE/Platform:\n');
    PLATFORMS.forEach((platform, index) => {
      console.log(`${index + 1}. ${platform.name} - ${platform.description}`);
    });

    const answer = await this.question('\nEnter number (1-4): ');
    const index = parseInt(answer, 10) - 1;

    if (index < 0 || index >= PLATFORMS.length) {
      console.log('❌ Invalid selection. Using Direct MCP.');
      return PLATFORMS[3]; // Default to Direct MCP
    }

    return PLATFORMS[index];
  }

  private async selectAIPlatforms(): Promise<AIPlatform[]> {
    console.log('\n🤖 Select AI platforms you want to use (comma-separated, e.g., 1,2,3):\n');
    AI_PLATFORMS.forEach((platform, index) => {
      console.log(`${index + 1}. ${platform.name} - ${platform.description}`);
    });

    const answer = await this.question('\nEnter numbers (comma-separated): ');
    const indices = answer
      .split(',')
      .map((n) => parseInt(n.trim(), 10) - 1)
      .filter((n) => !isNaN(n) && n >= 0 && n < AI_PLATFORMS.length);

    if (indices.length === 0) {
      console.log('⚠️  No platforms selected. Using GPT as default.');
      return [AI_PLATFORMS[1]]; // Default to GPT
    }

    return indices.map((i) => AI_PLATFORMS[i]);
  }

  private async getEnvVar(envVar: string, defaultValue?: string): Promise<string> {
    // Check if already set in environment
    if (process.env[envVar]) {
      console.log(`✅ ${envVar} found in environment: ${process.env[envVar].substring(0, 10)}...`);
      return process.env[envVar];
    }

    // Check if passed via CLI args
    const argValue = this.getArgValue(envVar);
    if (argValue) {
      return argValue;
    }

    // Prompt user
    const prompt = defaultValue
      ? `Enter ${envVar} (press Enter for default: ${defaultValue}): `
      : `Enter ${envVar}: `;
    
    const answer = await this.question(prompt);
    return answer.trim() || defaultValue || '';
  }

  private getArgValue(envVar: string): string | null {
    const args = process.argv.slice(2);
    // Support both --VAR=value and --var=value formats
    const varName = envVar.toLowerCase().replace(/_/g, '-');
    const argIndex = args.findIndex(
      (arg) => 
        arg.startsWith(`--${envVar}=`) || 
        arg.startsWith(`--${envVar.toLowerCase()}=`) ||
        arg.startsWith(`--${varName}=`)
    );
    if (argIndex !== -1) {
      return args[argIndex].split('=')[1];
    }
    return null;
  }

  private async collectEnvVars(aiPlatforms: AIPlatform[]): Promise<Record<string, string>> {
    const envVars: Record<string, string> = {};
    const requiredVars = new Set<string>();

    // Collect required env vars from selected AI platforms
    aiPlatforms.forEach((platform) => {
      requiredVars.add(platform.envVar);
    });

    // Always include NODE_ENV
    requiredVars.add('NODE_ENV');

    console.log('\n🔑 Environment Variables:\n');

    for (const envVar of Array.from(requiredVars).sort()) {
      const value = await this.getEnvVar(envVar, envVar === 'NODE_ENV' ? 'development' : undefined);
      if (value) {
        envVars[envVar] = value;
      }
    }

    // Ask about additional optional env vars
    const additional = await this.question('\nAdd additional environment variables? (y/n): ');
    if (additional.toLowerCase() === 'y') {
      while (true) {
        const varName = await this.question('Variable name (or press Enter to finish): ');
        if (!varName.trim()) break;

        const varValue = await this.question(`Value for ${varName}: `);
        if (varValue.trim()) {
          envVars[varName] = varValue.trim();
        }
      }
    }

    return envVars;
  }

  private generateMCPConfig(envVars: Record<string, string>, platform: PlatformConfig): MCPConfig {
    const config: MCPConfig = {
      mcpServers: {
        'omnitech-shared-mcp': {
          command: 'tsx',
          args: ['./mcp-server/omnitech-shared-mcp/src/server.ts'],
          env: {
            ...envVars,
            RULESYNC_ROOT: '${workspaceFolder}',
          },
        },
      },
    };

    // Add cwd for Windsurf
    if (platform.id === 'windsurf') {
      config.mcpServers['omnitech-shared-mcp'].cwd = '${workspaceFolder}';
    }

    return config;
  }

  private async writeConfig(config: MCPConfig, platform: PlatformConfig): Promise<void> {
    const configPath = platform.configPath || 'mcp.json';
    const fullPath = path.resolve(process.cwd(), configPath);
    const dir = path.dirname(fullPath);

    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`📁 Created directory: ${dir}`);
    }

    // Write config file
    fs.writeFileSync(fullPath, JSON.stringify(config, null, 2));
    console.log(`✅ Configuration written to: ${fullPath}`);
  }

  private generateEnvFile(envVars: Record<string, string>): void {
    const envPath = path.resolve(process.cwd(), '.env.mcp');
    const envContent = Object.entries(envVars)
      .map(([key, value]) => `${key}=${value}`)
      .join('\n');

    fs.writeFileSync(envPath, envContent);
    console.log(`✅ Environment variables written to: ${envPath}`);
    console.log('⚠️  Remember to add .env.mcp to .gitignore!');
  }

  private async confirmOverwrite(filePath: string): Promise<boolean> {
    if (!fs.existsSync(filePath)) {
      return true;
    }

    const answer = await this.question(
      `⚠️  ${filePath} already exists. Overwrite? (y/n): `
    );
    return answer.toLowerCase() === 'y';
  }

  async run(): Promise<void> {
    console.log('🚀 MCP Setup Wizard\n');
    console.log('This script will help you configure MCP servers for your AI platform.\n');

    try {
      // Select IDE/Platform
      const platform = await this.selectPlatform();
      console.log(`\n✅ Selected: ${platform.name}`);

      // Select AI platforms
      const aiPlatforms = await this.selectAIPlatforms();
      console.log(`\n✅ Selected AI platforms: ${aiPlatforms.map((p) => p.name).join(', ')}`);

      // Collect environment variables
      const envVars = await this.collectEnvVars(aiPlatforms);

      // Generate MCP configuration
      const config = this.generateMCPConfig(envVars, platform);

      // Confirm overwrite if file exists
      const configPath = platform.configPath || 'mcp.json';
      const fullPath = path.resolve(process.cwd(), configPath);
      const shouldOverwrite = await this.confirmOverwrite(fullPath);

      if (!shouldOverwrite) {
        console.log('❌ Setup cancelled.');
        this.close();
        return;
      }

      // Write configuration
      await this.writeConfig(config, platform);

      // Optionally generate .env file
      const generateEnv = await this.question('\nGenerate .env.mcp file? (y/n): ');
      if (generateEnv.toLowerCase() === 'y') {
        this.generateEnvFile(envVars);
      }

      // Summary
      console.log('\n✨ Setup Complete!\n');
      console.log('📝 Next steps:');
      console.log(`   1. Review the configuration at: ${configPath}`);
      console.log('   2. Restart your IDE/editor');
      console.log('   3. Verify MCP connection in your platform settings');
      console.log('\n📚 For more information, see: docs/mcp-setup.md\n');

    } catch (error) {
      console.error('❌ Error during setup:', error);
      process.exit(1);
    } finally {
      this.close();
    }
  }
}

// Run if called directly (check if this is the main module)
const isMainModule = process.argv[1]?.includes('setup-mcp') || 
                     import.meta.url.includes('setup-mcp');

if (isMainModule) {
  const setup = new MCPSetup();
  setup.run().catch((error) => {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  });
}

export { MCPSetup };
