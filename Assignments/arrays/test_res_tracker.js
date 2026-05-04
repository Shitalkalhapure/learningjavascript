/*## Exercise 2: Test Results Tracker

**Scenario:** Build a test results array dynamically as tests run.

**Requirements:**
1. Create an empty array called `testResults`
2. "Run" 5 tests by adding these results one by one:
   - "PASSED"
   - "PASSED"
   - "FAILED"
   - "PASSED"
   - "SKIPPED"
3. After adding each result, print: "Test X completed: [RESULT]"
4. At the end, print:
   - Total tests run
   - The complete results array
   - Check if "FAILED" exists (using indexOf)

**Example Output:**
```
Running Test Suite...

Test 1 completed: PASSED
Test 2 completed: PASSED
Test 3 completed: FAILED
Test 4 completed: PASSED
Test 5 completed: SKIPPED

Test Summary:
Total tests run: 5
Results: [ 'PASSED', 'PASSED', 'FAILED', 'PASSED', 'SKIPPED' ]
Contains failures: Yes (found at index 2)
```

---

*/
let testResults=new Array();

testResults.push("PASSED");
console.log("Test 1 completed:"+testResults[0]);
testResults.push("PASSED");
console.log("Test 1 completed:"+testResults[1]);
testResults.push("FAILED");
console.log("Test 1 completed:"+testResults[2]);
testResults.push("PASSED");
console.log("Test 1 completed:"+testResults[3]);
testResults.push("SKIPPED");
console.log("Test 1 completed:"+testResults[4]);

//console.log("Test Summary");
//console.log("Total tests run:"+(testResults.length));

//console.log("results are:"+"["+testResults[0]+","+testResults[1]+","+testResults[2]+","+testResults[3]+","+testResults[4]+"]");

const hasFailure=testResults.includes("FAILED");
console.log(hasFailure);
const failureIndex=testResults.indexOf("FAILED");
console.log(failureIndex);