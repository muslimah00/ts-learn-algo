function addNumber(a: number, b:number): number {
  return a+b
}

let sum = addNumber(5, 3);
console.log(sum)

// Real QA example: calculate pass rate
function calculatePassRate(passed: number, total: number): number {
  if (total === 0) {
    return 0
  }
  return (passed/total) * 100;
}

let passRate = calculatePassRate(8, 10)
console.log('Pass rate: ' + passRate + '%')

// Another QA example: validate email
function validateEmail(email: string): boolean {
  return email.includes("@") && email.includes(".");
}

let email = validateEmail('lima@gmail.com')
let email2 = validateEmail('limagmail.com')
console.log(email)
console.log(email2)

// Function that returns a string
function getTestStatus(passed: boolean): string {
    if (passed) {
        return "✅ PASSED";
    } else {
        return "❌ FAILED";
    }
}

console.log(getTestStatus(true));  // ✅ PASSED
console.log(getTestStatus(false)); // ❌ FAILED