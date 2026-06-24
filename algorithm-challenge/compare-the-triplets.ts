// function compareTriplets(a, b) {
//     let aliceScore = 0;  // Alice's points
//     let bobScore = 0;    // Bob's points
    
//     // Compare each of the 3 scores
//     for (let i = 0; i < 3; i++) {
//         if (a[i] > b[i]) {
//             aliceScore = aliceScore + 1;  // Alice gets a point
//         } else if (a[i] < b[i]) {
//             bobScore = bobScore + 1;      // Bob gets a point
//         }
//         // If equal, nobody gets anything
//     }
    
//     return [aliceScore, bobScore];  // Return both scores
// }

function compareTriplets(a: number[], b: number[]): number[] {
    let aliceScore: number = 0;
    let bobScore: number = 0;
    
    for (let i: number = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            aliceScore = aliceScore + 1;
        } else if (a[i] < b[i]) {
            bobScore = bobScore + 1;
        }
    }
    
    return [aliceScore, bobScore];
}

// Test it!
const alice: number[] = [5, 6, 7];
const bob: number[] = [3, 6, 10];
const result2 = compareTriplets(alice, bob);
console.log(result2);  // Output: [1, 1]

export {};