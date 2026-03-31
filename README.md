# SJDF
SJDF — Simple Just Data Format. A ridiculously simple alternative to JSON. No commas. No bracket chaos. Just clean, human-readable data.

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
    "name": "Sankar",
    "age": 58,
    "skills": ["stocks", "options"]
  }
}
```
---

### SJDF

```bash
user:
  name: Sankar
  age: 58
  skills: [stocks, options]
```
