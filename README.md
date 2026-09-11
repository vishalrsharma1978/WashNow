# WashNow — Commercial Laundry & Linen Management

A static marketing website for **WashNow**, India's hospitality & healthcare
commercial laundry and linen management brand. Built with plain HTML, CSS, and
vanilla JavaScript — no build tooling required.

## Project structure

```
WashNow/
├── index.html          # Single-page site
├── css/style.css       # Styles
├── js/app.js           # Interactivity (explorers, tabs, ROI calculator)
├── assets/             # Logo and images
├── render.yaml         # Render.com static-site blueprint
└── .gitignore
```

## Run locally

Any static file server works. Using Python:

```powershell
cd WashNow
python -m http.server 9090
```

Then open http://localhost:9090

## Deploy on Render

This repo includes a [`render.yaml`](./render.yaml) Blueprint that provisions a
free **Static Site**.

### Option A — Blueprint (recommended)

1. Sign in at https://dashboard.render.com and connect your GitHub account.
2. Click **New +** → **Blueprint**.
3. Select the `vishalrsharma1978/WashNow` repository.
4. Render reads `render.yaml` and creates the static site — click **Apply**.
5. After the first deploy, the site is live at `https://washnow.onrender.com`
   (or a similar auto-generated URL).

### Option B — Manual static site

1. **New +** → **Static Site** → pick the `WashNow` repo.
2. Settings:
   - **Build Command:** *(leave blank)*
   - **Publish Directory:** `.`
3. Click **Create Static Site**.

Every push to the `main` branch automatically triggers a new deploy.
