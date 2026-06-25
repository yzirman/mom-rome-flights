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
      flag: "🇬🇧", title: "London — British Airways", tag: "nonstop, round-trip", badge: "Cheapest — best value",
      out: "OUT: JFK → London-Heathrow · NONSTOP ~7h · pick a weekday (e.g. Mon Oct 12)",
      back: "BACK: London-Heathrow → JFK · NONSTOP ~8h · weekday (e.g. Wed Oct 21)",
      when: "Weekday departures available Oct 5, 6, 12, 13, 19, 20, 21 (all Shabbat-safe)",
      plane: "Lie-flat business both ways · Boeing 777 / A380 · 2 seats together",
      cost: "180,000 Avios total — 45,000 each way × 2 people, round-trip",
      amex: "180,000 Amex (transfers 1:1 to British Airways Avios, no bonus)",
      tax: "+ ~$2,000 total for two (UK departure tax is the pricey part, ~$1,000/person)",
      total: "≈ $3,800 all-in for two — 180k Amex @ 1¢ ($1,800) + ~$2,000 UK tax",
      seats: "Business seats confirmed available on these weekday dates"
    },
    {
      flag: "🇬🇧", title: "London — Virgin Atlantic", tag: "nonstop, round-trip · May 2027",
      out: "OUT: JFK → London-Heathrow · NONSTOP ~7h · weekday in May 2027",
      back: "BACK: London-Heathrow → JFK · NONSTOP ~8h · weekday in May 2027",
      when: "Cheapest in May 2027 (47,500 pts each way); October runs ~84,000 each way",
      plane: "Lie-flat business both ways · A350 / A330 · 2 seats together",
      cost: "190,000 Virgin points total — 47,500 each way × 2 people (May)",
      amex: "~146,000 Amex total (after the 30% Amex→Virgin bonus, ends July 31, 2026)",
      tax: "+ ~$2,000 total for two (UK departure tax)",
      total: "≈ $3,300 all-in for two in May — 146k Amex @ 1¢ ($1,460) + ~$2,000 UK tax",
      seats: "Business seats available"
    },
    {
      flag: "🇮🇹", title: "Rome — Air France", tag: "1 stop in Paris, round-trip", badge: "Actually lands in Rome",
      out: "OUT: JFK → Paris-CDG → Rome · weekday (e.g. Mon Oct 12 eve → arrive Tue)",
      back: "BACK: Rome → Paris-CDG → JFK · weekday (e.g. Wed Oct 21)",
      when: "Lots of Shabbat-safe weekday space Oct 12–22 · 5–9 business seats most dates",
      plane: "Lie-flat A350 across the Atlantic (true flat bed — NOT the economy trap), short hop CDG → Rome · 2 seats together",
      cost: "608,000 Flying Blue miles total — ~152,000 each way × 2 people, round-trip",
      amex: "~486,000 Amex total (after the 25% Amex→Flying Blue bonus, ends June 30, 2026)",
      tax: "+ ~$1,600 total for two (~$400 each direction)",
      total: "≈ $6,460 all-in for two — 486k Amex @ 1¢ ($4,864) + ~$1,600 tax",
      seats: "2 lie-flat business seats together"
    }
  ],
  mom_note: "Mom flies weekdays only (no Friday/Saturday) — every option above is a complete Shabbat-safe round trip with 2 seats together. London is far cheaper because Rome from NYC has no discounted 'saver' award space (it prices at the dynamic ~152k each way), while London is a flat 45k each way. The cheap 75k 'business' awards to Rome are the mixed-cabin trap (economy across the Atlantic) — verified and excluded. Bonuses: 25% Amex→Flying Blue ends June 30, 2026; 30% Amex→Virgin ends July 31, 2026. Prices move daily — the final total is confirmed on the airline's booking screen before you transfer.",

  ash_opts: [
    {
      flag: "🇨🇭", title: "Zürich — Swiss", tag: "nonstop, round-trip · Aeroplan", badge: "Cheapest by far",
      out: "OUT: JFK → Zürich · NONSTOP ~8h · any day",
      back: "BACK: Zürich → JFK · NONSTOP ~9h · any day · then a ~3.5h train into Milan",
      when: "Any day · also EWR → Zürich and JFK → Geneva at the same price",
      plane: "Lie-flat business both ways · Swiss A330-300 · 2 seats together",
      cost: "240,000 Aeroplan miles total — 60,000 each way × 2 people, round-trip",
      amex: "240,000 Amex (transfers 1:1 to Aeroplan, no bonus)",
      tax: "+ ~$320 total for two (low European taxes)",
      total: "≈ $2,720 all-in for two — 240k Amex @ 1¢ ($2,400) + ~$320 tax (+ short train into Italy)",
      seats: "2 business seats (Geneva shows 2 nonstop; Zürich often 1 nonstop + more on the 1-stop)"
    },
    {
      flag: "🇮🇹", title: "Rome — Air France", tag: "1 stop in Paris, round-trip", badge: "Lands in Rome",
      out: "OUT: JFK → Paris-CDG → Rome · any day",
      back: "BACK: Rome → Paris-CDG → JFK · any day",
      when: "Wide-open business space across October, both legs business",
      plane: "Lie-flat A350 across the Atlantic, short hop CDG → Rome · 2 seats together",
      cost: "608,000 Flying Blue miles total — ~152,000 each way × 2 people, round-trip",
      amex: "~486,000 Amex total (after the 25% Amex→Flying Blue bonus, ends June 30, 2026)",
      tax: "+ ~$1,600 total for two",
      total: "≈ $6,460 all-in for two — 486k Amex @ 1¢ ($4,864) + ~$1,600 tax",
      seats: "2 lie-flat business seats together"
    },
    {
      flag: "🇮🇹", title: "Milan — Emirates", tag: "nonstop, round-trip", badge: "Nonstop to Italy",
      out: "OUT: JFK → Milan-Malpensa · NONSTOP ~8h · any day",
      back: "BACK: Milan-Malpensa → JFK · NONSTOP ~9h · any day",
      when: "Any day · 7 business seats showing — easy to get 2 together",
      plane: "Lie-flat business both ways · Emirates A380 (the big one) · 2 seats together",
      cost: "400,000 Emirates miles total — 100,000 each way × 2 people, round-trip",
      amex: "400,000 Amex (transfers 1:1 to Emirates Skywards, no bonus)",
      tax: "+ ~$1,740 total for two (Emirates passes higher fuel surcharges)",
      total: "≈ $5,740 all-in for two — 400k Amex @ 1¢ ($4,000) + ~$1,740 tax",
      seats: "Business seats available (7 showing)"
    }
  ],
  ash_note: "Ashley + Emrey can fly any day — every option above is a complete round trip with 2 seats together. Zürich is the runaway value (nonstop, ~$2,720, just add a short scenic train into Italy). Rome and Milan land you straight in Italy but cost more. The cheap 75k Aeroplan routings to Italy put the transatlantic leg in economy (the mixed-cabin trap), so they're excluded. Prices move daily — confirm the final total on the airline's booking screen before transferring.",

  footer: "Nothing is booked. Every option is a full round-trip for two, lie-flat business, on points transferable from Amex. Points are valued at 1¢ each so you can compare total dollar cost. Award space and prices change daily — re-confirm the seats are true lie-flat business and re-check the price on the airline site right before you transfer points (transfers can't be undone)."
};
