/*
Exercise 2: Login Credentials Validator

**Scenario:** A user can login with EITHER (username AND password) OR email.

**Requirements:**
1. Create three variables:
   - `username` with value `"testuser"`
   - `password` with value `"Test@123"`
   - `email` with value `""`
2. Write an if-else statement that:
   - Checks if (username is NOT empty AND password is NOT empty) OR email is NOT empty
   - If yes, print: `"✅ Sufficient login credentials"`
   - If no, print: `"❌ Insufficient credentials - provide username+password OR email"`

**Hint:** Use parentheses to group the AND condition:
```javascript
if ((condition1 && condition2) || condition3) {
```

**Test Cases:**
- `username="testuser"`, `password="Test@123"`, `email=""` → Valid
- `username="testuser"`, `password=""`, `email=""` → Invalid
- `username=""`, `password=""`, `email="test@example.com"` → Valid

**Example Output:**
```
Checking credentials...
Username: testuser
Password: ******** (8 characters)
Email: (empty)
*/

let username="testuser";
let password="Test@123";
let email="";
if(username!="" && password!="" ||email!="")
{
    console.log("✅ Sufficient login credentials");
}
else{
    console.log("❌ Insufficient credentials - provide username+password OR email");
}

//Test case -1username="testuser"`, `password="Test@123"`, `email=""` → Valid
username="testuser";
password="Test@123";
email="";
console.log("Test case 1:");
if(username!="" && password!="" ||email!="")
{
    console.log("✅ Sufficient login credentials");
}
else{
    console.log("❌ Insufficient credentials - provide username+password OR email");
}


//Test case -2-username="testuser"`, `password=""`, `email=""` → Invalid

username="testuser";
password="";
email="";
console.log("Test case 2 Result");
if(username!="" && password!="" ||email!="")
{
    console.log("✅ Sufficient login credentials");
}
else{
    console.log("❌ Insufficient credentials - provide username+password OR email");
}

//Test case -3`username=""`, `password=""`, `email="test@example.com"` → Valid

username="";
password="";
email="test@example.com";
console.log("Test case 3 Result");
if(username!="" && password!="" ||email!="")
{
    console.log("✅ Sufficient login credentials");
}
else{
    console.log("❌ Insufficient credentials - provide username+password OR email");
}