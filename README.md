# Mom & Ben → Rome ✈️ — Business Class Award Finder

A small static site that turns two **seats.aero** exports (JFK→FCO and FCO→JFK)
into a vetted shortlist of **business-class round trips** for two, filtered to:

- **JFK ⇄ Rome (FCO)**, business class, **≥ 2 seats** (so the couple books together)
- **≤ 1 stop**, **8–9 day** trip, depart on/after **Oct 8**, home by **Nov 2, 2026**

## What it does that seats.aero doesn't

- **Drops unpriced rows.** Every itinerary showed ≥2 business seats, but only the
  **priced** ones (miles > 0) are reliably bookable. ~599 of ~697 were seats-only ($0).
- **Flags phantoms.** An alliance-consistency check removes awards that *can't be
  ticketed* — e.g. a 75k **Aeroplan** itinerary mixing ITA Airways (SkyTeam) + Swiss
  (Star Alliance). Aeroplan is Star-only, so it isn't real.
- **Surfaces the nonstop Delta One** option (which seats.aero can't price), with the
  flight schedules confirmed real.

## The headline

Cheapest **real, bookable** business award for these exact dates: **579,000 miles for
two** (~289,500 each), Flying Blue via Paris/Amsterdam. Real 90k bargains exist but land
Oct 7–15 — too early for an 8–9 day trip leaving Oct 8+. The way to beat it is the
**nonstop Delta One** (price it on Delta.com / Virgin Atlantic / Flying Blue).

## Files

- `index.html` — the site (open directly, or `python3 serve.py`)
- `data.js` — generated data (round trips, phantoms, Delta availability, funnel)
- `JFK-FCO_outbound.csv`, `FCO-JFK_return.csv` — raw seats.aero exports (nothing removed)

*For planning only — always verify live award availability before booking.*
