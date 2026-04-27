/*
### Part 3: Test Flow Simulation

Create a new file called `test-execution-flow.js` and simulate a test execution flow where variable values change.

**Requirements:**
- Create a variable for test status
- Show how it changes during test execution
- Create variables for test details (test name, step number, etc.)
- Print the flow as it progresses
*/

let testStatus= "IN PROGRESS";
const testName="Login Functionality Test";
const Tester="Shital";
let userName="testuser@example.com"
let stepno="Step 1: Opening browser";

console.log("====================================");
console.log("Test Execution flow");
console.log("====================================");
console.log("Test Name: "+testName);
console.log("Tester: "+Tester);
console.log();
console.log(stepno);
console.log("Test Status: "+testStatus);
console.log();
 stepno="Step 2: Navigating to login page";
console.log(stepno);
console.log("Test Status: "+testStatus);
console.log();
stepno="Step 3: Entering credentials";
console.log(stepno);
console.log("Username: "+userName);
console.log("Test Status: "+testStatus);
console.log(); 
stepno="Step 4: Clicking login button";
console.log(stepno);
console.log("Test Status: "+testStatus);
console.log();
stepno="Step 5: Verifying dashboard";

console.log(stepno);
testStatus="Completed";
console.log("Test Status: "+testStatus);
console.log();
testStatus="Passed";
console.log("====================================");
console.log("Final Status:"+testStatus);
console.log("Test Duration=2.5 seconds")
console.log("====================================");
