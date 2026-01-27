#!/usr/bin/env node

/**
 * Auto MCP Setup Script
 *
 * Automatically detects and configures MCP IDE integration during package installation.
 * This script runs during postinstall to provide seamless MCP setup.
 */

import * as fs from 'fs';
import * as path from 'path';

interface AutoDetectionResult {
  detectedIDEs: string[];
  hasEnvVars: boolean;
  recommendedConfig: {
    platform?: string;
    aiPlatforms?: string[];
    autoConfigure: boolean;
  };
}

class AutoMCPSetup {
  private workspaceRoot: string;
  private isCI: boolean;

  constructor() {
    this.workspaceRoot = process.cwd();
    this.isCI = this.detectCIEnvironment();
  }

  private detectCIEnvironment(): boolean {
    return !!(
      process.env.CI ||
      process.env.CONTINUOUS_INTEGRATION ||
      process.env.GITHUB_ACTIONS ||
      process.env.CIRCLECI ||
      process.env.TRAVIS ||
      process.env.JENKINS_URL
    );
  }

  private detectIDEs(): string[] {
    const detected: string[] = [];

    // Check for Windsurf first (highest priority)
    if (this.checkPathExists('.windsurf')) {
      detected.push('windsurf');
    }
    if (process.env.WINDSURF_FOLDER) {
      detected.push('windsurf');
    }

    // Check for Cursor
    if (this.checkPathExists('.cursor')) {
      detected.push('cursor');
    }
    if (process.env.CURSOR_FOLDER) {
      detected.push('cursor');
    }

    // Check for VS Code/Continue
    if (this.checkPathExists('.vscode')) {
      detected.push('continue');
    }
    if (process.env.VSCODE_PID) {
      detected.push('continue');
    }

    // Check for JetBrains IDEs
    if (this.checkPathExists('.idea')) {
      detected.push('jetbrains');
    }

    return [...new Set(detected)]; // Remove duplicates
  }

  private checkPathExists(relativePath: string): boolean {
    try {
      const fullPath = path.resolve(this.workspaceRoot, relativePath);
      return fs.existsSync(fullPath);
    } catch {
      return false;
    }
  }

  private detectEnvironmentVariables(): boolean {
    const requiredVars = ['OPENAI_API_KEY', 'ANTHROPIC_API_KEY', 'GOOGLE_API_KEY', 'XAI_API_KEY'];

    return requiredVars.some(varName => process.env[varName]);
  }

  private detectGitRepository(): boolean {
    return this.checkPathExists('.git');
  }

  private detectNodeProject(): boolean {
    return this.checkPathExists('package.json');
  }

  private analyzeEnvironment(): AutoDetectionResult {
    const detectedIDEs = this.detectIDEs();
    const hasEnvVars = this.detectEnvironmentVariables();
    const isNodeProject = this.detectNodeProject();

    let recommendedConfig: AutoDetectionResult['recommendedConfig'] = {
      autoConfigure: false,
    };

    // Only auto-configure if we have good signals
    if (detectedIDEs.length > 0 && hasEnvVars && isNodeProject) {
      recommendedConfig = {
        platform: detectedIDEs[0], // Use first detected IDE
        aiPlatforms: this.detectAIPlatforms(),
        autoConfigure: true,
      };
    } else if (detectedIDEs.length > 0 && isNodeProject) {
      // Offer to configure if IDE detected but no env vars
      recommendedConfig = {
        platform: detectedIDEs[0],
        autoConfigure: false,
      };
    }

    return {
      detectedIDEs,
      hasEnvVars,
      recommendedConfig,
    };
  }

  private detectAIPlatforms(): string[] {
    const platforms: string[] = [];

    if (process.env.OPENAI_API_KEY) {
      platforms.push('gpt', 'codex');
    }
    if (process.env.ANTHROPIC_API_KEY) {
      platforms.push('claude');
    }
    if (process.env.GOOGLE_API_KEY) {
      platforms.push('gemini');
    }
    if (process.env.XAI_API_KEY) {
      platforms.push('grok');
    }

    return platforms.length > 0 ? platforms : ['gpt']; // Default to GPT
  }

  private async performAutoSetup(config: AutoDetectionResult['recommendedConfig']): Promise<void> {
    if (!config.autoConfigure || !config.platform) {
      return;
    }

    console.log('🚀 Auto-configuring MCP integration...\n');

    try {
      // Generate configuration automatically
      const envVars: Record<string, string> = {
        NODE_ENV: 'development',
      };

      // Add detected API keys
      if (process.env.OPENAI_API_KEY) {
        envVars.OPENAI_API_KEY = process.env.OPENAI_API_KEY;
      }
      if (process.env.ANTHROPIC_API_KEY) {
        envVars.ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
      }
      if (process.env.GOOGLE_API_KEY) {
        envVars.GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
      }
      if (process.env.XAI_API_KEY) {
        envVars.XAI_API_KEY = process.env.XAI_API_KEY;
      }

      // Find platform configuration
      const platform = this.findPlatformConfig(config.platform);
      if (!platform) {
        console.log(`⚠️  Unknown platform: ${config.platform}`);
        return;
      }

      // Generate and write configuration
      const mcpConfig = this.generateMCPConfig(envVars, platform);
      this.writeConfig(mcpConfig, platform);

      console.log(`✅ Auto-configured MCP for ${platform.name}`);
      console.log(`📁 Configuration written to: ${platform.configPath}`);
      console.log('🔄 Please restart your IDE to load the MCP configuration\n');
    } catch (error) {
      console.log('⚠️  Auto-configuration failed, but installation completed successfully');
      console.log('💡 Run "pnpm setup-mcp" to configure MCP manually\n');
    }
  }

  private findPlatformConfig(platformId: string) {
    const PLATFORMS = [
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
        name: 'JetBrains IDEs',
        id: 'jetbrains',
        description: 'JetBrains IDEs (IntelliJ, PyCharm, WebStorm, etc.)',
        envVars: ['OPENAI_API_KEY', 'ANTHROPIC_API_KEY', 'GOOGLE_API_KEY', 'XAI_API_KEY'],
        configPath: '.idea/mcp.json',
      },
      {
        name: 'Direct MCP',
        id: 'direct',
        description: 'Direct MCP configuration (mcp.json in project root)',
        envVars: ['OPENAI_API_KEY', 'ANTHROPIC_API_KEY', 'GOOGLE_API_KEY', 'XAI_API_KEY'],
        configPath: 'mcp.json',
      },
    ];

    return PLATFORMS.find(p => p.id === platformId);
  }

  private generateMCPConfig(
    envVars: Record<string, string>,
    platform: {
      id: string;
      configPath?: string;
    },
  ) {
    const config = {
      mcpServers: {
        'omnitech-shared-mcp': {
          command: 'tsx',
          args: ['./mcp-server/omnitech-shared-mcp/src/server.ts'],
          env: {
            ...envVars,
            RULESYNC_ROOT: '${workspaceFolder}',
          },
          cwd: undefined as string | undefined,
        },
      },
    };

    // Add platform-specific configurations
    if (platform.id === 'windsurf') {
      config.mcpServers['omnitech-shared-mcp'].cwd = '${workspaceFolder}';
    } else if (platform.id === 'jetbrains') {
      config.mcpServers['omnitech-shared-mcp'].env.RULESYNC_ROOT = '$PROJECT_DIR$';
    }

    return config;
  }

  private writeConfig(
    config: unknown,
    platform: {
      configPath?: string;
    },
  ): void {
    const configPath = platform.configPath || 'mcp.json';
    const fullPath = path.resolve(this.workspaceRoot, configPath);
    const dir = path.dirname(fullPath);

    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write config file
    fs.writeFileSync(fullPath, JSON.stringify(config, null, 2));
  }

  private showManualSetupInstructions(config: AutoDetectionResult): void {
    console.log('💡 MCP Setup Instructions:\n');

    if (config.detectedIDEs.length > 0) {
      console.log(`🔍 Detected IDEs: ${config.detectedIDEs.join(', ')}`);
    }

    if (!config.hasEnvVars) {
      console.log('⚠️  No API keys found in environment variables');
      console.log('💡 Set API keys in your environment before running setup:');
      console.log('   export OPENAI_API_KEY=sk-...');
      console.log('   export ANTHROPIC_API_KEY=sk-...');
      console.log('   export GOOGLE_API_KEY=...');
      console.log('   export XAI_API_KEY=...\n');
    }

    console.log('🛠️  To configure MCP manually, run:');
    console.log('   pnpm setup-mcp');
    console.log('\n📚 For detailed setup instructions, see: docs/mcp-setup.md\n');
  }

  async run(): Promise<void> {
    // Skip auto-setup in CI environments
    if (this.isCI) {
      console.log('🏗️  CI environment detected, skipping auto MCP setup');
      return;
    }

    // Skip if not in a Node.js project
    if (!this.detectNodeProject()) {
      return;
    }

    console.log('🔍 Analyzing environment for MCP auto-configuration...\n');

    const analysis = this.analyzeEnvironment();

    // Perform auto-setup if conditions are met
    if (analysis.recommendedConfig.autoConfigure) {
      await this.performAutoSetup(analysis.recommendedConfig);
    } else {
      // Show helpful instructions
      this.showManualSetupInstructions(analysis);
    }

    console.log('✅ MCP setup analysis complete');
  }
}

// Run if called directly or during postinstall
const isMainModule =
  process.argv[1]?.includes('auto-mcp-setup') || import.meta.url.includes('auto-mcp-setup');

if (isMainModule) {
  const setup = new AutoMCPSetup();
  setup.run().catch(error => {
    console.error('❌ Auto MCP setup failed:', error);
    // Don't exit with error code to avoid breaking installation
    console.log('⚠️  Continuing installation despite MCP setup failure');
  });
}

export { AutoMCPSetup };
