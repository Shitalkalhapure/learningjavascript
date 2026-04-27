/*### Part 2: Test Data Generator

Create a new file called `test-user-generator.js` and create multiple test user credentials.

**Requirements:**
- Create 3 different test users
- Each user should have: firstName, lastName, email, password
- Use descriptive variable names (user1FirstName, user1Email, etc.)
- Print all users in a formatted table-like structure*?
*?
*/
let firstName="John";
let lastName="Doe";
let userEmail="john.doe@test.com";
let password="JohnPass@123";


console.log("=========================================");
console.log("Total User=3");
console.log("=========================================");


console.log("Name: "+firstName+" "+lastName);
console.log("Email: "+userEmail);
console.log("Password: "+password)
console.log("----------------------")

//second user
firstName="Jane";
 lastName="Smith";
 userEmail="jane.smith@test.com";
 password="JanePass@456";
console.log("USER 2:");
console.log("Name: "+firstName+" "+lastName);
console.log("Email: "+userEmail);
console.log("Password: "+password)
console.log("----------------------");

//Third user
firstName="Bob";
 lastName="Johnson";
 userEmail="bob.johnson@test.com";
 password="BobPass@789";
console.log("USER 3:");
console.log("Name: "+firstName+" "+lastName);
console.log("Email: "+userEmail);
console.log("Password: "+password)
console.log("----------------------");