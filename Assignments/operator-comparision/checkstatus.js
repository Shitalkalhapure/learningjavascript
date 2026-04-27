/*## Exercise 3: Test Status Validator

**Scenario:** A test is considered successful if status is "PASSED" OR "SKIPPED", AND there are no errors.

**Requirements:**
1. Create two variables:
   - `status` with value `"PASSED"`
   - `errorCount` with value `0`
2. Write an if-else statement that:
   - Checks if (status is "PASSED" OR "SKIPPED") AND errorCount equals 0
   - If yes, print: `"✅ Test completed successfully"`
   - If no, print: `"❌ Test has issues"`

**Test Cases:**
- `status="PASSED"`, `errorCount=0` → Success
- `status="SKIPPED"`, `errorCount=0` → Success
- `status="PASSED"`, `errorCount=2` → Issues
- `status="FAILED"`, `errorCount=0` → Issues

**Example Output:**
```
Test Status: PASSED
Error Count: 0
*/


let status="PASSED";
let errorCount=0;
let isStatusValid=(status==="PASSED" || status==="SKIPPED")
let hasError=(errorCount===0);
if(isStatusValid && hasError){
    console.log("✅ Test completed successfully");
    }
else
{
    console.log("❌ Test has issues");
}

//Test case 1-->status="PASSED"`, `errorCount=0` → Success
status="PASSED";
console.log("test case 1 resukt");
if(isStatusValid && hasError){
    console.log("✅ Test completed successfully");
    }
else
{
    console.log("❌ Test has issues");
}

//Test case 2-->status="SKIPPED"`, `errorCount=0` → Success
status="SKIPPED";
console.log("Test case 2 resukt");
if(isStatusValid && hasError){
    console.log("✅ Test completed successfully");
    }
else
{
    console.log("❌ Test has issues");
}

//Test case 3-->status="PASSED"`, `errorCount=2` → Issues
status="PASSED";
errorCount=2;
isStatusValid=(status==="PASSED" || status==="SKIPPED")
hasError=(errorCount===0);
console.log("Test case 3 resukt");
if(isStatusValid && hasError){
    console.log("✅ Test completed successfully");
    }
else
{
    console.log("❌ Test has issues");
}

//Test case 4-->status="FAILED"`, `errorCount=0` → Issues
status="FAILED";
errorCount=0;
isStatusValid=(status==="PASSED" || status==="SKIPPED")
hasError=(errorCount===0);
console.log("Test case 4 result");
if(isStatusValid && hasError){
    console.log("✅ Test completed successfully");
    }
else
{
    console.log("❌ Test has issues");
}