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

### Rules
1. Key-Value
'''bash
key: value
```

### No quotes unless needed
```bash
name: Sankar
city: "New York"   # space → quotes required
```

### Nesting via indentation
```bash
user:
  name: Sankar
```

### Arrays (clean style)
```bash
skills: [stocks, options, risk]
```
OR
```bash
skills:
  - stocks
  - options
```

###No trailing commas (big win)

###Comments allowed
```bash
# This is valid
```
