console.log("🔹 ARRAY METHODS");
console.log("═".repeat(40));

let testCases = ['Login', 'Signup', 'Profile', 'Search', 'Logout'];

// 1. forEach - Print each test
console.log('\n All test')
testCases.forEach((test) => {
  console.log(` - ${test}`)
});

// 2. map - Create test IDs
console.log('\n Test ID')
let testID = testCases.map((test, index) => {
  return `TC-${String(index + 1).padStart(3, "0")}`;
})
console.log(testID);

// 3. filter - Find long tests
console.log("\n🔍 Tests with long names:");
let longTest = testCases.filter((test) => {
  return test.length > 6;
})
console.log(longTest)

// 4. Combine methods - Real QA example
console.log("\n📊 QA Example:");
let testResults = [
    { name: "Login", passed: true },
    { name: "Signup", passed: false },
    { name: "Profile", passed: true },
    { name: "Search", passed: false },
    { name: "Logout", passed: true }
];

let failedTests = testResults.filter((result) => {
  return result.passed === false
}) 

console.log(`failed test ${failedTests.length}`)
failedTests.forEach((test) => {
  console.log(`  - ${test.name}`);
})

console.log('='.repeat(80))

// Create an array of browser names: ["Chrome", "Firefox", "Safari", "Edge"]
let browserName= ["Chrome", "Firefox", "Safari", "Edge"]

// 1. Use forEach to print "Testing on [browser]"
browserName.forEach((browser) => {
  console.log(`Testing on ${browser}`)
})

// 2. Use map to create a new array with "browser-" added to each
let testNum = browserName.map((browserName, index) => {
  return `browser ${String(index+1)}`
})
console.log(testNum)

// 3. Use filter to keep only browsers with 6+ characters
let longBrowser = browserName.filter((browserName) => {
  return browserName.length >= 6
})

console.log(longBrowser)