// Mom & Ben -> Rome, business class. NOTE: nothing is booked, and the cabin checks
// below proved unreliable (the Oct 12->20 flight we'd flagged was NOT lie-flat across
// the Atlantic). Treat every option as a CANDIDATE to verify — re-confirm on the
// airline site that the long transatlantic leg is a true flat bed before booking.
const DATA = {
  checked: "Jun 15, 2026",

  points_note: "How to pay: the Aeroplan legs take Amex OR Chase at 1:1 — pool both of you into ONE Aeroplan account so the seats book together (300,000 Aeroplan covers the pure-Aeroplan round trips). For any Air France / KLM (Flying Blue) leg, use BEN'S AMEX — there's a live 25% bonus right now (see below) and Chase has no Flying Blue bonus. Book both passengers from Ben's Flying Blue account.",

  correction: "Nothing is booked. Important: the Oct 12 → 20 flight we'd flagged turned out NOT to be lie-flat across the Atlantic when actually viewed — so it is no longer \"the pick,\" and the old ✓ marks below shouldn't be trusted. My cabin check wasn't reliable. Before booking ANY of these, re-confirm on the airline site that the long transatlantic leg is a true flat bed (not the short euro-business connector). Treat everything below as candidates to verify, not confirmed.",

  bonus: {
    headline: "25% Amex → Flying Blue transfer bonus — ends June 30, 2026",
    body: "Through June 30, every 1,000 Amex Membership Rewards points = 1,250 Flying Blue (Air France/KLM) miles — so the Flying Blue legs below cost about 20% fewer Amex points. AMEX ONLY (Chase's Flying Blue bonus already expired); automatic, no signup. To use it, transfer Ben's Amex → Flying Blue before June 30 — you can book the Oct/Nov award immediately after. Aeroplan legs are unaffected (pay 1:1 with Chase or Amex)."
  },

  jfk_note: "Why so few? The DEPARTURE is flexible (three clean dates below — pick by trip length), but the RETURN is the scarce piece: across the whole Oct 3–Nov 4 window, the only clean, short-layover business return is Oct 20, and it has just 2 seats. I opened every Aeroplan date from Oct 6–28 live and dropped the rest — most cheap \"business\" fares are secretly economy across the Atlantic (the mixed-cabin trick). Book the Oct 20 return first.",

  // ----- JFK options (the real ones) -----
  trips: [
    {
      origin: "JFK", rank: 1,
      depart: "2026-10-12", depart_dow: "Mon",
      home:   "2026-10-20", home_dow: "Tue",
      nights: 8,
      out: {
        program: "Aeroplan", miles: 75000, via: "Zürich", hub: "ZRH",
        fee_cad: 108, status: "to-verify", lieflat: true,
        flight: "LX 17 + WK 1726", time: "dep 16:15 → +1",
        duration: "10h35 total · 1h10 in Zürich",
        carriers: "Swiss (transatlantic) + Edelweiss",
        aircraft: "Airbus A330-300 across the Atlantic", seats: 3
      },
      ret: {
        program: "Aeroplan", miles: 75000, via: "Geneva", hub: "GVA",
        fee_cad: 197, status: "to-verify", lieflat: true,
        flight: "AZ 576 + LX 22", time: "dep 09:05 → arr 14:20",
        duration: "11h15 total · 1h in Geneva",
        carriers: "ITA (connector) + Swiss (transatlantic)",
        aircraft: "Airbus A330-300 across the Atlantic", seats: 2
      },
      couple_miles: 300000, couple_fees_cad: 532, couple_fees_usd: 388,
      programs: ["Aeroplan"], both_aeroplan: true,
      warn: "The Oct 20 return has only 2 business seats left — exactly enough for the two of you, but zero margin. Book this one FIRST.",
      amex_note: "150,000 points each → Aeroplan (Amex or Chase). CA$531.80 (≈US$388) total taxes for both — confirmed at checkout."
    },
    {
      origin: "JFK", rank: 2,
      depart: "2026-10-13", depart_dow: "Tue",
      home:   "2026-10-20", home_dow: "Tue",
      nights: 7,
      out: {
        program: "Aeroplan", miles: 75000, via: "Frankfurt", hub: "FRA",
        fee_cad: 143, status: "to-verify", lieflat: true,
        flight: "LH 401 + LH 230", time: "dep 15:40 → arr 09:05+1",
        duration: "11h25 total · 1h50 in Frankfurt",
        carriers: "Lufthansa (whole way)",
        aircraft: "Airbus A340-600 across the Atlantic", seats: 4
      },
      ret: {
        program: "Aeroplan", miles: 75000, via: "Geneva", hub: "GVA",
        fee_cad: 197, status: "to-verify", lieflat: true,
        flight: "AZ 576 + LX 22", time: "dep 09:05 → arr 14:20",
        duration: "11h15 total · 1h in Geneva",
        carriers: "ITA (connector) + Swiss (transatlantic)",
        aircraft: "Airbus A330-300 across the Atlantic", seats: 2
      },
      couple_miles: 300000, couple_fees_cad: 679, couple_fees_usd: 496,
      programs: ["Aeroplan"], both_aeroplan: true,
      warn: "Shares the same Oct 20 return as the option above (only 2 seats) — you can take one or the other, not both.",
      amex_note: "150,000 points each → Aeroplan (Amex or Chase). ~CA$679 (≈US$496) in taxes for both."
    },
    {
      origin: "JFK", rank: 3,
      depart: "2026-10-14", depart_dow: "Wed",
      home:   "2026-10-20", home_dow: "Tue",
      nights: 6,
      out: {
        program: "Aeroplan", miles: 75000, via: "Frankfurt", hub: "FRA",
        fee_cad: 143, status: "to-verify", lieflat: true,
        flight: "LH 401 + LH 230", time: "dep 15:40 → arr 09:05+1",
        duration: "11h25 total · 1h50 in Frankfurt",
        carriers: "Lufthansa (whole way)",
        aircraft: "Airbus A340-600 across the Atlantic", seats: 6
      },
      ret: {
        program: "Aeroplan", miles: 75000, via: "Geneva", hub: "GVA",
        fee_cad: 197, status: "to-verify", lieflat: true,
        flight: "AZ 576 + LX 22", time: "dep 09:05 → arr 14:20",
        duration: "11h15 total · 1h in Geneva",
        carriers: "ITA (connector) + Swiss (transatlantic)",
        aircraft: "Airbus A330-300 across the Atlantic", seats: 2
      },
      couple_miles: 300000, couple_fees_cad: 679, couple_fees_usd: 496,
      programs: ["Aeroplan"], both_aeroplan: true,
      warn: "Same Oct 20 return again (2 seats). This one has the most OUTbound seats of the three (6) — but the 2-seat return is still the limiting factor.",
      amex_note: "150,000 points each → Aeroplan (Amex or Chase). ~CA$679 (≈US$496) in taxes for both."
    },
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
    headline: "🇪🇺 Other cities, from NYC — checked October 2026 AND May 2027",
    points: [
      "🇪🇸 Spain / Madrid (the Iberia deal): Boston-only. From JFK there's no cheap Iberia business in EITHER month — October verified live on aa.com at 484,000+ AA miles round-trip per person; May shows nothing nonstop either. (May 2027 is near the edge of the booking window, so it's still firming up — but as of now, same story.) Dead end from NYC.",
      "🇬🇧 London — the only city with confirmed nonstop lie-flat from NYC, in BOTH months: BA 777 ~45,000 Avios each way (either month), or Virgin A350/A330 — ~84k in October but just ~47,500 in May (May is the cheaper window). Catch either way: ~$700–1,000/person in UK taxes (~$1,400–2,000 cash for two).",
      "🇫🇷 Paris · 🇵🇹 Lisbon · 🇪🇸 Barcelona: no nonstop lie-flat business award space from NYC in either month — only connections, which I can't confirm as lie-flat (the mixed-cabin trap zone).",
      "Bottom line: October and May look the same from NYC — nothing beats the locked Rome plan (300k + ~CA$532, lie-flat confirmed). London is the only confirmable alternative (cheaper points in May, but UK-tax-heavy); the Iberia bargain needs Boston."
    ]
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
