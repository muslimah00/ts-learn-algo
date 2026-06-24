console.log("═".repeat(40));
console.log("FUNCTIONS WITH PARAMETERS");

// function with parameter
function login(username: string, password: string) {
  console.log(`Logging in with username: ${username}`);
  console.log(`Password: ${"*".repeat(password.length)}`);
  console.log('Login attempt complete!');
}

// Call with different data
login("admin", "secret123");
login("tester", "password456");
login("guest", "guest123");

console.log("═".repeat(40));

// Function with multiple parameters
function createTestReport(testName: string, passed: boolean, duration: number) {
    console.log("📊 Test Report");
    console.log(`Test: ${testName}`);
    console.log(`Status: ${passed ? "✅ PASSED" : "❌ FAILED"}`);
    console.log(`Duration: ${duration} seconds`);
    console.log("─".repeat(30));
}

createTestReport("Login Test", true, 2.5);
createTestReport("Signup Test", false, 3.1);
createTestReport("Profile Test", true, 1.8);