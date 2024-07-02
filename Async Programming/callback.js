console.log("Task started.");
function asyncTask(cb) {
    console.log("Task running.");
    setTimeout(cb, 0);  // if you call cb() directly without setTimeout the code will give error.
}

asyncTask(() => console.log(name));
console.log("Task ended.");
const name = "Yash";