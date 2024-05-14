# cloudflare-error-1101

# Run project
```bash
pnpm install

pnpm run build
# or
pnpm run build -- --watch

pnpm add -g wrangler@latest

wrangler pages dev .svelte-kit/cloudflare --port=5173
```

The error occurs on http://localhost:5173/db

Source: ./src/routes/db/+page.server.ts

```text
Error: The script will never generate a response.
at async Object.fetch (file:///Users/USER/Library/pnpm/global/5/.pnpm/miniflare@3.20240419.1/node_modules/miniflare/dist/src/workers/core/entry.worker.js:966:22)
```

