# Dehradun Guide

A travel guide website for Dehradun, built with Next.js (App Router) and TypeScript.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # run the production build
```

Node.js 18.18 or newer is needed.

## Where things are

| Path | What it holds |
| --- | --- |
| `app/page.tsx` | The page, with all sections in order |
| `app/layout.tsx` | Page title, fonts and the light/dark theme setup |
| `app/globals.css` | All styles and colour tokens |
| `components/` | One file per section (Hero, Places, Radar, Food, Seasons, Plan, Planner and so on) |
| `data/places.ts` | The 12 places. Add or edit places here |
| `data/trips.ts` | Day trips shown on the map (distance, direction, drive time) |
| `data/food.ts` | Dishes in the food section |
| `data/seasons.ts`, `data/climate.ts` | Season text and monthly temperatures |
| `data/plan.ts`, `data/vibes.ts` | The 3-day plan and the one-day planner |
| `data/scenes.ts` | The small SVG illustration used for each place |

## Edit content

Most changes need no code. Open a file in `data/`, change the text or add a new entry in the same shape, and save. To add a new place, copy an entry in `data/places.ts` and pick one of the illustration names from `data/scenes.ts` for its `s` field.

Distances, travel times, temperatures and heights are approximate. Check them before you publish.
