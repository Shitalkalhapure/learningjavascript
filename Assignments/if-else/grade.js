/*
## Exercise 4: Test Score Grading

**Scenario:** Convert test automation scores to letter grades.

**Requirements:**
1. Create a variable `score` with value `85`
2. Write an if-else-if statement that assigns grades:
   - 90 or above → `"Grade: A (Excellent)"`
   - 80-89 → `"Grade: B (Good)"`
   - 70-79 → `"Grade: C (Average)"`
   - 60-69 → `"Grade: D (Pass)"`
   - Below 60 → `"Grade: F (Fail)"`

**Test Cases:**
- `95` → A
- `85` → B
- `75` → C
- `65` → D
- `50` → F

**Important:** Pay attention to the ORDER of conditions! Most specific first.

**Example Output:**
```
Test Score: 85
Grade: B (Good)
```

---

*/

let score=55;
if(score>100){
    console.log("wring score");
}
else if(score>90 && score<100)
{
    console.log("score: A (Excellent");
}
else if(score>80 && score<=90){
    console.log("Grade: B (Good)");
}
else if(score>70 && score<=79){
    console.log("Grade: C (Average)");

}
else if(score>60 && score<=69){
    console.log("Grade: D (Pass)");

}
else
{
    console.log("Grade: F (Fail)")
}