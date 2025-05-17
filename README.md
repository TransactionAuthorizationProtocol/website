# Website

This repository contains the source code for a static site built with [Lume](https://lume.land/), a Deno-based site generator.

## Prerequisites

- **Deno**: Install Deno (the workflow uses version 2.2.3).
- **Node.js**: Required for Tailwind CSS processing (Node 18+ recommended).
- **Tailwind CSS**: Handled automatically by the build tasks.

## Development

Build the site locally or serve it for development using Deno tasks defined in `deno.json`:

```bash
deno task build   # Build the site into the `_site` directory
deno task serve   # Start a local server and watch for changes
```

## Deployment

The site is deployed to **GitHub Pages** using the workflow in `.github/workflows/main.yml`. On pushes to the `main` branch, the workflow builds the site and uploads the `_site` directory to GitHub Pages.
