/*
## Exercise 3: Calculate Test Scores

**Scenario:** Calculate statistics for test automation scores.

**Requirements:**
1. Create an array called `testScores` with these values:
   - 85, 92, 78, 95, 88, 73, 90, 87

2. Use a for loop to calculate:
   - Total of all scores
   - Average score
   - Highest score (you'll need to track this as you loop)
   - Lowest score (you'll need to track this as you loop)

**Hint for finding highest/lowest:**
```javascript
let highest = testScores[0];  // Start with first score
for (let i = 1; i < testScores.length; i++) {
    if (testScores[i] > highest) {
        highest = testScores[i];
    }
}
```

**Example Output:**
```
Test Score Analysis
━━━━━━━━━━━━━━━━━━━━━━━━━

Scores: [ 85, 92, 78, 95, 88, 73, 90, 87 ]

Calculating statistics...

Results:
  Total: 688
  Average: 86.0
  Highest: 95
  Lowest: 73
  */

  let testScores=[85, 92, 78, 95, 88, 73, 90, 87];
  let totalScore=0;
  for(let i=0;i<testScores.length;i++)
  {
    totalScore+=testScores[i];
  }
  console.log("Total score is: "+totalScore);
  let avgScore=totalScore/testScores.length;
  console.log("Average Score is: "+avgScore);
  let highestScore=testScores[0];
  for(let i=0;i<testScores.length;i++){
      if(testScores[i]>highestScore){
        highestScore=testScores[i];
      }

  }
  console.log("Highest Score is: "+highestScore);

  //calculate lowest score
  let lowestscore=testScores[0];
  for(let i=0;i<testScores.length;i++){
      if(testScores[i]<lowestscore){
        lowestscore=testScores[i];
      }

  }
  console.log("Lowset Score is: "+lowestscore);
