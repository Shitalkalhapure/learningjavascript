/*
## Exercise 4: Response Time Validator

**Scenario:** Performance test - response time must be less than 3 seconds.

**Requirements:**
1. Create a variable `responseTime` with value `2.5`
2. Write an if-else statement that:
   - Checks if responseTime < 3
   - If yes, print: `"✅ Performance test PASSED (response time: X seconds)"`
   - If no, print: `"❌ Performance test FAILED (response time: X seconds, threshold: 3 seconds)"`

**Test Cases:**
- `2.5` → PASSED
- `3.0` → FAILED (not less than 3)
- `2.999` → PASSED
- `3.5` → FAILED

**Example Output:**
```
Response Time Test
Threshold: 3 seconds
Actual: 2.5 seconds

✅ Performance test PASSED (response time: 2.5 seconds)
```

---
*/

let responseTime=2.5;
console.log("Response Time Test");
console.log("Threshold: 3 seconds");
console.log("Actual: "+responseTime)

if(responseTime<3){
    console.log("✅ Performance test PASSED (response time: 2.5 seconds)");
}
else{
    console.log("❌ Performance test FAILED (response time: X seconds, threshold: 3");
}
//test case-1 
 responseTime=3.0;
console.log("Response Time Test 1");
console.log("Threshold: 3 seconds");
console.log("Actual: "+responseTime)

if(responseTime<3){
    console.log("✅ Performance test PASSED (response time: 2.5 seconds)");
}
else{
    console.log("❌ Performance test FAILED (response time: X seconds, threshold: 3");
}

//test case-2 
 responseTime=2.999;
console.log("Response Time Test 2");
console.log("Threshold: 3 seconds");
console.log("Actual: "+responseTime)

if(responseTime<3){
    console.log("✅ Performance test PASSED (response time: 2.5 seconds)");
}
else{
    console.log("❌ Performance test FAILED (response time: X seconds, threshold: 3");
}

//test case-3 
 responseTime=3.5;
console.log("Response Time Test 3");
console.log("Threshold: 3 seconds");
console.log("Actual: "+responseTime)

if(responseTime<3){
    console.log("✅ Performance test PASSED (response time: 2.5 seconds)");
}
else{
    console.log("❌ Performance test FAILED (response time: X seconds, threshold: 3");
}