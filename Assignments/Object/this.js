/*
## Exercise 4: Object Methods and 'this' Keyword

**Scenario:** Create objects with methods to simulate a test runner.

**Requirements:**
1. Create an object called `testRunner` with:
   - name: "Login Suite"
   - totalTests: 5
   - passedTests: 0
   - failedTests: 0

2. Add these methods to the object:
   - `start()` - prints "Running test suite: [name]"
   - `pass()` - increments passedTests and prints the count
   - `fail()` - increments failedTests and prints the count
   - `getReport()` - prints a summary with pass rate

3. Call the methods to:
   - Start the suite
   - Mark 3 tests as passed
   - Mark 1 test as failed
   - Generate the report

4. Create a second object `testCase` with methods:
   - `start()` - sets status to "RUNNING" and records start time
   - `pass()` - sets status to "PASSED" and calculates duration
   - `fail(reason)` - sets status to "FAILED" with reason
   - Properties: name, status, duration, startTime

**Example Output:**
```
Test Runner with Methods
━━━━━━━━━━━━━━━━━━━━━━━━━

Running test suite: Login Suite

✓ Test passed! Total passed: 1
✓ Test passed! Total passed: 2
✓ Test passed! Total passed: 3
✗ Test failed! Total failed: 1

Test Suite Report:
  Name: Login Suite
  Total tests: 5
  Passed: 3 (60.0%)
  Failed: 1 (20.0%)
  Not yet run: 1

━━━━━━━━━━━━━━━━━━━━━━━━━

Test Case with Methods:

✓ Started: Login Test
  Status: RUNNING

✓ Login Test PASSED
  Duration: 0.05s
```
*/
let testRunner = {
    name: "Login Suite",
    totalTests: 5,
    passedTests: 0,
    failedTests: 0,

    start() {
        console.log(`Starting Test Suite: ${this.name}`);
    },

    pass() {
        this.passedTests++;
        console.log(`Passed Tests: ${this.passedTests}`);
    },

    fail() {
        this.failedTests++;
        console.log(`Failed Tests: ${this.failedTests}`);
    },

    getReport() {
        let passRate = (this.passedTests / this.totalTests) * 100;

        console.log("\n----- Test Report -----");
        console.log("Suite Name:", this.name);
        console.log("Total Tests:", this.totalTests);
        console.log("Passed:", this.passedTests);
        console.log("Failed:", this.failedTests);
        console.log("Pass Rate:", passRate.toFixed(2) + "%");
    }
};

// Call the methods
testRunner.start();

testRunner.pass();
testRunner.pass();
testRunner.pass();

testRunner.fail();

testRunner.getReport();


// Second object: testCase

let testCase = {
    name: "Login Test",
    status: "NOT STARTED",
    duration: 0,
    startTime: null,

    start() {
        this.status = "RUNNING";
        this.startTime = Date.now();

        console.log(`Test "${this.name}" started`);
    },

    pass() {
        this.status = "PASSED";
        this.duration = (Date.now() - this.startTime) / 1000;

        console.log(`Test "${this.name}" PASSED`);
        console.log(`Duration: ${this.duration.toFixed(2)}s`);
    },

    fail(reason) {
        this.status = "FAILED";
        this.duration = (Date.now() - this.startTime) / 1000;

        console.log(`Test "${this.name}" FAILED`);
        console.log(`Reason: ${reason}`);
        console.log(`Duration: ${this.duration.toFixed(2)}s`);
    }
};

// Example usage
testCase.start();

// Simulate test completion
setTimeout(() => {
    testCase.pass();

    console.log("\nFinal Test Case Object:");
    console.log(testCase);
}, 2000);

