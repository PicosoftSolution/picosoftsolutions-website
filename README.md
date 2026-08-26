# PicoSoft Solutions — Website

Marketing website for Pico Soft Solutions, built to match the approved Figma
design exactly (5 pages: Home, Services, Company, Work, Contact).

## Tech stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion (scroll reveal animations)
- React Hook Form (contact form)
- Nodemailer (contact form email delivery)
- Lucide React (icons)
- Deployed on Vercel

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Contact form / email setup

The contact form posts to `app/api/contact/route.ts`, which sends an email
with Nodemailer. Copy `.env.example` to `.env.local` and fill in your SMTP
details:

```bash
cp .env.example .env.local
```

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=you@example.com
SMTP_PASS=your-smtp-password-or-app-password
CONTACT_TO_EMAIL=info@picosoftsolutions.com
```

Works with any SMTP provider (Gmail app password, Resend, SendGrid SMTP,
Zoho, etc.). On Vercel, add the same variables under
Project Settings → Environment Variables.

## Project structure

```
app/
  layout.tsx          Root layout (fonts, Header, Footer)
  page.tsx             Home
  services/page.tsx    Services
  company/page.tsx      Company
  work/page.tsx         Work / case studies
  contact/page.tsx      Contact
  api/contact/route.ts  Nodemailer email endpoint
components/            Header, Footer, PageHero, ContactForm, Reveal, etc.
lib/data.ts             Shared content (services, case studies, testimonials…)
public/logo-mark.png    Brand mark
```

## Deploy

Push to GitHub and import the repo in Vercel, or run:

```bash
npx vercel
```

Remember to add the SMTP environment variables in the Vercel project
settings before the contact form will send email in production.
