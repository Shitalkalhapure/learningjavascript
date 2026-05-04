/*
## Exercise 7: Switch — Grouping Cases (Multiple Cases, One Outcome)

**Scenario:** Map HTTP status codes to categories. Some codes share the same message — use fall-through to group them.

**Requirements:**

```javascript
let statusCode = 401;

switch (statusCode) {
    case 200:
        // "✅ 200 OK — request successful"
        break;
    case 201:
        // "✅ 201 Created — resource created"
        break;
    case 400:
    case 401:
    case 403:
        // Group these: "❌ Client error — check your request"
        // (400, 401, and 403 all print the same message — intentional fall-through)
        break;
    case 404:
        // "❌ 404 Not Found — endpoint does not exist"
        break;
    case 500:
    case 502:
    case 503:
        // Group these: "🔥 Server error — backend issue"
        break;
    default:
        // "? Unknown status code: " + statusCode
}
```

**Test with:** `200`, `201`, `400`, `401`, `403`, `404`, `500`, `502`, `503`, `418`

**Key concept:** When multiple `case` labels appear with no `break` between them, they all fall through to the same block. This is the **only** intentional use of fall-through.

---
*/
let statusCode = 505;

switch (statusCode) {
    case 200:
        // "✅ 200 OK — request successful"
         console.log("✅ 200 OK — request successful");
        break;
    case 201:
        // "✅ 201 Created — resource created"
        console.log("✅ 201 Created — resource created");
        break;
    case 400:
    case 401:
    case 403:
        // Group these: "❌ Client error — check your request"
        // (400, 401, and 403 all print the same message — intentional fall-through)
        console.log("❌ Client error — check your request");
        break;
    case 404:
        // "❌ 404 Not Found — endpoint does not exist"
        console.log("❌ 404 Not Found — endpoint does not exist")
        break;
    case 500:
    case 502:
    case 503:
        // Group these: "🔥 Server error — backend issue"
        console.log("🔥 Server error — backend issue")
        break;
    default:
        // "? Unknown status code: " + statusCode
        console.log("? Unknown status code: "+statusCode);
}