/*
## Exercise 5: Early Return Pattern

**Scenario:** Refactor a nested validation function to use guard clauses.

**Part A — Understand the nested version:**
```javascript
function checkTestData(result, duration) {
    if (result !== null) {
        if (duration >= 0) {
            if (duration <= 10) {
                return "Valid: " + result + " in " + duration + "s";
            } else {
                return "Error: Duration too long";
            }
        } else {
            return "Error: Negative duration";
        }
    } else {
        return "Error: No result";
    }
}
```

**Part B — Rewrite using early return (guard clauses):**
- Check each error condition first and return immediately
- The happy path should be the last line

**Test with:** `(null, 3)`, `("PASSED", -1)`, `("PASSED", 15)`, `("PASSED", 2)`

**Expected Output (same for both versions):**
```
Error: No result
Error: Negative duration
Error: Duration too long
Valid: PASSED in 2s
```

---
*/

function checkTestData(result, duration) {
    if (result !== null) {
        if (duration >= 0) {
            if (duration <= 10) {
                return "Valid: " + result + " in " + duration + "s";
            } else {
                return "Error: Duration too long";
            }
        } else {
            return "Error: Negative duration";
        }
    } else {
        return "Error: No result";
    }
}
console.log(checkTestData(null,3));
console.log(checkTestData("PASSED",-1));
console.log(checkTestData("PASSED",15));
console.log(checkTestData("PASSED",2));