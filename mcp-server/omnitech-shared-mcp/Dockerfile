FROM node:20-slim AS build

WORKDIR /app

# Enable pnpm via corepack for consistent installs.
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY tsconfig.json ./tsconfig.json
COPY src ./src
RUN pnpm build
RUN pnpm prune --prod

FROM node:20-slim

ENV NODE_ENV=production
ENV RULESYNC_ROOT=/workspace

WORKDIR /app

COPY --from=build /app/package.json ./package.json
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "const fs=require('fs');const cmd=fs.readFileSync('/proc/1/cmdline');process.exit(cmd.includes('node')?0:1)"

ENTRYPOINT ["./entrypoint.sh"]
CMD ["node", "dist/server.js"]
