// Simple Array Sum with TypeScript

// function simpleArraySum(ar: number[]): number {
//     let total: number = 0;
//     for (let i: number = 0; i < ar.length; i++) {
//         total += ar[i];
//     }
//     return total;
// }

function simpleArraySumReduce(ar: number[]): number {
    return ar.reduce((sum: number, num: number): number => sum + num, 0);
}

// Test the functions
const numbers1: number[] = [1, 2, 3, 4, 10, 11];
// console.log("Simple Array Sum:", simpleArraySum(numbers1));
console.log("Simple Array Sum (reduce):", simpleArraySumReduce(numbers1));