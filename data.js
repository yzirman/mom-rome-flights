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

  mom_opts: [
    {
      flag: "🇬🇧", title: "London — British Airways", tag: "nonstop", badge: "Cheapest on points",
      out: "JFK → London Heathrow · nonstop, ~7h · departures throughout the day",
      when: "Weekday dates: Oct 5, 6, 12, 13, 19, 20, 21",
      plane: "Lie-flat business · Boeing 777 / A380",
      cost: "45,000 Avios each way (90,000 round-trip per person)",
      amex: "90,000 Amex per person (1:1, no bonus)",
      tax: "+ ~$700–1,000 per person in UK departure tax",
      seats: "Business seats available"
    },
    {
      flag: "🇬🇧", title: "London — Virgin Atlantic", tag: "nonstop",
      out: "JFK → London Heathrow · nonstop, ~7h",
      when: "Cheapest in May 2027 (47,500 pts each way); ~84,000 in October",
      plane: "Lie-flat business · A350 / A330",
      cost: "47,500–84,000 Virgin points each way",
      amex: "~36,500 Amex each way in May (after the 30% Virgin bonus)",
      tax: "+ ~$700–1,000 per person in UK departure tax",
      seats: "Business seats available"
    },
    {
      flag: "🇮🇹", title: "Rome — Air France", tag: "1 stop in Paris", badge: "Lands in Italy",
      out: "OUT: leaves JFK 6:30 PM (Mon Oct 12) → arrives Rome 11:25 AM (Tue Oct 13)",
      back: "BACK: leaves Rome 10:00 AM (Wed Oct 21) → arrives JFK 3:50 PM",
      plane: "Lie-flat A350 across the Atlantic, short hop Paris → Rome",
      cost: "~465,000 Flying Blue miles, round-trip for two",
      amex: "~372,000 Amex after the 25% bonus",
      tax: "+ ~$821 tax for two",
      seats: "2 lie-flat business seats together"
    },
    {
      flag: "🇮🇹", title: "Rome — KLM", tag: "1 stop in Amsterdam",
      out: "OUT: leaves JFK 4:40 PM (Mon Oct 12) → arrives Rome 9:35 AM (Tue Oct 13)",
      back: "BACK: leaves Rome 10:35 AM (Wed Oct 21) → arrives JFK 5:05 PM",
      plane: "Lie-flat business across the Atlantic · longer layover than Air France",
      cost: "~464,000 Flying Blue miles, round-trip for two",
      amex: "~371,000 Amex after the 25% bonus",
      tax: "+ ~$821 tax for two",
      seats: "2 lie-flat business seats together"
    }
  ],
  mom_note: "Mom flies weekdays only (no Friday/Saturday). The 25% Amex→Flying Blue bonus (Rome) ends June 30, 2026; the 30% Amex→Virgin bonus (London) ends July 31. Award space and prices change daily — the exact departure and final total are confirmed on the airline's booking screen.",

  ash_opts: [
    {
      flag: "🇨🇭", title: "Zürich — Swiss", tag: "nonstop · Aeroplan", badge: "Cheapest",
      out: "JFK → Zürich · nonstop · then a ~3.5h train into Milan",
      when: "Any day · also EWR → Zürich and JFK → Geneva at the same price",
      plane: "Lie-flat business · A330-300",
      cost: "60,000 Aeroplan each way (120,000 round-trip per person)",
      amex: "120,000 Amex per person (1:1, no bonus)",
      tax: "+ low taxes",
      seats: "2–3 business seats"
    },
    {
      flag: "🇮🇹", title: "Milan — Emirates", tag: "nonstop", badge: "Lands in Italy",
      out: "JFK → Milan · nonstop",
      when: "Any day",
      plane: "Lie-flat business · Emirates A380",
      cost: "100,000 Emirates miles each way",
      amex: "100,000 Amex each way (1:1, no bonus)",
      tax: "+ moderate taxes",
      seats: "Business seats available"
    },
    {
      flag: "🇮🇹", title: "Rome — Air France", tag: "1 stop in Paris",
      out: "JFK → Rome via Paris-CDG · any day",
      when: "Business on both legs",
      plane: "Lie-flat A350 across the Atlantic",
      cost: "152,000 Flying Blue each way",
      amex: "~121,600 Amex each way (after the 25% bonus)",
      tax: "+ ~$400 per person tax",
      seats: "2 lie-flat business seats together"
    }
  ],
  ash_note: "Ashley can fly any day. The cheap 75k Aeroplan routings to Italy put the transatlantic leg in economy, so they aren't listed. Award space and prices change daily — confirm the exact times and total on the airline's booking screen.",

  footer: "Nothing is booked. Award space and prices change daily — re-confirm the flight is a true lie-flat business seat and re-check the price on the airline site right before you transfer points (transfers can't be undone)."
};
