# SJDF Specification
## Simple Just Data Format (SJDF)

Version: 0.1  
Status: Draft  
Author: Sankar Srinivasan  
Date: 2026  

---

## 1. Abstract

SJDF (Simple Just Data Format) is a human-readable data serialization format designed to reduce the syntactic complexity of traditional formats such as JSON while preserving structural clarity and machine readability.

SJDF prioritizes simplicity, readability, and reduced error-proneness through minimal syntax and indentation-based structure.

---

## 2. Design Goals

SJDF is designed with the following objectives:

- Minimize syntax noise (e.g., eliminate commas, reduce quoting)
- Improve human readability and scan-ability
- Reduce common parsing and formatting errors
- Support hierarchical and nested data structures
- Enable simple and efficient parser implementation

---

## 3. Terminology

- **Key**: A string identifier for a value
- **Value**: Data associated with a key
- **Object**: A collection of key-value pairs
- **Array**: An ordered list of values
- **Indentation Level**: Leading whitespace used to define structure

---

## 4. Syntax Overview

### 4.1 Key-Value Pair

```bash
key: value
```
Each line represents a single key-value mapping.

---

### 4.2 Objects (Nested Structures)

Nested objects are defined using indentation:

```bash
user: name: Sankar age: 35
```

Indentation MUST be consistent throughout the document.

---

### 4.3 Arrays

#### 4.3.1 Inline Arrays

```bash
skills: [stocks, options, risk]
```

#### 4.3.2 Block Arrays

```bash
skills:
- stocks
- options
```

Each array item in block format MUST begin with a hyphen (`-`).

---

### 4.4 Data Types

| Type     | Example            |
|----------|--------------------|
| String   | Sankar             |
| Number   | 35                 |
| Boolean  | true / false       |
| Array    | [a, b, c]          |
| Object   | Indented structure |

---

### 4.5 Strings

Strings MAY be unquoted unless they:

- Contain spaces
- Contain special characters
- Could be misinterpreted as another type

Example:
