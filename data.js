// Mom & Ben -> Rome, business class. NOTE: nothing is booked, and the cabin checks
// below proved unreliable (the Oct 12->20 flight we'd flagged was NOT lie-flat across
// the Atlantic). Treat every option as a CANDIDATE to verify — re-confirm on the
// airline site that the long transatlantic leg is a true flat bed before booking.
const DATA = {
  checked: "Jun 15, 2026",

  points_note: "How to pay: the Aeroplan legs take Amex OR Chase at 1:1 — pool both of you into ONE Aeroplan account so the seats book together (300,000 Aeroplan covers the pure-Aeroplan round trips). For any Air France / KLM (Flying Blue) leg, use BEN'S AMEX — there's a live 25% bonus right now (see below) and Chase has no Flying Blue bonus. Book both passengers from Ben's Flying Blue account.",

  correction: "Nothing is booked. The Oct 12 & Oct 13 outbounds and the Oct 20 return were all checked and were NOT lie-flat across the Atlantic (economy on the long leg) — so all three \"→ Oct 20\" trips have been removed. My earlier cabin check wasn't reliable. The Oct 26 options that remain use the same routing pattern, so don't trust them either until the long transatlantic leg is confirmed as a real flat bed on the airline site.",

  bonus: {
    headline: "25% Amex → Flying Blue transfer bonus — ends June 30, 2026",
    body: "Through June 30, every 1,000 Amex Membership Rewards points = 1,250 Flying Blue (Air France/KLM) miles — so the Flying Blue legs below cost about 20% fewer Amex points. AMEX ONLY (Chase's Flying Blue bonus already expired); automatic, no signup. To use it, transfer Ben's Amex → Flying Blue before June 30 — you can book the Oct/Nov award immediately after. Aeroplan legs are unaffected (pay 1:1 with Chase or Amex)."
  },

  jfk_note: "Removed: the Oct 12, Oct 13 and Oct 14 → Oct 20 options — the Oct 12 and Oct 13 outbounds AND the Oct 20 return all turned out NOT lie-flat (economy on the long transatlantic leg, the mixed-cabin trap). What's left below (Oct 26 departures) is the same Aeroplan-via-European-hub pattern, so treat it with the same suspicion — confirm the long leg is an actual flat bed before trusting any of it.",

  // ----- JFK options (the real ones) -----
  trips: [
    {
      origin: "JFK", rank: 4,
      depart: "2026-10-26", depart_dow: "Mon",
      home:   "2026-11-03", home_dow: "Tue",
      nights: 8,
      out: {
        program: "Aeroplan", miles: 75000, via: "Zürich", hub: "ZRH",
        fee_cad: 108, status: "to-verify", lieflat: true,
        flight: "LX 15 + LX 1736", time: "dep 22:00 → arr 14:00+1",
        duration: "~11h total · 1h40 in Zürich",
        carriers: "Swiss (whole way)",
        aircraft: "Airbus A330-300 across the Atlantic", seats: 7
      },
      ret: {
        program: "Flying Blue", miles: 90000, via: "Paris", hub: "CDG",
        fee_cad: null, fee_usd: 490, status: "to-verify", lieflat: true,
        flight: "AF 1005 + AF 4", time: "via Paris (CDG)",
        duration: "1 stop in Paris",
        carriers: "Air France (whole way)",
        aircraft: "Boeing 777-300ER across the Atlantic", seats: 4
      },
      couple_miles: 330000, couple_fees_usd: 1145, bonus_points: 294000,
      programs: ["Aeroplan", "Flying Blue"], both_aeroplan: false,
      warn: "Backup with more seats (7 out / 4 back) and a later date. Outbound verified live. The Air France return is confirmed in Flying Blue's inventory (4 business seats, 777-300ER across the Atlantic = genuine lie-flat). Air France's own widget blocked an automated screenshot, but you're logged in — search FCO→JFK, Nov 3, 2 passengers, Business, 'Book with Miles' to see it. Heads-up: Air France adds ~US$490/person in cash surcharges.",
      amex_note: "Out: 75,000 each → Aeroplan. Back: 90,000 each → Flying Blue. 330,000 total + ~US$1,145 taxes/surcharges for two."
    },
    {
      origin: "JFK", rank: 5, over400: true,
      depart: "2026-10-26", depart_dow: "Mon",
      home:   "2026-11-02", home_dow: "Mon",
      nights: 7,
      out: {
        program: "Aeroplan", miles: 75000, via: "Zürich", hub: "ZRH",
        fee_cad: 108, status: "to-verify", lieflat: true,
        flight: "LX 15 + LX 1736", time: "dep 22:00 → arr 14:00+1",
        duration: "~11h total · 1h40 in Zürich",
        carriers: "Swiss (whole way)",
        aircraft: "Airbus A330-300 across the Atlantic", seats: 7
      },
      ret: {
        program: "Flying Blue", miles: 148000, via: "Amsterdam", hub: "AMS",
        fee_cad: null, fee_usd: 490, status: "to-verify", lieflat: true,
        flight: "KL 1602 + KL 643", time: "via Amsterdam (AMS)",
        duration: "1 stop in Amsterdam",
        carriers: "KLM (whole way)",
        aircraft: "Boeing 787-10 across the Atlantic", seats: 2
      },
      couple_miles: 446000, couple_fees_usd: 1138, bonus_points: 387000,
      programs: ["Aeroplan", "Flying Blue"], both_aeroplan: false,
      warn: "Pricier fallback to the Oct 26 → Nov 3 option above — only worth it if Nov 3 (cheaper, 330k) is gone or you specifically want a Monday return / 7-night trip. KLM 787 business is genuine lie-flat; confirm the return on klm.us / airfrance.us.",
      amex_note: "Out: 75,000 each → Aeroplan. Back: 148,000 each → Flying Blue. ~446,000 total + ~US$1,138 for two."
    },
    {
      origin: "JFK", rank: 6, over400: true,
      depart: "2026-10-26", depart_dow: "Mon",
      home:   "2026-11-04", home_dow: "Wed",
      nights: 9,
      out: {
        program: "Aeroplan", miles: 75000, via: "Zürich", hub: "ZRH",
        fee_cad: 108, status: "to-verify", lieflat: true,
        flight: "LX 15 + LX 1736", time: "dep 22:00 → arr 14:00+1",
        duration: "~11h total · 1h40 in Zürich",
        carriers: "Swiss (whole way)",
        aircraft: "Airbus A330-300 across the Atlantic", seats: 7
      },
      ret: {
        program: "Flying Blue", miles: 148000, via: "Amsterdam", hub: "AMS",
        fee_cad: null, fee_usd: 490, status: "to-verify", lieflat: true,
        flight: "KL 1600 + KL 641", time: "via Amsterdam (AMS)",
        duration: "1 stop in Amsterdam",
        carriers: "KLM (whole way)",
        aircraft: "Boeing 787-10 across the Atlantic", seats: 2
      },
      couple_miles: 446000, couple_fees_usd: 1138, bonus_points: 387000,
      programs: ["Aeroplan", "Flying Blue"], both_aeroplan: false,
      warn: "Same idea as the Nov 2 option — a 9-night, pricier (~446k) fallback to the cheaper Nov 3 trip. Use it if Nov 3 sells out or you want these exact dates. KLM 787 business is genuine lie-flat; confirm on klm.us.",
      amex_note: "Out: 75,000 each → Aeroplan. Back: 148,000 each → Flying Blue. ~446,000 total + ~US$1,138 for two."
    }
  ],

  // ----- Newark: the honest finding -----
  ewr_info: {
    headline: "Newark doesn't beat JFK for business — but it has a great economy nonstop.",
    points: [
      "Good news: United flies NONSTOP Newark→Rome (~8h15). But the nonstops only release ECONOMY award space — about 40,000 miles each way (Aeroplan or United). No business on the nonstops.",
      "Business award space from Newark is thin and trap-heavy: the cheap 75,000-mile fares are United mixed-cabin (the transatlantic leg, e.g. EWR→Munich, is economy). Verified live on Oct 26.",
      "True lie-flat business exists only via Canada on Air Canada metal at ~478,000 miles — far over budget.",
      "Partner space does flicker in: a Lufthansa 747-8 via Frankfurt at 75,000 showed 2 seats, but it sold within the hour I was checking — too fleeting to plan around.",
      "Bottom line: for business, JFK wins. Newark is only worth it if you'd take the economy nonstop (genuinely nice at ~40k)."
    ]
  },

  // ----- Boston: the honest finding -----
  bos_info: {
    headline: "Boston doesn't have usable business award space for these dates.",
    points: [
      "The cheap 75,000-mile \"business\" awards out of Boston are the mixed-cabin trick — the long transatlantic leg (BOS→Munich, BOS→Zürich) is actually ECONOMY, only the short European connector is business. Verified live on Oct 12 & 13.",
      "The only TRUE lie-flat business from Boston routes through Canada (Toronto/Montreal) on Air Canada metal at 440,000–485,000 miles for one person — far over budget, with 5–12 hour layovers.",
      "Flying Blue (Air France) and Delta show no business award space from Boston in this window either.",
      "Bottom line: fly out of JFK. If you specifically want Boston, the realistic move is a cheap cash hop BOS→JFK and start the award trip from New York."
    ]
  },

  europe_alt: {
    headline: "🇪🇺 FULL sweep — NYC + Boston × Oct 2026 + May 2027 (nonstop = guaranteed lie-flat)",
    points: [
      "✅ LONDON is the ONLY European city with confirmable nonstop lie-flat business on Amex points — from BOTH New York and Boston, BOTH months. Nonstop = no mixed-cabin trap possible.",
      "🇬🇧 From NEW YORK — Mom (weekdays only, no Fri/Sat): BA 777, 45,000 Avios each way (~$996/person UK tax) on Oct 5, 6, 12, 13, 19, 20, 21 — or Virgin A350/A330, 84k in Oct / just 47,500 in May (~$691 tax) on weekday dates. May is the cheaper window.",
      "🇬🇧 From BOSTON — Ashley (any day): BA A380, 45,000 Avios (~$996 tax), or Qatar-Avios A380 88k, or Virgin 100k. Oct + May both wide open.",
      "🇫🇷 PARIS — checked live on Air France / Flying Blue (logged in): nonstop JFK→CDG and BOS→CDG business DOES exist and IS lie-flat (confirmed, nonstop). BUT there is NO saver space — every date in Oct 2026 AND May 2027 prices at the dynamic ceiling: ~182,000 miles each one-way from NYC, ~213,000 from Boston (≈360k–426k per person round-trip). That's ~2.5–3× the ~300k-for-two budget. Lie-flat ✅, but priced out ❌.",
      "🇮🇹 ROME — IS available lie-flat with a stopover on Air France (a stopover is fine per Mom). Checked live & logged in: NYC→Rome connecting business via CDG, ~142,500–152,000 miles + $361 each way — confirmed in BOTH Oct 2026 and May 2027 (e.g. weekday departures Mon Oct 12 / Tue Oct 13 / Wed Oct 14, all Shabbat-safe). Confirmed the transatlantic leg is AF flight 0011 on an Airbus A350-900 (true flat bed) — booked Air France business end-to-end, so it is NOT the Aeroplan mixed-cabin trap; the ocean crossing really is lie-flat, then a short CDG→Rome hop. Cheaper than nonstop Paris. Caveat: still no true saver space — ~152k each way = ~304k per person round-trip = ~608k for two. Real lie-flat Rome option ✅, but ~2× the ~300k-for-two budget. (Aeroplan's cheaper 75k Rome award is the mixed-cabin trap — avoid that one; THIS Air France one is the legit lie-flat path to Rome.)",
      "🇪🇸 MADRID — checked live on Iberia, logged in (the rumored 'best business deal'). Verdict: the cheap-Avios rumor is REAL but it's ECONOMY, not lie-flat. Iberia flies nonstop NYC→Madrid and Boston→Madrid (~7h10, Iberia A330/A350) and economy award space is wide open at just 16,000–19,500 Avios each way (off-peak). BUT business is the catch: checked every nonstop flight from BOTH New York and Boston, in BOTH Oct 2026 and May 2027 — Business = 'not available' on every single one. Premium Economy sometimes opens (~29,500 in May) but never the lie-flat Business cabin. So Madrid = amazing economy deal, no lie-flat. (Business saver can pop up closer to departure — worth a seat alert if you want Madrid specifically.)",
      "🇪🇸 Barcelona · 🇵🇹 Lisbon: Iberia has no nonstop US→Barcelona (routes via Madrid, where business saver is unavailable anyway). Lisbon has no nonstop award space found. Both dead for lie-flat on Amex points in these windows.",
      "✈️ Milan (for Ashley): Emirates A380 nonstop from JFK, 100,000 each way, lie-flat — Oct 12, 15, 25, 26, 27 · May 4, 5, 9, 10.",
      "BOTTOM LINE: two real lie-flat paths on Amex points — (1) LONDON, cheapest by far (45k Avios each way, nonstop, ~$700–1,000/person UK tax); (2) ROME via Air France with a CDG stopover, confirmed lie-flat A350 across the Atlantic, but ~152k miles each way (~608k for two round-trip) — over the ~300k-for-two budget. Paris is also lie-flat but pricier (182k). Madrid is now checked & ruled out for lie-flat (Iberia has cheap ECONOMY Avios but zero business saver from NYC or Boston, either month). (The old Aeroplan 75k Rome cards below are the mixed-cabin trap — do NOT book those; the Air France Rome routing above is the legit one.)"
    ]
  },

  rome_af: {
    headline: "🇮🇹 Rome on Air France — the real lie-flat options (checked live, logged in)",
    sub: "NYC → Rome (FCO), business, one connection through Paris-CDG. The long transatlantic leg is an Air France flat bed; the second leg is a short hop. ✅ Re-run live for 2 PASSENGERS — 2 business seats together ARE available. Prices below are PER PERSON, one-way. Taxes ~$361/person ($722.80 for two). Award space changes hourly — re-check right before transferring points.",
    note: "✅ 2 SEATS CONFIRMED. Searching for 2 passengers, Air France returns 2 business seats together on the AF 18:30 flight at the lowest fare. The cheapest day is Mon Oct 12 = 285,000 miles for two (142,500 each); Sat Oct 10 / Sun Oct 11 / Tue Oct 13 = 304,000 for two (152,000 each). All Shabbat-safe weekdays plus the weekend dates. Heads-up: this is ONE-WAY — a round trip for two is roughly 570,000–608,000 miles + ~$1,445 taxes, about 2× the ~300k-for-two budget. Worth it for guaranteed Italy lie-flat, but it is the pricey option vs. London.",
    flights: [
      { air: "Air France", route: "JFK 18:30 → CDG → FCO 11:25 +1", dur: "10h55", plane: "AF flat-bed widebody across the Atlantic — LOWEST 2-seat fare", miles: "152,000", seat: "2 seats ✓" },
      { air: "Air France", route: "JFK 01:00 → CDG → FCO 17:30", dur: "10h30", plane: "Airbus A350-900 (confirmed flat bed)", miles: "232,000", seat: "3 seats ✓" },
      { air: "Air France", route: "JFK 21:30 → CDG → FCO 14:25 +1", dur: "10h55", plane: "AF flat-bed widebody", miles: "232,000", seat: "2+ seats ✓" },
      { air: "KLM", route: "JFK 16:40 → AMS → FCO 09:35 +1", dur: "10h55", plane: "KLM widebody (777/787)", miles: "364,000", seat: "2 seats ✓" }
    ],
    calendar: "Lowest fare PER PERSON, 2-passenger search: Sat Oct 10 = 152k · Sun Oct 11 = 152k · Mon Oct 12 = 142.5k (cheapest) · Tue Oct 13 = 152k · Wed Oct 14 = 152k · Thu Oct 15 = 232k. (Doubled, that's the per-two total: Mon Oct 12 = 285,000 for two; the rest 304,000 for two.) May 2027 is similar.",
    bottom: "BOTTOM LINE: Two business seats together to Rome ARE bookable — best is Mon Oct 12 at 142,500 each (285,000 for two) one-way, on a confirmed Air France flat bed across the Atlantic. Round trip for two ≈ 570k–608k miles + ~$1,445 tax. It's the real lie-flat Italy option; the trade-off is points cost vs. London's 45k Avios."
  },

  footer: "Nothing is booked. The lie-flat cabin checks here proved unreliable — re-confirm the transatlantic leg is a true flat bed on the airline site before booking. Award space changes hourly; re-check right before you transfer points (transfers can't be undone).",

  ashley: {
    headline: "Ashley + Emrey → Rome / Milan",
    sub: "2 in lie-flat business · flexible dates — pick from the map below",
    play: "The play: Amex Membership Rewards → Aeroplan = 75,000 miles each way in lie-flat business (Lufthansa / Swiss widebody via Frankfurt, Zürich or Munich). ≈ 300,000 Amex points for the two of you + ~CA$530–700 taxes. Delta One is ruled out on points — ~513,000 SkyMiles round-trip per person (~1M+ for two), and the Delta One \"sale\" is summer-only (Jun–Aug).",
    trips: [
      {tag: "★ Most seats", tagcls: "best", star: true, route: "JFK ⇄ Rome", depart: "Mon Oct 26", home: "Mon Nov 2", nights: 7,
       out: "Swiss A330 via Zürich · 7 seats", ret: "ITA + Swiss via Geneva · 5 seats", pts: "300,000 · Amex → Aeroplan", cash: "~CA$600 / two"},
      {tag: "Boston — home", tagcls: "alt", route: "BOS ⇄ Rome", depart: "Tue Oct 13", home: "Tue Oct 20", nights: 7,
       out: "Lufthansa 747 via Frankfurt · 3 seats", ret: "ITA + Swiss via Zürich · 2 seats", pts: "300,000 · Amex → Aeroplan", cash: "~CA$600 / two"},
      {tag: "Early Oct", tagcls: "alt", route: "JFK ⇄ Rome", depart: "Tue Oct 13", home: "Wed Oct 21", nights: 8,
       out: "Lufthansa A340 via Frankfurt · 4 seats", ret: "Swiss via Zürich · 2 seats", pts: "300,000 · Amex → Aeroplan", cash: "~CA$600 / two"},
      {tag: "Mid Oct", tagcls: "alt", route: "JFK ⇄ Rome", depart: "Mon Oct 19", home: "Tue Oct 27", nights: 8,
       out: "Swiss via Zürich · 4 seats", ret: "ITA + Swiss via Geneva · 3 seats", pts: "300,000 · Amex → Aeroplan", cash: "~CA$600 / two"},
      {tag: "Chicago", tagcls: "alt", route: "ORD ⇄ Rome", depart: "Mon Oct 26", home: "Tue Nov 3", nights: 8,
       out: "Lufthansa via Munich · 7 seats", ret: "ITA + Lufthansa via Frankfurt · 9 seats", pts: "300,000 · Amex → Aeroplan", cash: "~CA$600 / two"},
      {tag: "✨ A380 splurge", tagcls: "over", route: "JFK ⇄ Milan", depart: "Thu Oct 15", home: "Thu Oct 22", nights: 7,
       out: "Emirates A380 nonstop · 7 seats", ret: "Emirates A380 nonstop · 7 seats", pts: "400,000 · Amex → Emirates", cash: "~US$1,700 / two"}
    ],
    out_label: "Outbound · US → Rome (FCO) / Milan (MXP)",
    out: [
      {w: "Oct 4–6", a: "EWR, IAD, JFK"},
      {w: "Oct 11–14", a: "BOS, JFK, EWR, IAD"},
      {w: "Oct 18–21", a: "BOS, JFK, EWR, IAD, ORD"},
      {w: "Oct 25–28", a: "ATL, JFK, EWR, IAD, ORD"},
      {w: "Nov 1–4", a: "EWR, ORD"}
    ],
    ret_label: "Return · Rome / Milan → US",
    ret: [
      {w: "Oct 1–8", a: "JFK, IAD"},
      {w: "Oct 12–15", a: "BOS, JFK, EWR, IAD, ORD"},
      {w: "Oct 20–22", a: "BOS, JFK, EWR, IAD, ORD"},
      {w: "Oct 27–29", a: "ATL, JFK, EWR, IAD"},
      {w: "Nov 2–4", a: "BOS, JFK, EWR, IAD, ORD, ATL"}
    ],
    gateways: "Gateways: JFK, EWR, Boston, Washington (IAD), Chicago (ORD), Atlanta — Lufthansa / Swiss widebody via Frankfurt, Zürich or Munich. Pick (almost) any outbound + any return ~7–12 days later; both legs at 75k.",
    extras: [
      "✈️ Emirates A380, JFK → Milan nonstop — 100k business (Amex → Emirates), Oct 15/16. A spectacular plane if he wants something special.",
      "🇫🇷 Flying Blue via Paris — 90k, and the 25% Amex bonus (ends June 30) drops it to ~72k effective.",
      "🚫 Detroit doesn't work on points (Delta hub, no Star-partner space) — position to Chicago (ORD) or JFK and start the award there."
    ],
    caveat: "Same trap as Mom's trip: a cheap \"business\" fare can hide an economy transatlantic leg. The Lufthansa / Swiss widebody routings above are the reliably-clean ones — confirm the long leg is lie-flat at booking. Award space moves daily; this map is as of Jun 15."
  }
};
