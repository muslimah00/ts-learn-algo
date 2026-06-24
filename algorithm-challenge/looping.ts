function printNumbers(x: number): void {
    for (let i = 1; i <= x; i++) {
        console.log (i)
    }
}
printNumbers(10)

// print stars
function printStars(x: number): void {
    for (let i = 1; i <= x; i++) {
        console.log ("*".repeat(i))
    }
}
printStars(5)

// print stars in reverse
function printStarsReverse(x: number): void {
    for (let i = x; i >= 1; i--) {
        console.log ("*".repeat(i))
    }
}
printStarsReverse(5)

// print pyramid
function printPyramid(x: number): void {
    for (let i = 1; i <= x; i++) {
        console.log (" ".repeat(x - i) + "*".repeat(i * 2 - 1))
    }
}
printPyramid(5)