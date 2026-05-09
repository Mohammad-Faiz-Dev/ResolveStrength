# ResolveStrength

A science-backed strength & resilience platform built with **Next.js 14** and **Supabase**.

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Database & Auth | Supabase |
| Styling | CSS Modules (inline `<style>` in components) |
| Fonts | Playfair Display + DM Sans (Google Fonts) |

---

## Project Structure

```
resolvestrength/
├── app/
│   ├── layout.js                  # Root layout (Navbar injected here)
│   ├── page.js                    # Homepage (HeroSection + ArticleSection)
│   ├── globals.css                # Global design system & CSS variables
│   └── about/
│       ├── layout.js
│       ├── contact-us/
│       │   ├── email/page.js
│       │   ├── contact-form/page.js
│       │   └── socials/page.js
│       ├── company/
│       │   ├── how-it-works/page.js
│       │   ├── our-mission/page.js
│       │   └── disclosure/page.js
│       └── legal/
│           ├── cookies-policy/page.js
│           ├── privacy-policy/page.js
│           └── terms-and-conditions/page.js
├── components/
│   ├── Navbar.jsx                 # Sticky nav with hover dropdown for About
│   ├── HeroSection.jsx            # Login/Signup card + hero copy
│   ├── ArticleSection.jsx         # Article teasers on homepage
│   └── SubPage.jsx                # Shared layout for all About sub-pages
└── lib/
    └── supabase.js                # Supabase client
```

---

## Getting Started

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd resolvestrength
npm install
```

### 2. Set Up Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Copy your Project URL and anon key from **Project Settings → API**
3. Create `.env.local` from the example:

```bash
cp .env.local.example .env.local
```

4. Fill in your values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Wiring Auth (Next Steps)

The auth UI is built. To activate it:

1. Enable **Email/Password** provider in Supabase Dashboard → Auth → Providers
2. Enable **Google OAuth** — add your Google Client ID and Secret
3. In `HeroSection.jsx`, connect `handleSubmit` and `handleGoogle` to `supabase.auth.signInWithPassword()`, `supabase.auth.signUp()`, and `supabase.auth.signInWithOAuth({ provider: 'google' })`

```js
// Sign in
const { data, error } = await supabase.auth.signInWithPassword({ email, password });

// Sign up
const { data, error } = await supabase.auth.signUp({ email, password });

// Google OAuth
await supabase.auth.signInWithOAuth({ provider: 'google' });
```

---

## Design System

Colors and typography are defined in `app/globals.css` as CSS variables.

| Variable | Use |
|---|---|
| `--accent-gold` | Primary accent (gold) |
| `--accent-green-bright` | Secondary accent |
| `--bg-deep` | Page background |
| `--bg-card` | Card/surface background |
| `--text-primary` | Main text |
| `--text-secondary` | Supporting text |
| `--font-display` | Playfair Display — headings |
| `--font-body` | DM Sans — body copy |

https://fit-by-routine-udo6.vercel.app/
