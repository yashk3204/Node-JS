function doSomething() {
    // const data = fetch("localhost:3000/api");
    console.log("doSomething function running");
    const data = "This is the data from doSomething function";
    return data;
}

const promise = new Promise((resolve, reject) => {
    if(false) {
        resolve(doSomething());
    } else{
        reject(doSomething());
    }
});

promise.then((val) => {
    console.log(val);
}).catch((err) => {
    console.log("Error occurred");
    console.log(err);
})

const someFunc = async () => {
    try {
        await doSomething();
    } catch (err) {
        throw Error(err.message);
    }
};

someFunc(); // throws error if fetch statement is executed