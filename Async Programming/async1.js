// run index.html and see console

console.log("Start operation");

function sleep(ms) {
    let startTime = new Date().getTime();
    console.log("Operation is running.");
    while(new Date().getTime() < startTime + ms) {
        console.log("in progress");
    }
    console.log("Operation is done.");
}
sleep(1000);

console.log("Do something else");