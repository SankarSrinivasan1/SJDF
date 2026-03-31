## Arrays in SJDF

SJDF supports two valid array styles:

---

### Block Array (Recommended for readability)

```bash
skills:
- stocks
- options
- risk management
```

Best for:
- Long lists  
- Better readability  
- Clean structure  

---

### Inline Array (Compact style)

```bash
user:
name: Sankar
age: 35
skills: [stocks, options, risk]
```

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

```bash
skills:

stocks options
```

Choose one style and stay consistent.

---

Both formats are part of SJDF and fully supported.
