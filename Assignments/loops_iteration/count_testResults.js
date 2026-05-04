/*
## Exercise 2: Count Test Results

**Scenario:** Analyze test execution results and generate statistics.

**Requirements:**
1. Create an array called `testResults` with these values:
   - "PASSED", "PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED", "FAILED", "PASSED"

2. Use a for loop to count:
   - Total tests
   - PASSED tests
   - FAILED tests
   - SKIPPED tests

3. Calculate and print:
   - Pass rate (percentage)
   - Fail rate (percentage)

**Example Output:**
```
Test Execution Results
━━━━━━━━━━━━━━━━━━━━━━━━━

Counting results...

Test Statistics:
  Total tests: 8
  Passed: 5 ✓
  Failed: 2 ✗
  Skipped: 1 ⊘

  Pass rate: 62.5%
  Fail rate: 25.0%
```
*/
let testResults=["PASSED", "PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED", "FAILED", "PASSED"];
console.log("Total test are: "+testResults.length);
console.log("passed test:");
console.log()
let passedCount=0;
for(let i=0;i<testResults.length;i++)
{
if(testResults[i]=="PASSED"){
    passedCount++;

}}
console.log("PASSED Test: "+passedCount);

let failedCount=0;


for(let i=0;i<testResults.length;i++)
{
if(testResults[i]=="FAILED"){
    failedCount++;
}

}
console.log("FAILED Test: "+failedCount);
let skippedCount=0;
for(let i=0;i<testResults.length;i++)
{
if(testResults[i]=="SKIPPED"){
    skippedCount++;
}

}
console.log("SKIPPED Test: "+skippedCount);

console.log("Passed rate");
let passedRate=(passedCount/testResults.length)*100;
console.log("Passed rate is: "+passedRate+"%");
let failedRate=(failedCount/testResults.length)*100;
console.log("Failed rate is: "+failedRate+"%");