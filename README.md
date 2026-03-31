# SJDF
SJDF — Simple Just Data Format. A ridiculously simple alternative to JSON. No commas. No bracket confusions. Just clean, human-readable data.

# SJDF — Simple Just Data Format

A human-friendly alternative to JSON.

No bracket confusions.  
No comma bugs.  
Just clean, readable data.

---

## Why SJDF?

JSON is powerful… but painful.

- Missing commas break everything
- Too many quotes and brackets
- Hard to read nested data

SJDF fixes that.

---

## Example

### JSON

```json
{
  "user": {
    "name": "John",
    "age": 35,
    "skills": ["stocks", "options"]
  }
}
```
---

### SJDF

```bash
user:
  name: John
  age: 35
  skills: [stocks, options]
```

---

### Features
- Minimal syntax
- No commas
- Optional quotes
- Supports nesting
- Supports arrays
- Easy to parse

---

## Installation

### JavaScript

```bash
git clone https://github.com/yourname/sjdf
cd sjdf/js
node test.js
```

---

### Python

```bash
git clone https://github.com/yourname/sjdf
cd sjdf/python
python test.py
```

### Syntax Rules
- ```key: value```
- Indentation defines structure
- Arrays use ```[a, b, c]``` or ```- list```
- Comments start with #

---

### Example File
```bash
user:
  name: John
  age: 35
  trader: true
  skills:
    - stocks
    - options
    - risk
```

---

### ©

> SJDF™ (Simple Just Data Format) is an original data format designed to simplify structured data beyond JSON. Developed by Sankar Srinivasan, petra.srini@gmail.com

---
