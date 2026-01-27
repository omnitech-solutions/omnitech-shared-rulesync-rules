/**
 * Entry point for the Omnitech Shared MCP Server
 *
 * This file exports the server class for programmatic usage
 * and runs the server when executed directly.
 */

export { OmnitechSharedMCPServer } from './server.js';

// Run server if this is the main module
if (import.meta.url.endsWith(process.argv[1]) || process.argv[1]?.includes('index')) {
  import('./server.js')
    .then(module => {
      const server = new module.OmnitechSharedMCPServer();
      return server.run();
    })
    .catch(error => {
      console.error('Fatal error:', error);
      process.exit(1);
    });
}
