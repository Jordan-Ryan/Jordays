# Jordays

This repository contains the source for the Jordays productivity app (located in `productivity-app/`).

## Deploying to GitHub Pages

The project now ships with an automated GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the static export and publishes it to the `gh-pages` branch whenever changes land on `main`.

1. Ensure GitHub Pages is configured to serve from the `gh-pages` branch (the root folder).
2. Push or merge changes to `main`—the workflow installs dependencies, runs `npm run build`, drops a `.nojekyll` file so the `_next` assets are served correctly, and deploys the generated `productivity-app/out` directory.
3. The published site will be available at `https://<your-user>.github.io/<repository-name>/`. If you need a different sub-path, set the `NEXT_PUBLIC_GITHUB_PAGES_PATH` repository secret before the workflow runs.

For manual deployments, run `npm run deploy` from `productivity-app/` to produce an updated `out/` directory with the `.nojekyll` marker.