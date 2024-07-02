const promise = new Promise((resolve, reject) => {
    console.log("Async task execution");
    if(false) {   // here if false is replaced by true then it prints 'passed'.
        resolve();
    } else {
        reject();
    }
});

promise.then(
() => {console.log("passed")},
() => {console.log("failed")}
)