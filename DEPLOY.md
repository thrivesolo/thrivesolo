# Deploying ThriveSolo on Replit

## Create a new Replit project

1. Go to [replit.com](https://replit.com) and click **Create Repl**.
2. Select **Import from GitHub**.
3. Enter the repo URL: `https://github.com/<your-username>/thrivesolo`
4. Replit will detect the Node.js project automatically.

## Set the run command

In the Replit Shell or via `.replit`, set the run command to:

```
pnpm run dev
```

Replit automatically injects the `PORT` environment variable — no additional env vars are required for the marketing site.

## Deploy

1. Click the **Deploy** button in the Replit toolbar.
2. Choose **Autoscale** or **Reserved VM** depending on your needs.
3. Replit will build the project (`pnpm run build`) and serve `dist/public/`.

## Local development

```bash
pnpm install
pnpm run dev
```

Open `http://localhost:5173` in your browser.

## Build for production

```bash
pnpm run build
```

Output is in `dist/public/`.
