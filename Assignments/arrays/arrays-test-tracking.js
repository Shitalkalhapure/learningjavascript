/*## Exercise 1: Test Suite Array

**Scenario:** Create an array to store test case names for a login module.

**Requirements:**
1. Create an array called `testCases` with these 5 test names:
   - "Valid credentials"
   - "Invalid password"
   - "Empty username"
   - "Empty password"
   - "Remember me checkbox"

2. Print the following:
   - The complete array
   - Total number of test cases
   - The first test case
   - The last test case (use .length, not hard-coded index!)

**Example Output:**
```
Test Suite: Login Module

Test Cases:
[ 'Valid credentials',
  'Invalid password',
  'Empty username',
  'Empty password',
  'Remember me checkbox' ]

Total test cases: 5
First test: Valid credentials
Last test: Remember me checkbox
```

---
*/

let testCases=["Valid credentials", "Invalid password","Empty username","Empty password","Remember me checkbox"];
let total;
console.log("testcase elements are:"+testCases);
console.log("Total number of elements:");
for(let i=0;i<testCases.length;i++)
{
     total=i+1;
}
console.log("Total test cases are: "+total);
for(let i=0;i<1;i++){
    console.log("First test case is: "+testCases[i]);
}

let j=testCases.length;
       console.log("Last test case is: "+testCases[j-1]);
    
