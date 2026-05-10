//Exercise 1
function configureTest(testName, browser="chrome", timeout=30000, environment="staging"){
console.log("Test: "+testName,"\nBrowser: "+browser,"\nTimeout: "+timeout,"\nenvironment : "+environment);
}

console.log("All Defaults");
configureTest("Login Test");
console.log();
console.log("Custom Browser");
configureTest("Login Test", "Firefox");
console.log();
console.log("Custom Browser and timeout");
configureTest("Login Test", "Safari", 60000);
console.log();
console.log("Custom env");
configureTest("Login Test",  "production");


//Excrcise no 2:
function validateFormGuard(username, password, age)
{
    if(username!=="")
        {
      if(password.length>=8)
        {
        if(age>=18)
            {
            return "Form is valid";
            }
        else{
            return "❌ Must be 18 or older ";
            }
      }
      else{
        return "❌ Password must be at least 8 characters";
      }

      
    }
    else{
         return "❌ Username is required";
    }

}

console.log(validateFormGuard("", "Test@123", 25));
console.log(validateFormGuard("john", "abc", 25));
console.log(validateFormGuard("john","Test@123",16));
console.log(validateFormGuard("john", "Test@123", 25));

//Exercise no 3:
// console.log("Exercise no 3");
// console.log();
// let `passwordValidators=[
// function hasMinLength(password){
//     if(password.length>=8){
//         return "true";
//     }
//     else{
//         return "False";
//     }
// }
//  function hasSpecialChar(password){
//     if(password.includes("@"&& password.includes"!" && password.includes("#"))){
//         return true;

//     }
//     else
//     {
//         return False;
//     }
//  }
//  function hasUppercase(password){
//        if(password.includes(/[A-Z]/.test(password))){
//         return true;
//        }
//        else{
//         return False;
//        }
//  }
// ];
// validatePassword(password){
//     for(let i=0;i<passwordValidators.length;i++){
//         console.log()
//     }
// }

//Exercise no 4:
console.log("Exercise No 4:");
console.log();
function makeUrlBuilder(baseUrl,path){
    return function (path){
        return baseUrl+path;

    } 
};
const stagingUrl = makeUrlBuilder("https://staging.example.com");
const productionUrl = makeUrlBuilder("https://example.com");

console.log("Staging urls:");
console.log(" ", stagingUrl("/login"));
console.log(" ", stagingUrl("/dashboard"));

console.log();
console.log("Production URLs:");
console.log(" ", productionUrl("/login"));
console.log(" ", productionUrl("/dashboard"));


// console.log();
// function makeUrlBuilder(baseUrl) {
//     // Return a new function
//     return function(path) {
//         return baseUrl + path;
//     };
// }

// // Create builders
// const stagingUrl = makeUrlBuilder("https://staging.example.com");
// const productionUrl = makeUrlBuilder("https://example.com");

// // Use builders
// console.log("Staging URLs:");
// console.log(" ", stagingUrl("/login"));
// console.log(" ", stagingUrl("/dashboard"));

// console.log("\nProduction URLs:");
// console.log(" ", productionUrl("/login"));
// console.log(" ", productionUrl("/dashboard"));