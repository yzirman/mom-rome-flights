// Mom & Ben -> Rome, business class. Every flight below CABIN-VERIFIED live on the
// airline's own booking site (Aeroplan/aircanada.com) on Jun 15, 2026 unless marked
// "verify at booking". Verified = the TRANSATLANTIC leg is true lie-flat business
// (not the mixed-cabin trick where the long leg is secretly economy).
const DATA = {
  checked: "Jun 15, 2026",

  points_note: "You can pool points. Amex Membership Rewards AND Chase Ultimate Rewards each transfer 1:1 to Aeroplan and to Flying Blue (Air France). Move Mom's Chase + Ben's Amex into ONE Aeroplan account so both seats book on the same reservation. 150,000 Aeroplan per person = 300,000 for the two of you (each leg is 75,000).",

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
        fee_cad: 108, status: "verified", lieflat: true,
        flight: "LX 17 + WK 1726", time: "dep 16:15 → +1",
        duration: "10h35 total · 1h10 in Zürich",
        carriers: "Swiss (transatlantic) + Edelweiss",
        aircraft: "Airbus A330-300 across the Atlantic", seats: 3
      },
      ret: {
        program: "Aeroplan", miles: 75000, via: "Geneva", hub: "GVA",
        fee_cad: 197, status: "verified", lieflat: true,
        flight: "AZ 576 + LX 22", time: "dep 09:05 → arr 14:20",
        duration: "11h15 total · 1h in Geneva",
        carriers: "ITA (connector) + Swiss (transatlantic)",
        aircraft: "Airbus A330-300 across the Atlantic", seats: 2
      },
      couple_miles: 300000, couple_fees_cad: 609, couple_fees_usd: 444,
      programs: ["Aeroplan"], both_aeroplan: true,
      warn: "The Oct 20 return has only 2 business seats left — exactly enough for the two of you, but zero margin. Book this one FIRST.",
      amex_note: "150,000 points each → Aeroplan (Amex or Chase). ~CA$609 (≈US$444) in taxes for both."
    },
    {
      origin: "JFK", rank: 2,
      depart: "2026-10-13", depart_dow: "Tue",
      home:   "2026-10-20", home_dow: "Tue",
      nights: 7,
      out: {
        program: "Aeroplan", miles: 75000, via: "Frankfurt", hub: "FRA",
        fee_cad: 143, status: "verified", lieflat: true,
        flight: "LH 401 + LH 230", time: "dep 15:40 → arr 09:05+1",
        duration: "11h25 total · 1h50 in Frankfurt",
        carriers: "Lufthansa (whole way)",
        aircraft: "Airbus A340-600 across the Atlantic", seats: 4
      },
      ret: {
        program: "Aeroplan", miles: 75000, via: "Geneva", hub: "GVA",
        fee_cad: 197, status: "verified", lieflat: true,
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
        fee_cad: 143, status: "verified", lieflat: true,
        flight: "LH 401 + LH 230", time: "dep 15:40 → arr 09:05+1",
        duration: "11h25 total · 1h50 in Frankfurt",
        carriers: "Lufthansa (whole way)",
        aircraft: "Airbus A340-600 across the Atlantic", seats: 6
      },
      ret: {
        program: "Aeroplan", miles: 75000, via: "Geneva", hub: "GVA",
        fee_cad: 197, status: "verified", lieflat: true,
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
        fee_cad: 108, status: "verified", lieflat: true,
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
      couple_miles: 330000, couple_fees_usd: 1145,
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
        fee_cad: 108, status: "verified", lieflat: true,
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
      couple_miles: 446000, couple_fees_usd: 1138,
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
        fee_cad: 108, status: "verified", lieflat: true,
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
      couple_miles: 446000, couple_fees_usd: 1138,
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

  footer: "All JFK flights were opened on aircanada.com (Aeroplan) on Jun 15, 2026 and the transatlantic leg confirmed as lie-flat business. Award space changes hourly — re-check right before you transfer points (transfers can't be undone)."
};
