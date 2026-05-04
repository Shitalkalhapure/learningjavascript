/*## Exercise 1: Email Validation

**Scenario:** Before running login tests, validate the test email address.

**Requirements:**
1. Create a variable `email` with value `"testuser@example.com"`
2. Write an if-else statement that:
   - Checks if email contains both `@` AND `.`
   - If yes, print: `"✅ Valid email format"`
   - If no, print: `"❌ Invalid email format"`

**Hint:** Use the `.includes()` method:
```javascript
email.includes("@")  // Returns true if email contains @
```

**Test Cases:**
- `"testuser@example.com"` → Valid
- `"notanemail"` → Invalid
- `"missing@domain"` → Invalid (no dot)

**Example Output:**
```
Testing email: testuser@example.com
✅ Valid email format
```

---

*/
//test case 1-testuser@example.com` → Valid
let email="testuser@example.com";
if(email.includes("@") && email.includes(".")){
  console.log("✅ Valid email format");
}
else{
    console.log("❌ Invalid email format");
}

let result=(email.includes("@")&& email.includes("."))? console.log("✅ Valid email format"): console.log("❌ Invalid email format");

//test case 2-"notanemail"` → Invalid
console.log("test case 2");
email="testuserexample";
if(email.includes("@") && email.includes(".")){
  console.log("✅ Valid email format");
}
else{
    console.log("❌ Invalid email format");
}

 result=(email.includes("@")&& email.includes("."))? console.log("✅ Valid email format"): console.log("❌ Invalid email format");


 //test case 3-"missing@domain"` → Invalid (no dot)

console.log("test case 3");
email="testuserexample.com";
if(email.includes("@") && email.includes(".")){
  console.log("✅ Valid email format");
}
else{
    console.log("❌ Invalid email format");
}

 result=(email.includes("@")&& email.includes("."))? console.log("✅ Valid email format"): console.log("❌ Invalid email format");