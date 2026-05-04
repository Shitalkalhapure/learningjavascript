
/*## Exercise 4: Test Score Analysis

**Scenario:** Store and analyze test automation scores.

**Requirements:**
1. Create an array called `testScores` with these values:
   - 85, 92, 78, 95, 88, 73, 90

2. Calculate and print:
   - Total number of scores
   - First score
   - Last score
   - Check if score 95 exists in the array

**Example Output:**
```
Test Score Analysis

Scores: [ 85, 92, 78, 95, 88, 73, 90 ]
Total scores: 7

First score: 85
Last score: 90

Checking for specific scores...
Score 95 found: Yes (at index 3)
Score 100 found: No (index: -1)
```
---

## Common Mistakes to Avoid

**❌ Off-by-one error accessing last element:**
```javascript
// Wrong - goes beyond array
let last = array[array.length];  // undefined!

// Correct
let last = array[array.length - 1];
```

**❌ Forgetting arrays are zero-indexed:**
```javascript
// Wrong - first element is at index 0
console.log(array[1]);  // This is the SECOND element!

// Correct - first element
console.log(array[0]);  // This is the FIRST element
```

---
*/
let testScores=[85, 92, 78, 95, 88, 73, 90];
console.log(testScores.length);
let total=0;
//calculate score
for(let i=0;i<testScores.length;i++){
    total+=testScores[i];
    console.log(i+1 + "position and score is :"+testScores[i]);
    console.log("total running score is: "+total);
}

//check 95 exists in array
let hasExist=testScores.includes(95);
console.log(hasExist);


