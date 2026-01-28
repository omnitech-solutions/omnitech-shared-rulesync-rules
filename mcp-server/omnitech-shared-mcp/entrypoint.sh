#!/usr/bin/env sh
set -e

: "${RULESYNC_ROOT:=/workspace}"

if [ ! -d "$RULESYNC_ROOT" ]; then
  echo "RULESYNC_ROOT '$RULESYNC_ROOT' does not exist; creating it." >&2
  mkdir -p "$RULESYNC_ROOT"
fi

exec "$@"
