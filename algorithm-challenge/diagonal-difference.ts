function diagonalDifference(arr: number[][]): number {
    // Initialize sum for left-to-right diagonal (top-left to bottom-right)
    let leftDiagonal: number = 0;
    
    // Initialize sum for right-to-left diagonal (top-right to bottom-left)
    let rightDiagonal: number = 0;
    
    // Get the length of the square matrix (number of rows/columns)
    const n: number = arr.length;
    
    // Loop through each row (and column) of the matrix
    for (let i: number = 0; i < n; i++) {
        // Add element from left diagonal: row i, column i
        // Example: when i=0 -> arr[0][0], i=1 -> arr[1][1], etc.
        leftDiagonal = leftDiagonal + arr[i][i];
        
        // Add element from right diagonal: row i, column (n-1-i)
        // Example: if n=3, when i=0 -> arr[0][2], i=1 -> arr[1][1], i=2 -> arr[2][0]
        rightDiagonal = rightDiagonal + arr[i][n - 1 - i];
    }
    
    // Calculate absolute difference using Math.abs() function
    // Math.abs() returns the absolute (non-negative) value of a number
    const difference: number = Math.abs(leftDiagonal - rightDiagonal);
    
    // Return the absolute difference
    return difference;
}

// Test the function with type annotations
const matrix: number[][] = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

const result: number = diagonalDifference(matrix);
console.log(result);  // Output: 15

// Export empty object to avoid TypeScript block-scoped variable errors
export {};