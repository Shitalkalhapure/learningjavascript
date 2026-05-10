let testTracker={
    suiteName: "Login Module",
   environment: "Staging",
   browser: "Chrome",
    tests:[
        { testName: "Test 1: Valid credentials", Result: "PASSED", Duration: "2.5s" },
        { testName: "Test 2: Invalid password", Result: "FAILED", Duration: "1.8s" },
        { testName: "Test 3: Empty username", Result: "FAILED", Duration: "1.2s" },
        { testName: "Test 4: Remember me checkbox", Result: "PASSED", Duration: "2.1s" }
    ],

    printResults() {
        
console.log("Test Results:");
console.log("-------------------------");
console.log("Suite Information:");
console.log("Name: "+testTracker.suiteName);
console.log("Environment: "+testTracker.environment);
console.log("Browser: "+testTracker.browser);
        console.log("Test Results:");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

        for (let i = 0; i < this.tests.length; i++) {
            let test = this.tests[i];

            console.log(`\n✓ ${test.testName}`);
            console.log(`  Result: ${test.Result}`);
            console.log(`  Duration: ${test.Duration}`);
        }
    }
};

testTracker.printResults();




