
/*## Exercise 1: Print All Test Cases

**Scenario:** Display all test cases in a test suite with numbering.

**Requirements:**
1. Create an array called `testCases` with these values:
   - "Login with valid credentials"
   - "Login with invalid password"
   - "Login with empty username"
   - "Logout functionality"
   - "Remember me checkbox"

2. Use a for loop to print each test case with:
   - Test number (starting from 1, not 0!)
   - Test case name

**Example Output:**
```
Login Module Test Suite
━━━━━━━━━━━━━━━━━━━━━━━━━

1. Login with valid credentials
2. Login with invalid password
3. Login with empty username
4. Logout functionality
5. Remember me checkbox

Total test cases: 5
```

---
*/
let testCases=["Login with valid credentials","Login with invalid password","Login with empty username","Logout functionality", "Remember me checkbox"];
for(let i=0;i<testCases.length;i++)
    {
   // console.log((i+1)+". "+testCases[i]);
}

//console.log("total test cases are: "+testCases.length);


console.log("using for..of loop");
let number=1;
for(let testcase of testCases){
    console.log(number+". "+testcase);
    number++
}
console.log("total test cases are: "+testCases.length);