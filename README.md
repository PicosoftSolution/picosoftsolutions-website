# PicoSoft Solutions — React (Vite) version

This is a plain React + Vite conversion of the original Next.js site.
No backend, no API routes, no Node server needed — pure static frontend.

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production (creates the "dist" folder)

```bash
npm run build
```

This creates a `dist/` folder containing:
- `index.html`
- `assets/` (JS + CSS, hashed filenames)
- `images/`, `logo-mark.png`
- `.htaccess` (needed for page routes like /services, /company to work on Apache/cPanel)

## Deploy to cPanel

1. Run `npm run build` on your machine.
2. Upload the **contents** of the `dist/` folder (not the folder itself) into
   `public_html` (or a subfolder if this is a subdomain/addon domain) via
   cPanel File Manager or FTP.
3. Make sure `.htaccess` is uploaded too (some FTP clients hide dotfiles —
   enable "show hidden files").
4. Done. No Node.js, no server process required on the host.

## Notes

- The contact page currently only shows static contact details (email,
  phone, address) — the original Next.js project had an unused Nodemailer
  API route that wasn't even wired to the Contact page, so nothing was lost
  by removing it.
- Fonts (Sora, Inter) are loaded from Google Fonts via a `<link>` tag in
  `index.html` instead of `next/font`.
