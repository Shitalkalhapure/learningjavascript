/*
## Exercise 3: Password Strength Checker

**Scenario:** Validate password strength for test user creation.

**Requirements:**
1. Create a variable `password` with value `"Test@123"`
2. Write an if-else-if statement that checks password length:
   - Less than 6 characters → `"❌ Weak password - too short"`
   - Less than 10 characters → `"⚠️ Medium password strength"`
   - 10 or more characters → `"✅ Strong password"`

**Test Cases:**
- `"Test"` (4 chars) → Weak
- `"Test@123"` (8 chars) → Medium
- `"Test@12345"` (10 chars) → Strong

**Hint:** Use `.length` property:
```javascript
password.length  // Returns the number of characters
```

**Example Output:**
```
Password: Test@123
Length: 8 characters
⚠️ Medium password strength
```

---
*/
let password="Tes";
if(password.length <6){
    console.log("❌ Weak password - too short");
}
else if(password.length < 10 ){
    console.log("⚠️ Medium password strength")
}
else 
{
    console.log("✅ Strong password")
}