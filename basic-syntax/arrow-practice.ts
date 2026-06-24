// Arrow Function Practice for QA

// 1. Basic arrow function - no parameters
const startTest = () => console.log('Lets start the test')
startTest();

// 2. Arrow function with one parameter
const runTest = (testName: string) => console.log('running ' + testName)
runTest('Login Test')

// 3. Arrow function that returns a value
const isPassed = (status: string) => status === 'PASSED'
console.log(isPassed('PASSED'))
console.log(isPassed('FAILED'))

// 4. Arrow function with multiple parameters
const createTestResult = (name: string, passed: boolean) => {
  return `Test: ${name} - ${passed ? "✅ PASSED" : "❌ FAILED"}`;
}

console.log(createTestResult("Login", true));
console.log(createTestResult("Signup", false));

console.log("✅ Practice complete!");