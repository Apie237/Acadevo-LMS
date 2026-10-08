# TopestTech — Public Website (client)

The public website for **TopestTech**, a technology company with an academy in Cameroon.
Built with React, Vite, Tailwind CSS, React Router, Framer Motion, Lucide React and Axios.

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run lint
npm test          # vitest (watch) — use `npm run test:ci` for a single run
```

## Editing content (no code changes needed)

All facts shown on the site live in `src/data/`. Keep them truthful — empty values render a tidy
"coming soon" state instead of fake information.

| File | What it controls |
| --- | --- |
| `src/data/site.js` | Contact email / WhatsApp / location, social links, homepage & academy stats, where "Join the Academy" points, learning-platform URL |
| `src/data/projects.js` | Works / case studies (summary, categories, technologies, features, screenshots, live & GitHub links) |
| `src/data/programs.js` | Academy programs — flip `status` from `"coming-soon"` to `"available"` when a program opens |
| `src/data/report.js` | The 1-Week Learning Session report (preparation, topics, timeline, highlights, photos) |
| `src/data/team.js` | Team members (only add confirmed people) |
| `src/data/testimonials.js` | Real student feedback (empty = placeholder) |
| `src/data/services.js` | Services page |

## Images

Put images in `public/images/` and reference them from the data files with a leading slash:

```
public/images/projects/   -> "/images/projects/eduvest.jpg"
public/images/team/       -> "/images/team/chefor-sylvanus.jpg"
public/images/reports/    -> "/images/reports/session-01.jpg"
public/images/academy/
```

Any image set to `null` (or that fails to load) shows a branded placeholder.

## Routes

`/`, `/about`, `/works`, `/works/:id`, `/academy`, `/academy/programs`, `/academy/programs/:id`,
`/reports`, `/reports/one-week-session`, `/team`, `/services`, `/contact` (accepts `?type=project|academy|partnership|general`),
plus the existing learning-platform routes `/courses`, `/courses/:id`, `/login`, `/register`.

`vercel.json` rewrites every path to `index.html`, so deep links work on Vercel.

## Environment variables

- `VITE_API_BASE_URL` — backend API (defaults to the existing deployed server)
- `VITE_LEARNHUB_URL` — student learning platform URL used after enrolment
