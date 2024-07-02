try {
    doSomething();
} catch (e) {
    console.log("Error occurred");
    console.log(e);
}

function doSomething() {
    console.log("doSomething function is defined.")
    const data = fetch("localhost:3000/api");
} // comment out this function to catch error

// Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log("There was an uncaught exception", err);
    process.exit(1);
});