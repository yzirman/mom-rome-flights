const DATA = {
 "generated": "2026-06-10 evening \u2014 every flight verified on its booking site (JFK + Boston)",
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
 "verified_summary": "Every flight listed was verified signed-in on its actual booking site the evening of Jun 10: the five Aeroplan legs on aircanada.com (twice \u2014 seat counts and per-segment cabins re-checked), and the Flying Blue legs on airfrance.us (exact miles + taxes for 2 passengers, Business cabin filter, flight numbers and aircraft from the details panel). One change caught live: the Oct 15 Flying Blue 90k return SOLD OUT during the day \u2014 it's been removed.",
 "note_volatile": "All numbers were live the evening of Jun 10, 2026. Award space changes hourly \u2014 re-check once more right before transferring Amex points (transfers are instant and non-reversible).",
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
  },
  {
   "date": "Oct 15 return (Flying Blue)",
   "flight": "AF1005+AF4 \u2014 the 90k award",
   "pct": "SOLD OUT",
   "why": "Was 90k/pp this morning; by evening repriced to 148k/pp. Dropped from the list."
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
     "when": "2026-06-10 ~7:30pm ET (second check)",
     "seats": 2,
     "flight": "19:25 JFK\u2192GVA\u2192FCO 13:05 (+1)",
     "duration": "11h40m \u00b7 2h20m connection",
     "carriers": "Swiss A330-300 (lie-flat) + ITA A320neo",
     "fee_cad": 126.9,
     "cabin": "100% business \u2014 cabin-verified twice"
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
     "when": "2026-06-10 ~7:30pm ET (second check)",
     "seats": 4,
     "flight": "09:05 FCO\u2192GVA\u2192JFK 14:20 same day",
     "duration": "11h15m \u00b7 1h connection",
     "carriers": "ITA A320neo + Swiss A330-300 (lie-flat)",
     "fee_cad": 197.0,
     "cabin": "100% business \u2014 cabin-verified twice"
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
   "under_goal": true,
   "origin": "JFK"
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
     "when": "2026-06-10 ~7:30pm ET (second check)",
     "seats": 6,
     "flight": "15:40 JFK\u2192FRA\u2192FCO 09:05 (+1)",
     "duration": "11h25m \u00b7 1h50m connection",
     "carriers": "Lufthansa widebody (lie-flat) both legs",
     "fee_cad": 143.0,
     "cabin": "100% business \u2014 cabin-verified twice"
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
     "when": "2026-06-10 ~7:30pm ET (second check)",
     "seats": 4,
     "flight": "09:05 FCO\u2192GVA\u2192JFK 14:20 same day",
     "duration": "11h15m \u00b7 1h connection",
     "carriers": "ITA A320neo + Swiss A330-300 (lie-flat)",
     "fee_cad": 197.0,
     "cabin": "100% business \u2014 cabin-verified twice"
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
   "under_goal": true,
   "origin": "JFK"
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
     "when": "2026-06-10 ~7:30pm ET (second check)",
     "seats": 2,
     "flight": "19:25 JFK\u2192GVA\u2192FCO 13:05 (+1)",
     "duration": "11h40m \u00b7 2h20m connection",
     "carriers": "Swiss A330-300 (lie-flat) + ITA A320neo",
     "fee_cad": 126.9,
     "cabin": "100% business \u2014 cabin-verified twice"
    }
   },
   "ret": {
    "program": "Flying Blue",
    "code": "FB",
    "miles": 90000,
    "via": "Paris CDG",
    "longhaul": "Air France Boeing 777-300 (lie-flat)",
    "lieflat": true,
    "connector": "AF1005 A320",
    "fees": 455.93,
    "fee_display": "$455.93 USD (verified)",
    "verified": {
     "status": "confirmed",
     "when": "2026-06-10 ~7:45pm ET",
     "seats": null,
     "flight": "AF1005 06:05 FCO\u2192CDG + AF4 10:45\u2192JFK 12:55",
     "duration": "12h50 \u00b7 2h20 connection",
     "carriers": "Air France Boeing 777-300 (lie-flat) + AF1005 A320",
     "fee_cad": null,
     "cabin": "Business fare on airfrance.us (Business cabin filter)",
     "note": "Verified on airfrance.us: 'Lowest fare 180,000 Miles' + $911.86 for two."
    }
   },
   "couple_miles": 330000,
   "couple_fees": 1097,
   "fees_exact": "CA$126.90\u00d72 + $455.93\u00d72 USD (\u2248$1097 USD total)",
   "programs": [
    "Aeroplan",
    "Flying Blue"
   ],
   "both_aeroplan": false,
   "fully_verified": true,
   "amex_note": "150,000 \u2192 Aeroplan + 180,000 \u2192 Flying Blue",
   "rank": 3,
   "under_goal": true,
   "origin": "JFK"
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
     "when": "2026-06-10 ~7:30pm ET (second check)",
     "seats": 6,
     "flight": "15:40 JFK\u2192FRA\u2192FCO 09:05 (+1)",
     "duration": "11h25m \u00b7 1h50m connection",
     "carriers": "Lufthansa widebody (lie-flat) both legs",
     "fee_cad": 143.0,
     "cabin": "100% business \u2014 cabin-verified twice"
    }
   },
   "ret": {
    "program": "Flying Blue",
    "code": "FB",
    "miles": 90000,
    "via": "Paris CDG",
    "longhaul": "Air France Boeing 777-300 (lie-flat)",
    "lieflat": true,
    "connector": "AF1005 A320",
    "fees": 455.93,
    "fee_display": "$455.93 USD (verified)",
    "verified": {
     "status": "confirmed",
     "when": "2026-06-10 ~7:45pm ET",
     "seats": null,
     "flight": "AF1005 06:05 FCO\u2192CDG + AF4 10:45\u2192JFK 12:55",
     "duration": "12h50 \u00b7 2h20 connection",
     "carriers": "Air France Boeing 777-300 (lie-flat) + AF1005 A320",
     "fee_cad": null,
     "cabin": "Business fare on airfrance.us (Business cabin filter)",
     "note": "Verified on airfrance.us: 'Lowest fare 180,000 Miles' + $911.86 for two."
    }
   },
   "couple_miles": 330000,
   "couple_fees": 1121,
   "fees_exact": "CA$143.00\u00d72 + $455.93\u00d72 USD (\u2248$1121 USD total)",
   "programs": [
    "Aeroplan",
    "Flying Blue"
   ],
   "both_aeroplan": false,
   "fully_verified": true,
   "amex_note": "150,000 \u2192 Aeroplan + 180,000 \u2192 Flying Blue",
   "rank": 4,
   "under_goal": true,
   "origin": "JFK"
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
     "when": "2026-06-10 ~7:30pm ET (second check)",
     "seats": 2,
     "flight": "15:40 JFK\u2192FRA\u2192FCO 09:05 (+1)",
     "duration": "11h25m \u00b7 1h50m connection",
     "carriers": "Lufthansa widebody (lie-flat) both legs",
     "fee_cad": 143.0,
     "cabin": "100% business \u2014 cabin-verified twice"
    }
   },
   "ret": {
    "program": "Flying Blue",
    "code": "FB",
    "miles": 90000,
    "via": "Paris CDG",
    "longhaul": "Air France Boeing 777-300 (lie-flat)",
    "lieflat": true,
    "connector": "AF1005 A320",
    "fees": 455.93,
    "fee_display": "$455.93 USD (verified)",
    "verified": {
     "status": "confirmed",
     "when": "2026-06-10 ~7:45pm ET",
     "seats": null,
     "flight": "AF1005 06:05 FCO\u2192CDG + AF4 10:45\u2192JFK 12:55",
     "duration": "12h50 \u00b7 2h20 connection",
     "carriers": "Air France Boeing 777-300 (lie-flat) + AF1005 A320",
     "fee_cad": null,
     "cabin": "Business fare on airfrance.us (Business cabin filter)",
     "note": "Verified on airfrance.us: 'Lowest fare 180,000 Miles' + $911.86 for two."
    }
   },
   "couple_miles": 330000,
   "couple_fees": 1121,
   "fees_exact": "CA$143.00\u00d72 + $455.93\u00d72 USD (\u2248$1121 USD total)",
   "programs": [
    "Aeroplan",
    "Flying Blue"
   ],
   "both_aeroplan": false,
   "fully_verified": true,
   "amex_note": "150,000 \u2192 Aeroplan + 180,000 \u2192 Flying Blue",
   "rank": 5,
   "under_goal": true,
   "origin": "JFK"
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
    "miles": 141000,
    "via": "Paris CDG",
    "longhaul": "Air France A350-900 (lie-flat)",
    "lieflat": true,
    "connector": "AF1604 A220-300",
    "fees": 364.3,
    "fee_display": "$364.30 USD (verified)",
    "verified": {
     "status": "confirmed",
     "when": "2026-06-10 ~7:45pm ET",
     "seats": null,
     "flight": "AF11 01:00 JFK\u2192CDG\u2192FCO 17:30 (+0)",
     "duration": "10h30 \u00b7 1h10 connection",
     "carriers": "Air France A350-900 (lie-flat) + AF1604 A220-300",
     "fee_cad": null,
     "cabin": "Business fare on airfrance.us (Business cabin filter)",
     "note": "Verified on airfrance.us: 'Lowest fare 282,000 Miles' + $728.60 for two. NOTE: 01:00 AM departure; the evening AF9 on this date now prices at 230k/pp."
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
     "when": "2026-06-10 ~7:30pm ET (second check)",
     "seats": 4,
     "flight": "09:05 FCO\u2192GVA\u2192JFK 14:20 same day",
     "duration": "11h15m \u00b7 1h connection",
     "carriers": "ITA A320neo + Swiss A330-300 (lie-flat)",
     "fee_cad": 197.0,
     "cabin": "100% business \u2014 cabin-verified twice"
    }
   },
   "couple_miles": 432000,
   "couple_fees": 1016,
   "fees_exact": "$364.30\u00d72 USD + CA$197.00\u00d72 (\u2248$1016 USD total)",
   "programs": [
    "Aeroplan",
    "Flying Blue"
   ],
   "both_aeroplan": false,
   "fully_verified": true,
   "amex_note": "282,000 \u2192 Flying Blue + 150,000 \u2192 Aeroplan",
   "rank": 6,
   "under_goal": false,
   "origin": "JFK"
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
    "miles": 141000,
    "via": "Paris CDG",
    "longhaul": "Air France 777/A350 (lie-flat)",
    "lieflat": true,
    "connector": "AF connector",
    "fees": 364.3,
    "fee_display": "$364.30 USD (verified)",
    "verified": {
     "status": "confirmed",
     "when": "2026-06-10 ~7:45pm ET",
     "seats": null,
     "flight": "AF9 23:30 JFK\u2192CDG\u2192FCO 16:35 (+1)",
     "duration": "11h05 \u00b7 connection at CDG",
     "carriers": "Air France 777/A350 (lie-flat) + AF connector",
     "fee_cad": null,
     "cabin": "Business fare on airfrance.us (Business cabin filter)",
     "note": "Verified on airfrance.us: 282,000 Miles + $728.60 for two."
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
     "when": "2026-06-10 ~7:30pm ET (second check)",
     "seats": 2,
     "flight": "09:05 FCO\u2192GVA\u2192JFK 14:20 same day",
     "duration": "11h15m \u00b7 1h connection",
     "carriers": "ITA A320neo + Swiss A330-300 (lie-flat)",
     "fee_cad": 197.0,
     "cabin": "100% business \u2014 cabin-verified twice"
    }
   },
   "couple_miles": 432000,
   "couple_fees": 1016,
   "fees_exact": "$364.30\u00d72 USD + CA$197.00\u00d72 (\u2248$1016 USD total)",
   "programs": [
    "Aeroplan",
    "Flying Blue"
   ],
   "both_aeroplan": false,
   "fully_verified": true,
   "amex_note": "282,000 \u2192 Flying Blue + 150,000 \u2192 Aeroplan",
   "rank": 7,
   "under_goal": false,
   "origin": "JFK"
  },
  {
   "depart": "2026-10-05",
   "depart_dow": "Mon",
   "home": "2026-10-13",
   "home_dow": "Tue",
   "nights": 8,
   "origin": "BOS",
   "out": {
    "program": "Aeroplan",
    "code": "AC",
    "miles": 75000,
    "via": "Frankfurt",
    "longhaul": "Lufthansa widebody",
    "lieflat": true,
    "connector": "ITA A320",
    "fees": 104.39,
    "fee_display": "CA$143.00 (\u2248$104 USD)",
    "verified": {
     "status": "confirmed",
     "when": "2026-06-10 ~8pm ET",
     "seats": 2,
     "flight": "17:45 BOS\u2192FRA\u2192FCO 13:40 (+1)",
     "duration": "13h55m \u00b7 \u26a0\ufe0f 4h50m connection",
     "carriers": "Lufthansa (lie-flat) + ITA Airways",
     "fee_cad": 143.0,
     "cabin": "100% business \u2014 cabin-verified"
    }
   },
   "ret": {
    "program": "Aeroplan",
    "code": "AC",
    "miles": 75000,
    "via": "Frankfurt",
    "longhaul": "Lufthansa widebody",
    "lieflat": true,
    "connector": "ITA A320",
    "fees": 142.35,
    "fee_display": "CA$195.00 (\u2248$142 USD)",
    "verified": {
     "status": "confirmed",
     "when": "2026-06-10 ~8pm ET",
     "seats": 2,
     "flight": "08:45 FCO\u2192FRA\u2192BOS 20:10 same day",
     "duration": "17h25m \u00b7 \u26a0\ufe0f 6h50m connection",
     "carriers": "ITA Airways + Lufthansa (lie-flat)",
     "fee_cad": 195.0,
     "cabin": "100% business \u2014 cabin-verified"
    }
   },
   "couple_miles": 300000,
   "couple_fees": 493,
   "fees_exact": "CA$676.00 total (\u2248$494 USD)",
   "programs": [
    "Aeroplan"
   ],
   "both_aeroplan": true,
   "fully_verified": true,
   "amex_note": "Transfer 300,000 Amex MR \u2192 Aeroplan (1:1, instant)"
  }
 ],
 "bos_note": "Logan has exactly ONE true-business trip in spec: Oct 5 \u2192 Oct 13 at 300k. Everything else from BOS was either a mixed-cabin trap (transatlantic in economy \u2014 Munich routings, the short-connection Frankfurt return) or 193k+/person. Heads up: both connections are longer than the JFK options (4h50m out, 6h50m back, both in Frankfurt)."
};
