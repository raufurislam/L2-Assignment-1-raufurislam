# 📘 L2-Assignment-1

## ` Question 6: How does TypeScript help in improving code quality and project maintainability?`

**Answer:**

TypeScript is a **superset of JavaScript**. It is an object-oriented programming language built on top of JavaScript with additional features. It adds powerful tools like **static typing**, **better editor support**, and **compile-time error checking** all of which help developers improve code quality and maintainability.

### TypeScript improves your code in many ways:

✅ Catches errors while coding instead of waiting until runtime  
✅ Shows helpful code suggestions and auto-complete in the editor  
✅ Allows safe and easy code refactoring  
✅ Handles big projects well that makes managing large codebases easier  
✅ Supports large projects with better structure and scalability  
✅ Ensures cleaner and more readable code with strong typing

TypeScript works like a smart helper. It makes sure your code is correct and easy to manage. This helps you build projects faster and with more confidence.

---

## ` Question 1: What are some differences between interfaces and types in TypeScript?`

**Answer:**

In TypeScript, both `interface` and `type` are tools to describe the shape of data that mainly objects but they work a bit differently and are useful in different cases.

### `interface`

- Used to **define the structure of an object** (what properties it should have).
- Can be **extended** using the extends keyword
- Mostly used when describing **object blueprints**.

### `type`

- Can be used for **object types** as well as **primitives** (string, number, etc.), **unions**, **intersections**, etc.
- Helps to create **shortcuts or aliases** for complex types.

🟨 **For Example:**

```ts
interface User {
  name: string;
  age: number;
}

type ID = number | string;
```

---
