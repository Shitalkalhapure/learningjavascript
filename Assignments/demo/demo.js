
/*
testResult="PASSED";
switch(testResult)
{
    case "PASSED":
    console.log("PASSED");
    break;
   case "FAILED":
   console.log("FAILED");
   break;
   case "SKIPPED":
   console.log("SKIPPED");
   break
}


const x=8;
switch(true){
    case (x>0 && x<10):
        console.log("Between 0 to 10");
        break;
        case x>10 && x<20:
            console.log("Between 10 to 20");
            break
}
switch(x){
    case function(){
        return 5;
    }:
        console.log("nope");
}


*/
let studentGrade = 'A';   
let result;  
  
switch (studentGrade) {  
    case 'A':  
    case 'B':  
    case 'C':  
        result = "Grade is very good.";   
        break;  
    case 'D':  
        result = "Grade is poor.";  
        break;  
    default:  
        result = "No grade is achieved.";    
}  
  
console.log(result);