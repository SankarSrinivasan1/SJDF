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

