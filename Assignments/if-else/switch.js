/*
## Exercise 6: Switch — Basic Value Matching

**Scenario:** Exercise 2 used if-else-if to handle test results. Rewrite it using `switch` and notice how much cleaner it reads when matching one variable against several fixed values.

**Requirements:**
1. Create a variable `testResult` with value `"FAILED"`
2. Use a `switch` statement to print:
   - `"PASSED"` → `"✓ Test passed successfully"`
   - `"FAILED"` → `"✗ Test failed - check logs"`
   - `"SKIPPED"` → `"⊘ Test skipped"`
   - `"PENDING"` → `"⏳ Test pending - not yet run"`
   - anything else → `"? Unknown test status"`

**Starter template:**
```javascript
let testResult = "FAILED";

switch (testResult) {
    case "PASSED":
        // your code
        break;
    // add remaining cases
}
```

**Test with:** `"PASSED"`, `"FAILED"`, `"SKIPPED"`, `"PENDING"`, `"UNKNOWN"`

**Tricky question:** What happens if you remove all the `break` statements? Predict before trying.


*/
let testResult="UNKNOWN";
switch(testResult){
    case "PASSED": console.log("✓ Test passed successfully");
                    break;
    case "FAILED": console.log("✗ Test failed - check logs");
                    break;
    case "SKIPPED": console.log("⊘ Test skipped");
                    break;
    case "PENDING": console.log("⏳ Test pending - not yet run");
                    break;
    case "UNKNOWN": console.log("? Unknown test status");
                    break;
}