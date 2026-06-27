# Deployment notes

## Best production option
Use Netlify or Vercel for the full application because the project includes Next.js server-side API routes for future AI integration.

## Netlify
1. Push the project to GitHub.
2. Import the repository in Netlify.
3. Build command: `npm run build`.
4. Publish directory: `.next`.
5. Add environment variables in Netlify.

## GitHub Pages
GitHub Pages is static hosting. It does not run Next.js server-side API routes. Use it only for a static demo build, not for the full AI/Auth production version.

Recommendation: make Netlify the official app link and GitHub Pages an optional public/static preview if needed.
