# 📚 COMPLETE CHEAT SHEET - Everything You've Learned

## 1️⃣ VARIABLES

```typescript
// String (text)
let testName = "Login Test";
const BASE_URL = "https://example.com";

// Number
let testCount = 5;
let duration = 2.5;

// Boolean (true/false)
let isPassed = true;
let isRunning = false;

// Array (list of items)
let testCases = ["Login", "Signup", "Profile"];
```

## 2️⃣ DATA TYPES

```typescript
// Explicit typing
let testName: string = "Login";
let count: number = 5;
let passed: boolean = true;
let tags: string[] = ["smoke", "regression"];
```

## 3️⃣ OPERATORS

### Comparison
- `===` Equal to (value AND type) - USE THIS!
- `!==` Not equal to
- `==` Equal to (value only) - AVOID!
- `>` Greater than
- `<` Less than

### Logical
- `&&` AND (both must be true)
- `||` OR (at least one must be true)
- `!` NOT (flips true/false)

## 4️⃣ STATEMENTS

### If/Else
```typescript
if (condition) {
    // Runs if TRUE
} else if (another) {
    // Runs if first FALSE and this TRUE
} else {
    // Runs if ALL FALSE
}
```

### Switch
```typescript
switch (value) {
    case "option1":
        // Runs if value === "option1"
        break;
    default:
        // Runs if no case matches
}
```

### For Loop
```typescript
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}
```

### While Loop
```typescript
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}
```

## 5️⃣ FUNCTIONS

### Traditional
```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

### Arrow
```typescript
const add = (a: number, b: number): number => a + b;
```

## 6️⃣ TEMPLATE LITERALS

```typescript
const name = "Login";
const status = "PASSED";
console.log(`Test: ${name} - Status: ${status}`);
```

## 7️⃣ STRINGS

```typescript
let str1 = 'Hello';  // Single quotes
let str2 = "Hello";  // Double quotes
// Both work the same!
```

## 8️⃣ QUICK REFERENCE

| What | Syntax |
|------|--------|
| Variable | `let name = value;` |
| Constant | `const name = value;` |
| String | `"text"` or `'text'` |
| Number | `123` |
| Boolean | `true` or `false` |
| Array | `["a", "b"]` |
| If | `if (condition) {}` |
| For loop | `for (let i=0; i<5; i++) {}` |
| Arrow function | `const fn = () => {}` |
| Print | `console.log("message")` |