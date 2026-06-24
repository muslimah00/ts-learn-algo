// function aVeryBigSum(ar) {
//     let sum = 0;
//     for (let i = 0; i < ar.length; i++) {
//         sum = sum + ar[i];  // Add each element to the sum
//     }
//     return sum;  // Return the total sum
// }

function aVeryBigSum(ar: number[]): number {
    let sum: number = 0;
    for (let i: number = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}

// Test
const bigNumbers: number[] = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
const result1: number = aVeryBigSum(bigNumbers);
console.log(result1);  // Output: 5000000015