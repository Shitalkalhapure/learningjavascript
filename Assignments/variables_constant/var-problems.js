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
console.log("Status before declaration: " + testStatus1);
var testStatus1 = "PASSED";
console.log("Status after declaration: " + testStatus1);
testStatus="Passed";
console.log("====================================");
console.log("Final Status:"+testStatus);
console.log("Test Duration=2.5 seconds")
console.log("====================================");


//if block with var 
if (true) {
    var tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser);  // Does this crash or print?

/*
output
Inside block: admin@test.com
Outside block: admin@test.com
*/
//if block with let


console.log("with let var");
if (true) {
    let tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser);  // Does this crash or print

/*output
with let var
Inside block: admin@test.com
Outside block: admin@test.com*/


/**Step 3 — `var` in a for-loop leaks the counter**
 * */

for (var i = 0; i < 3; i++) {
    console.log("Running test step " + i);
}
console.log("After loop, i = " + i);   // What is i here?
/*output using var
Running test step 0
Running test step 1
Running test step 2
After loop, i = 3
*/

for (let i = 0; i < 3; i++) {
    console.log("Running test step " + i);
}
console.log("After loop, i = " + i);   // What is i here?
/*output using var
Running test step 0
Running test step 1
Running test step 2
After loop, i = 3
*/