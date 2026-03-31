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

> SJDF™ (Simple Just Data Format) is an original data format designed to simplify structured data beyond JSON. Developed by Sankar Srinivasan, petra.srini@gmail.com, https://beacons.ai/sankarsrinivasan 

---

## Why I Built SJDF

I didn’t wake up one day thinking,
“Let’s invent a new data format.”

This came from getting feedback from the developers, those are in Algorithmic Trading. 

Debugging APIs where one missing comma broke everything.  
Looking at nested JSON that felt harder to read than code.  
Spending more time fixing syntax than solving real problems.

JSON is powerful.

But it’s not simple.

It won because it was better than XML — not because it was perfect.

At some point, I started asking:

What would a data format look like if we designed it for humans first?

Not machines.  
Not legacy systems.  
Not backward compatibility.

Just clarity.

That’s how SJDF started.

A small idea:
- Remove noise  
- Reduce mistakes  
- Make structure obvious  

SJDF is not trying to replace JSON overnight.

It’s trying to challenge a habit.

If it makes even one developer pause and think,
“Why is this so complicated?”  

Then it’s already working.

---> Sankar Srinivasan 
