# Mom & Ben → Rome ✈️ — Business Class Award Finder

A tiny static site (`index.html` + `data.js`) showing **live-checked business-class
award round trips** for two to Rome (FCO), filtered to what Mom & Ben actually want:

- **2 business seats together**, **lie-flat across the Atlantic both ways**
- **≤ 1 stop**, short layovers, **no Friday/Saturday departures** (Shabbat), no Jewish holidays
- **7–8 nights**, departing early/mid-to-late October 2026
- bookable with **Amex Membership Rewards** or **Chase Ultimate Rewards** (both
  transfer 1:1 to Aeroplan and Flying Blue)

## What makes this different from a raw seats.aero search

Award engines sell a **"business" fare that is secretly economy across the Atlantic**
(the mixed-cabin trick: long leg in economy, short European connector in business).
Every flight on the site was opened on **aircanada.com (Aeroplan)** and the
**transatlantic leg confirmed as true lie-flat business** before being listed.
Flights that turned out to be mixed-cabin were dropped.

## The headline (checked Jun 15, 2026)

- **JFK Oct 12 → Oct 20 (8 nights)** — Swiss A330 via Zürich out, ITA+Swiss A330 via
  Geneva back. **300,000 Aeroplan for two** (~US$444 taxes). The Oct 20 return has only
  **2 seats** — book it first.
- **JFK Oct 13 → Oct 20 (7 nights)** — Lufthansa A340-600 via Frankfurt out, same return.
- **JFK Oct 26 → Nov 3 (8 nights)** — backup with more seats (Swiss out / Air France 777
  back), 330,000 points; the Air France return is from the award database, confirm on airfrance.us.
- **Boston:** no usable business award space for these dates (the cheap awards are
  mixed-cabin economy; true business is 440k+ via Canada). Fly from JFK.

## Files

- `index.html` — the site (JFK / Boston tabs)
- `data.js` — the verified options
- `serve.py` — `python3 serve.py` to preview locally

*Planning aid only — award space changes hourly. Re-verify on aeroplan.com / airfrance.us
right before transferring points (transfers can't be undone).*
