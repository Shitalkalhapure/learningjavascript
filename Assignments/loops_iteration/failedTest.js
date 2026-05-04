/*

## Exercise 4: Find Failed Tests

**Scenario:** Identify and report all failed tests from a test run.

**Requirements:**
1. Create two parallel arrays:
   - `testNames`: ["Login", "Logout", "Search", "Checkout", "Payment", "Profile"]
   - `testResults`: ["PASSED", "FAILED", "PASSED", "FAILED", "PASSED", "FAILED"]

2. Use a for loop to:
   - Print all test results
   - Find and print ONLY the failed tests with their names
   - Count total failures

**Example Output:**
```
Test Execution Report
━━━━━━━━━━━━━━━━━━━━━━━━━

All Tests:
  1. Login: PASSED ✓
  2. Logout: FAILED ✗
  3. Search: PASSED ✓
  4. Checkout: FAILED ✗
  5. Payment: PASSED ✓
  6. Profile: FAILED ✗

Failed Tests (requires attention):
  - Logout
  - Checkout
  - Profile

Total failures: 3
```

---*/

let testNames=["Login", "Logout", "Search", "Checkout", "Payment", "Profile"];
let testResults=["PASSED", "FAILED", "PASSED", "FAILED", "PASSED", "FAILED"];
let number=1;
for(let i=0; i< testNames.length;i++){
    console.log(number, testNames[i]+ " "+ testResults[i]);
    
    number++;
}
//failed test
console.log("Failed Tests (requires attention):")

for (let i=0; i<testNames.length;i++){
    
if(testResults[i]=="FAILED"){
    console.log(" - " +testNames[i]);
}

}