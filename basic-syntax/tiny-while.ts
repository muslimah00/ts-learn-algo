console.log("WHILE LOOP - Retry until success");

let attempts = 0;
let maxAttempts = 3;
let success = false;

while (!success && attempts < maxAttempts) {
    attempts++;
    console.log(`Attempt ${attempts}...`);
    
    // Simulate test passing on attempt 2
    if (attempts === 2) {
        success = true;
        console.log("✅ Test passed!");
    }
}

if (!success) {
    console.log("❌ Test failed after 3 attempts");
}

// Create a while loop that:
// 1. Starts with count = 0
// 2. Runs while count < 3
// 3. Prints "Running test" each time
// 4. Increases count by 1 each time

// Expected output:
// Running test 1
// Running test 2
// Running test 3

let startCount = 0;
let runs = 6;
let count = false;

while (startCount < runs) {
  startCount++;
  console.log(`running test ${startCount}`)

  if (startCount === 6) {
    success = true
  }
}