let testData={
     username: "testuser@example.com",
   password: "Test@123",
   sessionToken: "abc123xyz",
   firstName: "John",
   lastName: "Doe",
}

console.log(testData);

delete(testData.password);
delete(testData.sessionToken);

console.log(testData);

console.log("password" in testData);