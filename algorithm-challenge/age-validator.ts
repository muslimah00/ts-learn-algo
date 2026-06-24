// function ageValidator(age: number): boolean {
//     return age >= 18 && age <= 100;
// }
// console.log(ageValidator(17)); // false
// console.log(ageValidator(18));  // true
// console.log(ageValidator(50));  // true
// console.log(ageValidator(100)); // true
// console.log(ageValidator(101)); // false

// Challenge: Write a function that validates price
// Price should be between $1 and $1000 (inclusive)

function isValidPrice(price: number): boolean {
    // Your code here
    // Hint: Use && like the age validator
    return price >= 1 && price <=1000
}

// Test your function:
console.log(isValidPrice(0));    // Should be false (too low)
console.log(isValidPrice(1));    // Should be true (minimum)
console.log(isValidPrice(500));  // Should be true (valid)
console.log(isValidPrice(1000)); // Should be true (maximum)
console.log(isValidPrice(1001)); // Should be false (too high)