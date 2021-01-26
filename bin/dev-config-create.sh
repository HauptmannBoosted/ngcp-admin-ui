#!/bin/bash

if [ $# -eq 0 ]; then
  echo "Error: please pass the Sipwise VoIP server IP or its domain name as the CLI argument to this script" >&2
  exit 1
fi

NODE_VERSION_DEFAULT=$(node -v 2> /dev/null)
NODE_VERSION_DEBIAN=$(nodejs -v 2> /dev/null)
SCRIPT_FOLDER=$(dirname "$0")
SCRIPT_FILE="$SCRIPT_FOLDER/dev-config-create.js"

echo "Configuring Sipwise VoIP Platform at $1"

if [ "$NODE_VERSION_DEFAULT" != '' ]
then
  node "$SCRIPT_FILE" "$1"
elif [ "$NODE_VERSION_DEBIAN" != '' ]
then
  nodejs "$SCRIPT_FILE" "$1"
fi
