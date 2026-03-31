## JSON Example

```bash
{
  "id": 101,
  "name": "Sankar Srinivasan",
  "active": true,
  "rating": 4.8,
  "projects": null,
  "skills": ["trading", "analysis", "risk management"],
  "address": {
    "street": "MG Road",
    "city": "Chennai",
    "pincode": 600001,
    "geo": {
      "lat": 13.0827,
      "lng": 80.2707
    }
  },
  "experience": [
    {
      "company": "Alpha Capital",
      "years": 5,
      "roles": ["analyst", "senior analyst"]
    },
    {
      "company": "Beta Investments",
      "years": 3,
      "roles": ["consultant"]
    }
  ],
  "preferences": {
    "notifications": {
      "email": true,
      "sms": false,
      "push": true
    },
    "theme": "dark",
    "languages": ["en", "ta"]
  },
  "financials": {
    "balance": 1050000.75,
    "currency": "INR",
    "portfolio": [
      {
        "symbol": "TCS",
        "quantity": 50,
        "price": 3500.5
      },
      {
        "symbol": "INFY",
        "quantity": 30,
        "price": 1500.25
      }
    ]
  },
  "tags": [],
  "lastLogin": "2026-03-31T10:15:30Z"
}
```

---

## Same Data in SJDF Format

```bash
id: 101
name: Sankar Srinivasan
active: true
rating: 4.8
projects: null

skills:
  - trading
  - analysis
  - risk management

address:
  street: MG Road
  city: Chennai
  pincode: 600001
  geo:
    lat: 13.0827
    lng: 80.2707

experience:
  - company: Alpha Capital
    years: 5
    roles:
      - analyst
      - senior analyst
  - company: Beta Investments
    years: 3
    roles:
      - consultant

preferences:
  notifications:
    email: true
    sms: false
    push: true
  theme: dark
  languages:
    - en
    - ta

financials:
  balance: 1050000.75
  currency: INR
  portfolio:
    - symbol: TCS
      quantity: 50
      price: 3500.5
    - symbol: INFY
      quantity: 30
      price: 1500.25

tags: []

lastLogin: 2026-03-31T10:15:30Z
```

---

## What This Demonstrates

You can clearly see:

✅ Objects → indentation

✅ Arrays → - list format

✅ No commas → fewer syntax errors

✅ Readability → much closer to how humans think

✅ Same data fidelity as JSON

---

## Mixed Arrays (Different Data Types)

### JSON

```bash
{
  "mixed": [1, "two", true, null, {"key": "value"}, [10, 20]]
}
```

### SJDF

```bash
mixed:
  - 1
  - "two"
  - true
  - null
  - key: value
  - 
    - 10
    - 20
```

---


## Deeply Nested Structure

### JSON

```bash
{
  "a": {
    "b": {
      "c": {
        "d": {
          "e": {
            "value": 42
          }
        }
      }
    }
  }
}
```

### SJDF

```bash
a:
  b:
    c:
      d:
        e:
          value: 42
```

---
