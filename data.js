const DATA = {
 "generated": "2026-06-10 evening \u2014 cabin-verified per segment on aircanada.com \u00b7 long layovers excluded",
 "trip": {
  "travelers": "Mom &amp; Ben",
  "origin": "JFK",
  "dest": "Rome (FCO)",
  "pax": 2,
  "cabin": "Business",
  "window": "Oct 5 \u2013 Nov 2, 2026",
  "home_by": "Nov 2, 2026",
  "nights": "7\u201310 days"
 },
 "goal": 400000,
 "cap": 450000,
 "cheapest": 300000,
 "fx_note": "CAD\u2192USD at 0.73",
 "verified_summary": "Every Aeroplan option was opened on aircanada.com (signed in) and its per-segment cabin checked. Mixed-cabin fares (transatlantic leg in ECONOMY) and anything with a long layover (>4h) are excluded. Every flight below is 100% business with a lie-flat ocean crossing and a short connection (max 2h25m).",
 "note_volatile": "Seat counts were live the evening of Jun 10, 2026 and change constantly. Re-check the cabin ('Mixed cabin' warning) on aircanada.com right before transferring Amex points \u2014 transfers are instant and non-reversible.",
 "traps": [
  {
   "date": "Oct 12 return",
   "flight": "09:05 FCO\u2192GVA\u2192JFK (showed 7 seats)",
   "pct": "10%",
   "why": "GVA\u2192JFK transatlantic in ECONOMY"
  },
  {
   "date": "Oct 12 return",
   "flight": "15:35 FCO\u2192FRA\u2192JFK (ITA+Singapore)",
   "pct": "13%",
   "why": "FRA\u2192JFK transatlantic in ECONOMY"
  },
  {
   "date": "Oct 12 return",
   "flight": "16:45 FCO\u2192GVA\u2192JFK (true business, 4 seats)",
   "pct": "100%",
   "why": "EXCLUDED: 17h25m overnight layover in Geneva"
  },
  {
   "date": "Oct 13 return",
   "flight": "08:45 FCO\u2192FRA\u2192JFK",
   "pct": "~12%",
   "why": "FRA\u2192JFK in ECONOMY"
  },
  {
   "date": "Oct 13 return",
   "flight": "16:40 FCO\u2192ZRH\u2192JFK (7 seats)",
   "pct": "10%",
   "why": "ZRH\u2192JFK in ECONOMY"
  },
  {
   "date": "Oct 13 return",
   "flight": "16:45 FCO\u2192GVA\u2192JFK",
   "pct": "~10%",
   "why": "GVA\u2192JFK in ECONOMY + overnight layover"
  },
  {
   "date": "Oct 20 return",
   "flight": "08:30 FCO\u2192ZRH\u2192JFK (6 seats)",
   "pct": "~12%",
   "why": "ZRH\u2192JFK in ECONOMY"
  },
  {
   "date": "Oct 20 return",
   "flight": "16:40 FCO\u2192ZRH\u2192JFK (8 seats)",
   "pct": "10%",
   "why": "ZRH\u2192JFK in ECONOMY"
  },
  {
   "date": "Oct 20 return",
   "flight": "16:45 FCO\u2192GVA\u2192JFK (7 seats)",
   "pct": "~10%",
   "why": "GVA\u2192JFK in ECONOMY + overnight layover"
  },
  {
   "date": "Oct 5 outbound",
   "flight": "21:50 JFK\u2192FRA\u2192FCO",
   "pct": "~40%",
   "why": "JFK\u2192FRA transatlantic in ECONOMY"
  },
  {
   "date": "Oct 5 outbound",
   "flight": "19:25 via GVA (9h50m layover variant)",
   "pct": "100%",
   "why": "EXCLUDED: 9h50m layover"
  },
  {
   "date": "Oct 6 outbound",
   "flight": "19:25 JFK\u2192GVA\u2192FCO",
   "pct": "~10%",
   "why": "JFK\u2192GVA in ECONOMY"
  },
  {
   "date": "Oct 7 outbound",
   "flight": "20:55 JFK\u2192FRA\u2192FCO (Singapore Airlines leg)",
   "pct": "13%",
   "why": "SQ JFK\u2192FRA in ECONOMY"
  },
  {
   "date": "Oct 7 outbound",
   "flight": "19:25 JFK\u2192GVA\u2192FCO (showed 3 seats)",
   "pct": "~10%",
   "why": "JFK\u2192GVA in ECONOMY"
  }
 ],
 "delta_nonstop": {
  "program": "Delta / Virgin Atlantic (Amex)",
  "aircraft": "Airbus A330-900neo",
  "lieflat": true,
  "nonstop": true,
  "note": "Only true NONSTOP option, but priced dynamically ~280k+/person each way via Amex partners \u2014 over the 450k cap. Consider only if avoiding the connection beats the miles cost."
 },
 "trips": [
  {
   "depart": "2026-10-05",
   "depart_dow": "Mon",
   "home": "2026-10-13",
   "home_dow": "Tue",
   "nights": 8,
   "out": {
    "program": "Aeroplan",
    "code": "AC",
    "miles": 75000,
    "via": "Geneva",
    "longhaul": "Swiss A330-300",
    "lieflat": true,
    "connector": "ITA A320neo",
    "fees": 92.64,
    "fee_display": "CA$126.90 (\u2248$93 USD)",
    "verified": {
     "status": "confirmed",
     "when": "2026-06-10 evening",
     "seats": 2,
     "flight": "19:25 JFK\u2192GVA\u2192FCO 13:05 (+1)",
     "duration": "11h40m \u00b7 2h20m connection",
     "carriers": "Swiss A330-300 (lie-flat) + ITA A320neo",
     "fee_cad": 126.9,
     "cabin": "100% business \u2014 cabin-verified"
    }
   },
   "ret": {
    "program": "Aeroplan",
    "code": "AC",
    "miles": 75000,
    "via": "Geneva",
    "longhaul": "Swiss A330-300",
    "lieflat": true,
    "connector": "ITA A320neo",
    "fees": 143.81,
    "fee_display": "CA$197.00 (\u2248$144 USD)",
    "verified": {
     "status": "confirmed",
     "when": "2026-06-10 evening",
     "seats": 4,
     "flight": "09:05 FCO\u2192GVA\u2192JFK 14:20 same day",
     "duration": "11h15m \u00b7 1h connection",
     "carriers": "ITA A320neo + Swiss A330-300 (lie-flat)",
     "fee_cad": 197.0,
     "cabin": "100% business \u2014 cabin-verified"
    }
   },
   "couple_miles": 300000,
   "couple_fees": 473,
   "fees_exact": "CA$647.80 total (\u2248$473 USD)",
   "programs": [
    "Aeroplan"
   ],
   "both_aeroplan": true,
   "fully_verified": true,
   "amex_note": "Transfer 300,000 Amex MR \u2192 Aeroplan (1:1, instant)",
   "rank": 1,
   "under_goal": true
  },
  {
   "depart": "2026-10-06",
   "depart_dow": "Tue",
   "home": "2026-10-13",
   "home_dow": "Tue",
   "nights": 7,
   "out": {
    "program": "Aeroplan",
    "code": "AC",
    "miles": 75000,
    "via": "Frankfurt",
    "longhaul": "Lufthansa widebody",
    "lieflat": true,
    "connector": "Lufthansa A320",
    "fees": 104.39,
    "fee_display": "CA$143.00 (\u2248$104 USD)",
    "verified": {
     "status": "confirmed",
     "when": "2026-06-10 evening",
     "seats": 6,
     "flight": "15:40 JFK\u2192FRA\u2192FCO 09:05 (+1)",
     "duration": "11h25m \u00b7 1h50m connection",
     "carriers": "Lufthansa widebody (lie-flat) both legs",
     "fee_cad": 143.0,
     "cabin": "100% business \u2014 cabin-verified"
    }
   },
   "ret": {
    "program": "Aeroplan",
    "code": "AC",
    "miles": 75000,
    "via": "Geneva",
    "longhaul": "Swiss A330-300",
    "lieflat": true,
    "connector": "ITA A320neo",
    "fees": 143.81,
    "fee_display": "CA$197.00 (\u2248$144 USD)",
    "verified": {
     "status": "confirmed",
     "when": "2026-06-10 evening",
     "seats": 4,
     "flight": "09:05 FCO\u2192GVA\u2192JFK 14:20 same day",
     "duration": "11h15m \u00b7 1h connection",
     "carriers": "ITA A320neo + Swiss A330-300 (lie-flat)",
     "fee_cad": 197.0,
     "cabin": "100% business \u2014 cabin-verified"
    }
   },
   "couple_miles": 300000,
   "couple_fees": 496,
   "fees_exact": "CA$680.00 total (\u2248$496 USD)",
   "programs": [
    "Aeroplan"
   ],
   "both_aeroplan": true,
   "fully_verified": true,
   "amex_note": "Transfer 300,000 Amex MR \u2192 Aeroplan (1:1, instant)",
   "rank": 2,
   "under_goal": true
  },
  {
   "depart": "2026-10-05",
   "depart_dow": "Mon",
   "home": "2026-10-14",
   "home_dow": "Wed",
   "nights": 9,
   "out": {
    "program": "Aeroplan",
    "code": "AC",
    "miles": 75000,
    "via": "Geneva",
    "longhaul": "Swiss A330-300",
    "lieflat": true,
    "connector": "ITA A320neo",
    "fees": 92.64,
    "fee_display": "CA$126.90 (\u2248$93 USD)",
    "verified": {
     "status": "confirmed",
     "when": "2026-06-10 evening",
     "seats": 2,
     "flight": "19:25 JFK\u2192GVA\u2192FCO 13:05 (+1)",
     "duration": "11h40m \u00b7 2h20m connection",
     "carriers": "Swiss A330-300 (lie-flat) + ITA A320neo",
     "fee_cad": 126.9,
     "cabin": "100% business \u2014 cabin-verified"
    }
   },
   "ret": {
    "program": "Flying Blue",
    "code": "FB",
    "miles": 90000,
    "via": "Paris CDG",
    "longhaul": "Air France 777-300ER / A350",
    "lieflat": true,
    "connector": "A320 / A220",
    "fees": 455.53,
    "fee_display": "$455.53 USD (exact, Flying Blue)",
    "verified": {
     "status": "priced",
     "note": "Exact tax from Flying Blue (AF1005 + AF4 via CDG); normal 1\u20133h CDG connection. Cabin + space: confirm on airfrance.us.",
     "routing": "AF1005 + AF4 via CDG"
    }
   },
   "couple_miles": 330000,
   "couple_fees": 1096,
   "fees_exact": "CA$126.90\u00d72 + $455.53\u00d72 USD (\u2248$1096 USD total)",
   "programs": [
    "Aeroplan",
    "Flying Blue"
   ],
   "both_aeroplan": false,
   "fully_verified": false,
   "amex_note": "150,000 \u2192 Aeroplan + 180,000 \u2192 Flying Blue",
   "rank": 3,
   "under_goal": true
  },
  {
   "depart": "2026-10-05",
   "depart_dow": "Mon",
   "home": "2026-10-15",
   "home_dow": "Thu",
   "nights": 10,
   "out": {
    "program": "Aeroplan",
    "code": "AC",
    "miles": 75000,
    "via": "Geneva",
    "longhaul": "Swiss A330-300",
    "lieflat": true,
    "connector": "ITA A320neo",
    "fees": 92.64,
    "fee_display": "CA$126.90 (\u2248$93 USD)",
    "verified": {
     "status": "confirmed",
     "when": "2026-06-10 evening",
     "seats": 2,
     "flight": "19:25 JFK\u2192GVA\u2192FCO 13:05 (+1)",
     "duration": "11h40m \u00b7 2h20m connection",
     "carriers": "Swiss A330-300 (lie-flat) + ITA A320neo",
     "fee_cad": 126.9,
     "cabin": "100% business \u2014 cabin-verified"
    }
   },
   "ret": {
    "program": "Flying Blue",
    "code": "FB",
    "miles": 90000,
    "via": "Paris CDG",
    "longhaul": "Air France 777-300ER / A350",
    "lieflat": true,
    "connector": "A320 / A220",
    "fees": 455.33,
    "fee_display": "$455.33 USD (exact, Flying Blue)",
    "verified": {
     "status": "priced",
     "note": "Exact tax from Flying Blue (AF1005 + AF4 via CDG); normal 1\u20133h CDG connection. Cabin + space: confirm on airfrance.us.",
     "routing": "AF1005 + AF4 via CDG"
    }
   },
   "couple_miles": 330000,
   "couple_fees": 1096,
   "fees_exact": "CA$126.90\u00d72 + $455.33\u00d72 USD (\u2248$1096 USD total)",
   "programs": [
    "Aeroplan",
    "Flying Blue"
   ],
   "both_aeroplan": false,
   "fully_verified": false,
   "amex_note": "150,000 \u2192 Aeroplan + 180,000 \u2192 Flying Blue",
   "rank": 4,
   "under_goal": true
  },
  {
   "depart": "2026-10-06",
   "depart_dow": "Tue",
   "home": "2026-10-14",
   "home_dow": "Wed",
   "nights": 8,
   "out": {
    "program": "Aeroplan",
    "code": "AC",
    "miles": 75000,
    "via": "Frankfurt",
    "longhaul": "Lufthansa widebody",
    "lieflat": true,
    "connector": "Lufthansa A320",
    "fees": 104.39,
    "fee_display": "CA$143.00 (\u2248$104 USD)",
    "verified": {
     "status": "confirmed",
     "when": "2026-06-10 evening",
     "seats": 6,
     "flight": "15:40 JFK\u2192FRA\u2192FCO 09:05 (+1)",
     "duration": "11h25m \u00b7 1h50m connection",
     "carriers": "Lufthansa widebody (lie-flat) both legs",
     "fee_cad": 143.0,
     "cabin": "100% business \u2014 cabin-verified"
    }
   },
   "ret": {
    "program": "Flying Blue",
    "code": "FB",
    "miles": 90000,
    "via": "Paris CDG",
    "longhaul": "Air France 777-300ER / A350",
    "lieflat": true,
    "connector": "A320 / A220",
    "fees": 455.53,
    "fee_display": "$455.53 USD (exact, Flying Blue)",
    "verified": {
     "status": "priced",
     "note": "Exact tax from Flying Blue (AF1005 + AF4 via CDG); normal 1\u20133h CDG connection. Cabin + space: confirm on airfrance.us.",
     "routing": "AF1005 + AF4 via CDG"
    }
   },
   "couple_miles": 330000,
   "couple_fees": 1120,
   "fees_exact": "CA$143.00\u00d72 + $455.53\u00d72 USD (\u2248$1120 USD total)",
   "programs": [
    "Aeroplan",
    "Flying Blue"
   ],
   "both_aeroplan": false,
   "fully_verified": false,
   "amex_note": "150,000 \u2192 Aeroplan + 180,000 \u2192 Flying Blue",
   "rank": 5,
   "under_goal": true
  },
  {
   "depart": "2026-10-06",
   "depart_dow": "Tue",
   "home": "2026-10-15",
   "home_dow": "Thu",
   "nights": 9,
   "out": {
    "program": "Aeroplan",
    "code": "AC",
    "miles": 75000,
    "via": "Frankfurt",
    "longhaul": "Lufthansa widebody",
    "lieflat": true,
    "connector": "Lufthansa A320",
    "fees": 104.39,
    "fee_display": "CA$143.00 (\u2248$104 USD)",
    "verified": {
     "status": "confirmed",
     "when": "2026-06-10 evening",
     "seats": 6,
     "flight": "15:40 JFK\u2192FRA\u2192FCO 09:05 (+1)",
     "duration": "11h25m \u00b7 1h50m connection",
     "carriers": "Lufthansa widebody (lie-flat) both legs",
     "fee_cad": 143.0,
     "cabin": "100% business \u2014 cabin-verified"
    }
   },
   "ret": {
    "program": "Flying Blue",
    "code": "FB",
    "miles": 90000,
    "via": "Paris CDG",
    "longhaul": "Air France 777-300ER / A350",
    "lieflat": true,
    "connector": "A320 / A220",
    "fees": 455.33,
    "fee_display": "$455.33 USD (exact, Flying Blue)",
    "verified": {
     "status": "priced",
     "note": "Exact tax from Flying Blue (AF1005 + AF4 via CDG); normal 1\u20133h CDG connection. Cabin + space: confirm on airfrance.us.",
     "routing": "AF1005 + AF4 via CDG"
    }
   },
   "couple_miles": 330000,
   "couple_fees": 1119,
   "fees_exact": "CA$143.00\u00d72 + $455.33\u00d72 USD (\u2248$1119 USD total)",
   "programs": [
    "Aeroplan",
    "Flying Blue"
   ],
   "both_aeroplan": false,
   "fully_verified": false,
   "amex_note": "150,000 \u2192 Aeroplan + 180,000 \u2192 Flying Blue",
   "rank": 6,
   "under_goal": true
  },
  {
   "depart": "2026-10-07",
   "depart_dow": "Wed",
   "home": "2026-10-14",
   "home_dow": "Wed",
   "nights": 7,
   "out": {
    "program": "Aeroplan",
    "code": "AC",
    "miles": 75000,
    "via": "Frankfurt",
    "longhaul": "Lufthansa widebody",
    "lieflat": true,
    "connector": "Lufthansa A320",
    "fees": 104.39,
    "fee_display": "CA$143.00 (\u2248$104 USD)",
    "verified": {
     "status": "confirmed",
     "when": "2026-06-10 evening",
     "seats": 2,
     "flight": "15:40 JFK\u2192FRA\u2192FCO 09:05 (+1)",
     "duration": "11h25m \u00b7 1h50m connection",
     "carriers": "Lufthansa widebody (lie-flat) both legs",
     "fee_cad": 143.0,
     "cabin": "100% business \u2014 cabin-verified"
    }
   },
   "ret": {
    "program": "Flying Blue",
    "code": "FB",
    "miles": 90000,
    "via": "Paris CDG",
    "longhaul": "Air France 777-300ER / A350",
    "lieflat": true,
    "connector": "A320 / A220",
    "fees": 455.53,
    "fee_display": "$455.53 USD (exact, Flying Blue)",
    "verified": {
     "status": "priced",
     "note": "Exact tax from Flying Blue (AF1005 + AF4 via CDG); normal 1\u20133h CDG connection. Cabin + space: confirm on airfrance.us.",
     "routing": "AF1005 + AF4 via CDG"
    }
   },
   "couple_miles": 330000,
   "couple_fees": 1120,
   "fees_exact": "CA$143.00\u00d72 + $455.53\u00d72 USD (\u2248$1120 USD total)",
   "programs": [
    "Aeroplan",
    "Flying Blue"
   ],
   "both_aeroplan": false,
   "fully_verified": false,
   "amex_note": "150,000 \u2192 Aeroplan + 180,000 \u2192 Flying Blue",
   "rank": 7,
   "under_goal": true
  },
  {
   "depart": "2026-10-07",
   "depart_dow": "Wed",
   "home": "2026-10-15",
   "home_dow": "Thu",
   "nights": 8,
   "out": {
    "program": "Aeroplan",
    "code": "AC",
    "miles": 75000,
    "via": "Frankfurt",
    "longhaul": "Lufthansa widebody",
    "lieflat": true,
    "connector": "Lufthansa A320",
    "fees": 104.39,
    "fee_display": "CA$143.00 (\u2248$104 USD)",
    "verified": {
     "status": "confirmed",
     "when": "2026-06-10 evening",
     "seats": 2,
     "flight": "15:40 JFK\u2192FRA\u2192FCO 09:05 (+1)",
     "duration": "11h25m \u00b7 1h50m connection",
     "carriers": "Lufthansa widebody (lie-flat) both legs",
     "fee_cad": 143.0,
     "cabin": "100% business \u2014 cabin-verified"
    }
   },
   "ret": {
    "program": "Flying Blue",
    "code": "FB",
    "miles": 90000,
    "via": "Paris CDG",
    "longhaul": "Air France 777-300ER / A350",
    "lieflat": true,
    "connector": "A320 / A220",
    "fees": 455.33,
    "fee_display": "$455.33 USD (exact, Flying Blue)",
    "verified": {
     "status": "priced",
     "note": "Exact tax from Flying Blue (AF1005 + AF4 via CDG); normal 1\u20133h CDG connection. Cabin + space: confirm on airfrance.us.",
     "routing": "AF1005 + AF4 via CDG"
    }
   },
   "couple_miles": 330000,
   "couple_fees": 1119,
   "fees_exact": "CA$143.00\u00d72 + $455.33\u00d72 USD (\u2248$1119 USD total)",
   "programs": [
    "Aeroplan",
    "Flying Blue"
   ],
   "both_aeroplan": false,
   "fully_verified": false,
   "amex_note": "150,000 \u2192 Aeroplan + 180,000 \u2192 Flying Blue",
   "rank": 8,
   "under_goal": true
  },
  {
   "depart": "2026-10-04",
   "depart_dow": "Sun",
   "home": "2026-10-13",
   "home_dow": "Tue",
   "nights": 9,
   "out": {
    "program": "Flying Blue",
    "code": "FB",
    "miles": 141500,
    "via": "Paris CDG",
    "longhaul": "Air France 777-300ER / A350",
    "lieflat": true,
    "connector": "A320 / A220",
    "fees": 363.9,
    "fee_display": "$363.90 USD (exact, Flying Blue)",
    "verified": {
     "status": "priced",
     "note": "Exact tax from Flying Blue (AF via CDG (e.g. AF9+AF1604)); normal 1\u20133h CDG connection. Cabin + space: confirm on airfrance.us.",
     "routing": "AF via CDG (e.g. AF9+AF1604)"
    }
   },
   "ret": {
    "program": "Aeroplan",
    "code": "AC",
    "miles": 75000,
    "via": "Geneva",
    "longhaul": "Swiss A330-300",
    "lieflat": true,
    "connector": "ITA A320neo",
    "fees": 143.81,
    "fee_display": "CA$197.00 (\u2248$144 USD)",
    "verified": {
     "status": "confirmed",
     "when": "2026-06-10 evening",
     "seats": 4,
     "flight": "09:05 FCO\u2192GVA\u2192JFK 14:20 same day",
     "duration": "11h15m \u00b7 1h connection",
     "carriers": "ITA A320neo + Swiss A330-300 (lie-flat)",
     "fee_cad": 197.0,
     "cabin": "100% business \u2014 cabin-verified"
    }
   },
   "couple_miles": 433000,
   "couple_fees": 1015,
   "fees_exact": "$363.90\u00d72 USD + CA$197.00\u00d72 (\u2248$1015 USD total)",
   "programs": [
    "Aeroplan",
    "Flying Blue"
   ],
   "both_aeroplan": false,
   "fully_verified": false,
   "amex_note": "283,000 \u2192 Flying Blue + 150,000 \u2192 Aeroplan",
   "rank": 9,
   "under_goal": false
  },
  {
   "depart": "2026-10-12",
   "depart_dow": "Mon",
   "home": "2026-10-20",
   "home_dow": "Tue",
   "nights": 8,
   "out": {
    "program": "Flying Blue",
    "code": "FB",
    "miles": 141500,
    "via": "Paris CDG",
    "longhaul": "Air France 777-300ER / A350",
    "lieflat": true,
    "connector": "A320 / A220",
    "fees": 363.9,
    "fee_display": "$363.90 USD (exact, Flying Blue)",
    "verified": {
     "status": "priced",
     "note": "Exact tax from Flying Blue (AF9/AF7 + connector via CDG); normal 1\u20133h CDG connection. Cabin + space: confirm on airfrance.us.",
     "routing": "AF9/AF7 + connector via CDG"
    }
   },
   "ret": {
    "program": "Aeroplan",
    "code": "AC",
    "miles": 75000,
    "via": "Geneva",
    "longhaul": "Swiss A330-300",
    "lieflat": true,
    "connector": "ITA A320neo",
    "fees": 143.81,
    "fee_display": "CA$197.00 (\u2248$144 USD)",
    "verified": {
     "status": "confirmed",
     "when": "2026-06-10 evening",
     "seats": 2,
     "flight": "09:05 FCO\u2192GVA\u2192JFK 14:20 same day",
     "duration": "11h15m \u00b7 1h connection",
     "carriers": "ITA A320neo + Swiss A330-300 (lie-flat)",
     "fee_cad": 197.0,
     "cabin": "100% business \u2014 cabin-verified"
    }
   },
   "couple_miles": 433000,
   "couple_fees": 1015,
   "fees_exact": "$363.90\u00d72 USD + CA$197.00\u00d72 (\u2248$1015 USD total)",
   "programs": [
    "Aeroplan",
    "Flying Blue"
   ],
   "both_aeroplan": false,
   "fully_verified": false,
   "amex_note": "283,000 \u2192 Flying Blue + 150,000 \u2192 Aeroplan",
   "rank": 10,
   "under_goal": false
  }
 ]
};
