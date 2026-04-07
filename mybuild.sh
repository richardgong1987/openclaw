git pull origin main
git pull office main

pnpm install

pnpm build

pnpm ui:build

openclaw gateway restart
launchctl stop ai.openclaw.gateway && launchctl start ai.openclaw.gateway

