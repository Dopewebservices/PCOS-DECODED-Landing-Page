# PCOS DECODED — Production Netlify Deployment

This is the corrected production-ready Lovable/Git source for the PCOS DECODED landing page.

## Live Selar product URL
https://globalwomenshealthnetwork.selar.com/pcosdecoded

## Netlify build settings
- Base directory: project root (the folder containing `package.json`)
- Build command: `bun run build`
- Publish directory: `dist`
- Node version: `22`
- Nitro preset: `netlify`

Connect this project to the existing `pcosdecoded.netlify.app` Netlify site. Do not delete the existing production deployment before this version successfully builds and is verified.

## Image fix
All landing-page image assets used by the source are localized under `public/assets/`. The Lovable-hosted asset URLs have been replaced in the asset metadata with local `/assets/...` paths so the images are served by Netlify.

## Selar CTA fix
Purchase-oriented CTA links now point to the live Selar product URL above. The page design and copy are otherwise unchanged.
