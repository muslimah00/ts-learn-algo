// Module 5: Interfaces

console.log("🔹 INTERFACES");
console.log("═".repeat(40));

// 1. Define an interface
interface TestResult {
    name: string;
    status: "PASSED" | "FAILED" | "SKIPPED";  // Only these 3 allowed
    duration: number;
    isAutomated: boolean;
}

// 2. Use the interface
let test1: TestResult = {
    name: "Login Test",
    status: "PASSED",
    duration: 2.5,
    isAutomated: true
};

let test2: TestResult = {
    name: "Signup Test",
    status: "FAILED",
    duration: 3.1,
    isAutomated: true
};

// 3. Print them
console.log("Test 1:");
console.log(`  Name: ${test1.name}`);
console.log(`  Status: ${test1.status}`);
console.log(`  Duration: ${test1.duration}s`);
console.log(`  Automated: ${test1.isAutomated}`);

console.log("\nTest 2:");
console.log(`  Name: ${test2.name}`);
console.log(`  Status: ${test2.status}`);
console.log(`  Duration: ${test2.duration}s`);
console.log(`  Automated: ${test2.isAutomated}`);

// 4. Create a function that takes the interface as a parameter
console.log("\n🔹 QA EXAMPLE: Login Test Data");
console.log("═".repeat(40));

// Interface for login test data
interface LoginTestData {
    username: string;
    password: string;
    expectedResult: string;
    shouldPass: boolean;
}

// Create test data using the interface
let testData1: LoginTestData = {
    username: "admin",
    password: "secret123",
    expectedResult: "Welcome admin",
    shouldPass: true
};

let testData2: LoginTestData = {
    username: "wrong",
    password: "wrong",
    expectedResult: "Invalid credentials",
    shouldPass: false
};

let testData3: LoginTestData = {
    username: "Client",
    password: "client123",
    expectedResult: "Welcome Client",
    shouldPass: true
};

// Function that uses the interface
function runLoginTest(data: LoginTestData): void {
    console.log(`Testing: ${data.username}`);
    console.log(`  Expected: ${data.expectedResult}`);
    console.log(`  Should pass: ${data.shouldPass}`);
    console.log(`  Password: ${"*".repeat(data.password.length)}`);
    console.log("  ─".repeat(15));
}

runLoginTest(testData1);
runLoginTest(testData2);
runLoginTest(testData3);

// -----------------------------------------------------------------excercise-----------------------------------------------------------------

// Create an interface called TestSuite that has:
// - name (string)
// - totalTests (number)
// - passedTests (number)
// - status (string, can only be "running", "completed", "failed")

interface TestSuite{
  name: string;
  totalTests: number;
  passedTests: number;
  status: 'running' | 'completed' | 'failed';
}

// Then create two test suites using this interface
let testSuitData1: TestSuite = {
  name: 'login page',
  totalTests: 3,
  passedTests: 3,
  status: 'completed'

}

let testSuitData2: TestSuite = {
  name: 'create queue',
  totalTests: 5,
  passedTests: 1,
  status: 'running'

}

// Print their details
function result(data: TestSuite): void {
  console.log(`Running test for ${data.name}`)
  console.log(`With total test cases ${data.passedTests}/${data.totalTests}`)
  console.log(`Status running ${data.status}`)
  console.log('\n')
}

result(testSuitData1);
result(testSuitData2);