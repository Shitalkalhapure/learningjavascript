/*
let testCases = ["Login", "Logout", "Search", "Checkout"];
for(let i=0;i<testCases.length;i++)
    {
    console.log(testCases[i]);

}
/*
Assignment is -
1. Find the highest and lowest numbers in the below array.
 
let scores = [85, 92, 78, 95, 88, 73, 90];
 
2. Find a particular value in an array and also get its index position.
 
let tests = ["Login", "Logout", "Search", "Checkout", "Payment"];
 
3. IN the given array, we have provided the status of the test cases,  
 
let statuses = ["PASSED", "PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED"];
 
You have to write a program whose outuput will tell you
- How many test cases passed
- How many failed
- How many skiped.
 
- Provide the pass percentages.


Assignment is - Find the highest and lowest numbers in the below array.
 
let scores = [85, 92, 78, 95, 88, 73, 90];
 
*/
 let scores = [85, 92, 78, 95, 88, 73, 90];
for(let testcase of scores ){
    console.log(testcase);
}


let testScores = [85, 92, 78, 95, 88, 73, 90];
//Find out all the values in an array whicha re greater than 80)
console.log("new");
for(let i=0;i<testScores.length;i++)
{
    if(testScores[i]>85)
    {
        console.log(testScores[i]);
    }
}
let testResult=["Passed","Passed","Failed","Passed","Failed","Passed"];
let result=testScores.map((score)=>score>80?"Passed": "Failed");
// let highScore=testScores.filter((score)=>score>80);
// result=testScores[score];
console.log("Result");
console.log(result);

let firstResult=testScores.find((score)=>score<80);
console.log(firstResult)
let allPassed=testScores.every((score)=>score>80);
console.log(allPassed);

let allFailed=testScores.some((score)=>score>80);
console.log(allPassed);
 //let allFailed=testScores.some((score)=>score>80);
//console.log(allPassed);


let tests=[
    {name: "Login test",status:"passed",duration:2.5},
    {name: "Logout test",status:"passed",duration:1.6},
    {name: "search test",status:"Failed",duration:5.3},
    {name: "Checkout test",status:"passed",duration:2.3},
]

tests.forEach((test) => console.log("-"+test.name+" "+test.status));
console.log();
function add(a,b){
    return a+b;
}
let arrayone=[10,20];
console.log(add(...arrayone));