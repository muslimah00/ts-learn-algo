// Example 1: !== (Not equal)
let statusCode = 400

if (statusCode != 200) {
  console.log('Response Failed')
}

// Example 2: && (AND)
let isLoggin = true
let hasItem = true

if (isLoggin && hasItem) {
  console.log('user can view cart')
} else {
  console.log('cannot view cart')
}

// Example 3: || (OR)
let a = false
let b = true

if (a || b) {
  console.log('hey its true')
} else {
  console.log('both of them agree')
}

// Example 4: Combine everything in a real QA scenario
let testIsPassed = false;
let errorCode = 500;
let retryCount = 2;
let maxRetries = 3;

if (testIsPassed) {
    console.log("✅ Test passed!");
} else if (errorCode === 500 && retryCount < maxRetries) {
    console.log(`🔄 Server error, retrying... (${retryCount + 1}/${maxRetries})`);
} else if (errorCode !== 200) {
    console.log(`❌ Test failed with error code: ${errorCode}`);
} else {
    console.log("⚠️ Unknown result");
}
