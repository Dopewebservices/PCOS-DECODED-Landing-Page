# PCOS DECODED — Production Source

This source is intended to be deployed to the EXISTING Netlify site `pcosdecoded.netlify.app`.

## Netlify build
- Build command: `bun run build`
- Publish directory: `dist`
- Node: `22`
- Base directory: repository root (the folder containing `package.json`)

## Selar
All purchase CTAs point to:
https://globalwomenshealthnetwork.selar.com/pcosdecoded

## Assets
Landing-page image binaries are localized under `public/assets/` and the Lovable asset metadata points to those local paths.

## Router
The project uses TanStack Start. The canonical router entry is `src/router.ts`, with `src/router.tsx` retained as a compatibility re-export. This avoids file-resolution ambiguity during Netlify's build while preserving the existing application architecture.

## Deployment
Push these files to the GitHub repository connected to the existing Netlify site. Do not create a new Netlify site and do not upload only `public/` or `dist/`.
