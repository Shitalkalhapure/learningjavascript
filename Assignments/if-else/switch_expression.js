/*
## Exercise 8: Switch with Expressions

`switch` compares using `===`. So you can switch on **any expression** that produces a value — not just a plain variable.

### 8a: Switch on a computed value (grade buckets)

Instead of `if (score >= 90)` chains, compute the "tens digit" and switch on that:

```javascript
let score = 85;

// Math.floor(85 / 10) = 8  → maps to grade B
switch (Math.floor(score / 10)) {
    case 10:
    case 9:
        console.log("Grade: A (Excellent)");
        break;
    case 8:
        console.log("Grade: B (Good)");
        break;
    case 7:
        console.log("Grade: C (Average)");
        break;
    case 6:
        console.log("Grade: D (Pass)");
        break;
    default:
        console.log("Grade: F (Fail)");
}
```

**Test with scores:** `100`, `95`, `85`, `75`, `65`, `55`

**Why `case 10` and `case 9` are grouped:** A score of 100 gives `Math.floor(100/10) = 10`, so it needs its own case that falls through to the grade A block.

### 8b: Switch on `true` — range matching with expressions

When you need range checks but want switch style, switch on the literal `true` and put the condition in each `case`:

```javascript
let duration = 3.5;  // test duration in seconds

switch (true) {
    case duration < 1:
        console.log("⚡ Very fast test");
        break;
    case duration < 3:
        console.log("✅ Fast test");
        break;
    case duration < 6:
        console.log("⚠️ Acceptable — consider optimising");
        break;
    default:
        console.log("🐢 Slow test — needs attention");
}
```

**Test with durations:** `0.5`, `2`, `4`, `8`

**Note:** `switch(true)` works because each `case` expression evaluates to `true` or `false`. The first `case` that equals `true` wins. Use this sparingly — if-else-if is often clearer for ranges.

### 8c: Tricky questions — predict the output before running

**Snippet A — what prints?**
```javascript
let priority = "high";

switch (priority) {
    case "High":
        console.log("Urgent");
        break;
    case "high":
        console.log("Also urgent");
        break;
}
```
What does this show? Why? (Hint: `switch` uses `===`)

**Snippet B — what prints?**
```javascript
let x = 2;

switch (x) {
    case 1:
        console.log("one");
    case 2:
        console.log("two");
    case 3:
        console.log("three");
    default:
        console.log("other");
}
```
What does this show? Why? How do you fix it to print only `"two"`?

**Snippet C — switch vs if-else, which should you choose?**

| Situation | Better choice |
|---|---|
| Matching one variable against 5+ fixed string/number values | `switch` |
| Checking ranges (`score >= 80`) | `if-else-if` |
| Multiple conditions combined with `&&` or `||` | `if-else-if` |
| Grouping several values with the same outcome | `switch` (fall-through) |
| Just two outcomes | ternary or `if-else` |

---
*/

let score =155;
let result=Math.floor(score/10);
console.log(result);
// Math.floor(85 / 10) = 8  → maps to grade B
switch (Math.floor(score / 10)) {
    case 11:  result=Math.floor(score/10);
          if(result>10){
           console.log("Wrong input");
                }
                break
    case 10:
    case 9:
        console.log("Grade: A (Excellent)");
        break;
    case 8:
        console.log("Grade: B (Good)");
        break;
    case 7:
        console.log("Grade: C (Average)");
        break;
    case 6:
        console.log("Grade: D (Pass)");
        break;
    default:
        console.log("Grade: F (Fail)");
}

let duration = 8;  // test duration in seconds

switch (true) {
    case duration < 1:
        console.log("⚡ Very fast test");
        break;
    case duration < 3:
        console.log("✅ Fast test");
        break;
    case duration < 6:
        console.log("⚠️ Acceptable — consider optimising");
        break;
    default:
        console.log("🐢 Slow test — needs attention");
     }   

     let priority = "High";

switch (priority) {
    case "High":
        console.log("Urgent");
        break;
    case "high":
        console.log("Also urgent");
        break;
}
let x = 2;

switch (x) {
    case 1:
        console.log("one");
    case 2:
        console.log("two");
    case 3:
        console.log("three");
    default:
        console.log("other");
}