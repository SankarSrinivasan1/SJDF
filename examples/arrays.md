## Arrays in SJDF

SJDF supports two valid array styles:

---

### 1. Block Array (Recommended for readability)

skills:

stocks

options

risk management


Best for:
- Long lists  
- Better readability  
- Clean structure  

---

### 2. Inline Array (Compact style)

user: name: Sankar age: 35 skills: [stocks, options]

Best for:
- Short lists  
- Compact data  
- API responses  

---

## Rule of Thumb

- Use **inline** for small lists (1–3 items)  
- Use **block** for longer lists  

---

## Important

Do not mix styles within the same array.

❌ Invalid:

skills:

stocks options


✅ Valid:
Choose one style and stay consistent.

---

Both formats are part of SJDF and fully supported.
