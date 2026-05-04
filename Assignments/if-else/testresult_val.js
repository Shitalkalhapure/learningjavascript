/*## Exercise 2: Test Result Categorizer

**Scenario:** Your test framework returns different status codes. You need to display appropriate messages.

**Requirements:**
1. Create a variable `testResult` with value `"PASSED"`
2. Write an if-else-if statement that handles:
   - `"PASSED"` → Print: `"✓ Test passed successfully"`
   - `"FAILED"` → Print: `"✗ Test failed - check logs"`
   - `"SKIPPED"` → Print: `"⊘ Test skipped"`
   - Anything else → Print: `"? Unknown test status"`

**Test Cases:**
Try running your code with each of these values:
- `"PASSED"`
- `"FAILED"`
- `""`
- `"PENDING"`

**Example Output:**
```
Test Status: PASSED
✓ Test passed successfully
```

---
*/
//test case1-passed
console.log("Test case 1 Passed");
let testResult="SKI";
if(testResult==="PASSED"){
    console.log("✓ Test passed successfully");
    }
else if(testResult==="FAILED")
{

    console.log("✗ Test failed - check logs");
}

else if(testResult==="SKIPPED")
{

    console.log("⊘ Test skipped");
}
else {
    console.log("? Unknown test status");
}