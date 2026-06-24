// Array of numbers
let scores: number[] = [10, 20, 30, 40];

// Sum all numbers in array
function sumArray(numbers: number[]): number {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}
console.log(sumArray(scores)); // 100

function sumArrayReduce(numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumArrayReduce(scores)); // 100

// Test with another array

console.log(sumArray([1, 2, 3, 4])); // 10

function findMax(numbers: number[]): number {
  let max = numbers[0]; // Start with first number
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log(findMax([5, 12, 3, 8, 1])); // 12