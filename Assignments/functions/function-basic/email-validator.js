function generateTestUser(fname,lastName){
    return {
        name: `${fname}${lastName}`,
        email: generateEmail(fname,lastName),
        userName: generateUsername(fname,lastName),
        password: "Test@123",
        userId: 1000,
        isActive: true,
    }
}

// Use helper functions from Part 1
let user1 = generateTestUser("John", "Doe");
let user2 = generateTestUser("Jane", "Smith");
console.log(user1);
console.log(user2);

function generateEmail(firstName, lastName) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@test.com`;
}

// Function to generate username
function generateUsername(firstName, lastName) {
    return firstName.toLowerCase() + lastName.toLowerCase();
}

// Function to generate password
function generatePassword(prefix) {
    return prefix + "@123";
}
function validateEmail(email){
    if(email.includes("@")&& email.includes(".")){
        return "Valid Email";
    }
    else
        return "Invalid Email";
}
console.log(validateEmail("test@example.com"));  // VALID
console.log(validateEmail("notanemail"));         // INVALID