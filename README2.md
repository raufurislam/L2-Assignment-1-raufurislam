# 📘 L2-Assignment-1 — Raufur Islam Nayem

### ✅ Topic: TypeScript (From Section 1.1 to 3.10)

Each question carries 10 marks. All answers are beginner-friendly, relevant to the lessons I have learned.

---

## 🍉 Question 1: What are some differences between interfaces and types in TypeScript?

🔦 **Answer:**

In TypeScript, both `interface` and `type` are tools to describe the shape of data — mainly objects — but they work a bit differently and are useful in different cases.

### 🔹 `interface`

- Used to **define the structure of an object** (what properties it should have).
- Can be **extended** using the `extends` keyword (add more features to it).
- Mostly used when describing **object blueprints**.

### 🔹 `type`

- Can be used for **object types** as well as **primitives** (`string`, `number`, etc.), **unions**, **intersections**, etc.
- Helps to create **shortcuts or aliases** for complex types.

🌟 **Example:**

```ts
interface User {
  name: string;
  age: number;
}

type ID = number | string;
```

---

## 🍉 Question 6: How does TypeScript help in improving code quality and project maintainability?

🔦 **Answer:**

TypeScript is a **superset of JavaScript**. It is an object-oriented programming language built on top of JavaScript with additional features. It adds powerful tools like **static typing**, **better editor support**, and **compile-time error checking** — all of which help developers improve code quality and maintainability.

### 🔧 Key Benefits:

✅ Catches errors while coding instead of waiting until runtime  
✅ Shows helpful code suggestions and auto-complete in the editor  
✅ Allows safe and easy code refactoring  
✅ Handles big projects well that makes managing large codebases easier  
✅ Supports large projects with better structure and scalability  
✅ Ensures cleaner and more readable code with strong typing

🌟 **Example:**

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

If you accidentally call `greet(123)`, TypeScript will show an error before running the code.

### 🔚 **Conclusion:**

TypeScript works like a smart helper — it makes sure your code is correct and easy to manage. This helps you build projects faster and with more confidence.

---

> ✅ This document is based on what I've learned from **TypeScript Sections 1.1 to 3.10** and reflects my own beginner-friendly understanding and usage. Prepared with care for clarity and correctness.
