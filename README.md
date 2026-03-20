# My Portfolio

Static portfolio site with standalone puzzle prototypes.

## Local development

Run the local server:

```bash
node server.js
```

Then open `http://localhost:3000`.

## Hosting on GitHub Pages

This repo now includes `.github/workflows/deploy-pages.yml`, which deploys the full static site to GitHub Pages on pushes to `main`.

### One-time setup

1. Push the repository to GitHub.
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. Push or merge to `main`.
4. GitHub will publish the site at:
   - `https://<your-user>.github.io/<repo-name>/`

### Notes

- The site is fully static, so there is no build step.
- `.nojekyll` is included so GitHub Pages serves the files exactly as committed.
- Relative links are used for subpages like `orbit-puzzle/`, which keeps the site working on project-style GitHub Pages URLs.
