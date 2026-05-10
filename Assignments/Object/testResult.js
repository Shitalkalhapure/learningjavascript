/*## Exercise 3: Test Results Array

**Scenario:** Create an array of test result objects and calculate statistics.

**Requirements:**
1. Create an array called `testResults` with 5 test objects
2. Each test object should have:
   - name (test name)
   - result ("PASSED", "FAILED", or "SKIPPED")
   - duration (in seconds)

3. Loop through and print each test result

4. Calculate and print:
   - Total tests
   - Passed count
   - Failed count
   - Skipped count
   - Pass rate (percentage)
   - Total duration

**Example Output:**
```
Test Execution Report
━━━━━━━━━━━━━━━━━━━━━━━━━

Test Results:

✓ 1. Login Test
  Result: PASSED
  Duration: 2.5s

✗ 2. Logout Test
  Result: FAILED
  Duration: 1.8s

✓ 3. Search Test
  Result: PASSED
  Duration: 3.2s

⊘ 4. Checkout Test
  Result: SKIPPED
  Duration: 0.0s

✓ 5. Payment Test
  Result: PASSED
  Duration: 2.1s

Statistics:
━━━━━━━━━━━━━━━━━━━━━━━━━
  Total tests: 5
  Passed: 3 (60.0%)
  Failed: 1 (20.0%)
  Skipped: 1 (20.0%)

  Total duration: 9.6s
  Average duration: 1.9s
```

*/
let testResults=[
    {
        name:"✓ 1.Login Test",
        Result: "PASSED",
        Duration: "2.5",
    },

{
        name:"✗ 2. Logout Test",
        Result: "FAILED",
        Duration: "1.8",
    },
    {
        name:"✓ 3.Search Test",
        Result: "PASSED",
        Duration: "3.2",
    },
    {
        name:"⊘ 4.Checkout Test",
        Result: "SKIPPED",
        Duration: "0.0",
    },
    {
        name:"✓ 5. Payment Test",
        Result: "PASSED",
        Duration: "2.1",
    },

]

console.log("Statistics:");
console.log("===================");
console.log("Total tests: " + testResults.length);
let passedTests=0;
for(let i=0;i<testResults.length;i++){
    if(testResults[i].Result==="PASSED"){
        passedTests++;
    }
}
let passedPer=passedTests/testResults.length*100;

console.log("Passed : "+ passedTests +" ("+ passedPer.toFixed(2) +")%");

let failedTests=0;
for(let i=0;i<testResults.length;i++){
    if(testResults[i].Result==="FAILED"){
        failedTests++;
    }
}
let failedPer=failedTests/testResults.length*100;

console.log("Failed : "+ failedTests +" ("+ failedPer.toFixed(2) +")%");

let skippedTests=0;
for(let i=0;i<testResults.length;i++){
    if(testResults[i].Result==="SKIPPED"){
        skippedTests++;
    }
}
let skippedPer=skippedTests/testResults.length*100;

console.log("Skipped : "+ skippedTests +" ("+ skippedPer.toFixed(2) +")%");
let totalDuration=0;
for(let i=0;i<testResults.length;i++){
    totalDuration += parseFloat(testResults[i].Duration);

    console.log(totalDuration);
}

