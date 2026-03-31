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
- risk
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

```bash
city: "New York"
```

---

### 4.6 Comments

Comments begin with `#` and continue to the end of the line:

```bash
# This is a comment
```

Parsers MUST ignore comments.

---

## 5. Indentation Rules

- Spaces MUST be used for indentation (tabs are discouraged)
- Each level of nesting increases indentation
- All sibling elements MUST use the same indentation level
- Inconsistent indentation MUST result in a parsing error

---

## 6. Parsing Model

An SJDF parser MUST:

1. Process input line-by-line
2. Determine structure using indentation levels
3. Split key-value pairs at the first `:` delimiter
4. Construct a hierarchical data structure
5. Infer data types dynamically

---

## 7. Error Handling

Parsers SHOULD detect and report:

- Inconsistent indentation levels
- Invalid or malformed array syntax
- Missing or invalid key-value pairs
- Unexpected structure transitions

Parsers MAY provide descriptive error messages for debugging.

---

## 8. Comparison with JSON

| Feature        | JSON   | SJDF  |
|---------------|--------|--------|
| Readability   | Medium | High   |
| Syntax Noise  | High   | Low    |
| Error-prone   | High   | Lower  |
| Parsing Ease  | Medium | High   |

---

## 9. Future Extensions

Potential enhancements to SJDF include:

- Schema validation support
- Explicit type annotations
- Streaming and large file handling
- Binary encoding for performance optimization

---

## 10. Conclusion

SJDF provides a simplified, human-first alternative to traditional data formats. By reducing syntactic overhead and emphasizing clarity, SJDF aims to improve developer productivity and reduce common data-related errors while remaining practical for modern systems.
