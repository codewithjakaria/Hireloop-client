<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# hireloop-client

Next.js 16 (App Router, RSC) client app for HireLoop. Single package (not a monorepo), npm with `package-lock.json` — don't use pnpm/yarn. TypeScript strict, Tailwind v4 (CSS-first config in `app/globals.css`, no `tailwind.config`), shadcn/ui on the `base-nova` style with Base UI (`@base-ui/react`), not Radix.

## Commands

```bash
npm run dev        # next dev
npm run lint       # eslint (flat config, eslint-config-next)
npm run typecheck  # tsc --noEmit
npm run format     # prettier --write **/*.{ts,tsx}
npm run build      # next build
```

There is no test runner and no CI workflow. Verify changes with `lint -> typecheck` (add `build` if the change affects the build).

## Conventions

- Path alias `@/*` maps to the repo root (`@/components/...`, `@/lib/...`).
- Prettier: no semicolons, double quotes, `prettier-plugin-tailwindcss` sorts classes — run `npm run format` instead of hand-formatting.
- Add UI with `npx shadcn@latest add <component>` (files land in `components/ui/`); aliases are defined in `components.json`.

## Auth / data (in progress)

- `lib/auth.ts` defines better-auth with the MongoDB adapter. Required env vars: `MONGODB_URI`, `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`. `.env*` is gitignored; there is no committed `.env`, so these are unset until configured.
- The Mongo database name `hireloop-db` is hardcoded there.
- better-auth is configured but has **no API route yet** — auth endpoints need `app/api/auth/[...all]/route.ts` before login flows work.

## Notes

- `CLAUDE.md` is just `@AGENTS.md` — keep guidance in this file only.
- The `<!-- BEGIN:nextjs-agent-rules -->` block above is machine-managed; don't edit or delete it.
