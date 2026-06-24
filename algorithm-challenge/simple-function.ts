// Basic function with types
function sayHello(name: string): string {
  return "Hello " + name;
}

console.log(sayHello("Alex")); // "Hello Alex"

// Add two numbers
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3)); // 8

function double(x: number): number {
  return x * 2;
}
// Test it: double(4) should be 8
console.log(double(4)); // 8

// Function with optional parameter
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "Hi")); // "Hi, Bob!"

// Function with default parameter
function multiply(a: number, b: number = 2): number {
  return a * b;
}

console.log(multiply(5)); // 10 (5 * 2)
console.log(multiply(5, 3)); // 15 (5 * 3)

