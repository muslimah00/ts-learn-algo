let testStatus = 'untested' 

if (testStatus === 'passed') {
  console.log('Test passed')
} else if (testStatus === 'failed') {
  console.log('test is failed')
} else {
  console.log('test is skipped')
}

// Create a variable called browser
// Use if/else if/else to check:
// - "chrome" → "Running on Chrome"
// - "firefox" → "Running on Firefox"  
// - "safari" → "Running on Safari"
// - anything else → "Unknown browser"

// Test with different values

let browser = 'opera'

if (browser === 'chrome') {
  console.log('Running on Chrome')
} else if (browser === 'firefox') {
  console.log('Running on Firefox')
} else if (browser === 'safari') {
  console.log('Running on Safari')
} else {
  console.log('unknown browser')
}