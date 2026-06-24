// Challenge: Create a function that:
// 1. Takes an array of numbers
// 2. Returns ONLY the even numbers
// 3. Multiplies each even number by 2

function processEvens(numbers: number[]): number[] {
  // Your code here
  // Hint: Use a loop and if statement
  let result: number[] = [];
  
  // 👇 Write your solution below
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] % 2 === 0 ? result.push(numbers[i] * 2) : null;
  }
  return result;
}

// Test with: processEvens([1, 2, 3, 4, 5, 6]) 
// Should return: [4, 8, 12]

console.log(processEvens([1, 2, 3, 4, 5, 6]));