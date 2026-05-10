/*
## Exercise 2: Test User Objects

**Scenario:** Create multiple test user objects.

**Requirements:**
1. Create 3 test user objects with these properties:
   - username
   - password
   - email
   - role

2. Store all 3 users in an array called `testUsers`

3. Loop through the array and print each user's details

4. Count how many users have role "admin" vs "user"

**Example Output:**
```
Test Users Database
━━━━━━━━━━━━━━━━━━━━━━━━━

User 1:
  Username: admin@test.com
  Password: ********
  Email: admin@test.com
  Role: admin

User 2:
  Username: user1@test.com
  Password: ********
  Email: user1@test.com
  Role: user

User 3:
  Username: user2@test.com
  Password: ********
  Email: user2@test.com
  Role: user

Summary:
  Total users: 3
  Admins: 1
  Regular users: 2
  */

  let testUsers=[
    {
        Username: "admin@test.com",
        Password: "********",
        Email: "admin@test.com",
        Role: "admin",
    },
     {
        Username: "user1@test.com",
        Password: "********",
        Email: "user1@test.com",
        Role: "user",
    },
     {
        Username: "user2@test.com",
        Password: "********",
        Email: "user2@test.com",
        Role: "user",
    }
  ]



  for(let i=0; i<testUsers.length;i++)
  {
    console.log(testUsers[i]);
  }

  console.log("summary");
  console.log("Total Users:"+testUsers.length);
  let countAdmin=0;
  for(let i=0;i<testUsers.length;i++){
    if(testUsers[i].Role==="admin"){
        countAdmin++;
    }
  }
  console.log("Admin: "+countAdmin);
  let countUser=0;
  for(let i=0;i<testUsers.length;i++){
    if(testUsers[i].Role==="user"){
        countUser++;
    }
  }
  console.log("User: "+countUser);