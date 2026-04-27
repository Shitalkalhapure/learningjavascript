/*
### Part 2: Design a Test Report

Create a new file called `test-report-formatter.js` and write code to print a test execution report for any application you've tested.

**Requirements:**
1. Print a test suite name (e.g., "Login Test Suite")
2. Print 5 different test cases with names
3. Each test should have a status: PASSED, FAILED, or SKIPPED
4. Use blank lines to make it readable
5. Print a summary at the end (e.g., "3 Passed, 2 Failed")
*/
console.log("=====================================");
console.log("LOGIN TEST SUITE");
console.log("=====================================");
console.log("Test 1: Login with valid credentials");
console.log("Status: PASSED");
console.log();
console.log("Test 2: Login with invalid password");
console.log("Status: FAILED");
console.log();
console.log("Test 3: Login with empty username field");
console.log("Status: FAILED");
console.log();
console.log("Test 4: Login with special characters in username");
console.log("Status: PASSED");
console.log();
console.log("Test 5: Remember me checkbox functionality");
console.log("Status: PASSED");
console.log();

console.log("=====================================");
console.log("TEST SUMMARY");
console.log("=====================================");
console.log("Total Tests: 5");
console.log("\u2705 Passed: 3");
console.log("\u274CFailed: 2");
console.log("=====================================");
