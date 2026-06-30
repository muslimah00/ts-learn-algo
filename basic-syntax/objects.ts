// Module 4: Objects

console.log("🔹 OBJECTS");
console.log("═".repeat(40));

// Create an object
let testResult = {
    name: "Login Test",
    status: "PASSED",
    duration: 2.5,
    isAutomated: true
};

// Access values using dot notation
console.log(`Test: ${testResult.name}`);
console.log(`Status: ${testResult.status}`);
console.log(`Duration: ${testResult.duration}s`);
console.log(`Automated: ${testResult.isAutomated}`);