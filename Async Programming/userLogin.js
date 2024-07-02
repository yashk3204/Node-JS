const prompt = require("prompt-sync")();

const userLogin = () => {
    console.log("Enter Username and Password");
    let username = prompt("Enter username: ");
    let password = prompt("Enter password: ");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Performing User Authentication");
            if (username === "yash" && password === "yash")
                resolve("User Authenticated!");
            else {
                reject("Authentication Failed!");
            }
        }, 1000);
    });
};

function goToHomePage(userAuthStatus) {
    return Promise.resolve(`Go to Homepage as : ${userAuthStatus}`);
}

// userLogin().then((response) => {
//     console.log("Validated");
//     return goToHomePage(response);
// }).then((userAuthStatus) => {
//     console.log(userAuthStatus);
// }).catch((error) => {
//     console.log(error);
// });

async function performTask() {
    try{
        const response = await userLogin();
        console.log("Validated user");
        const userAuthStatus = await goToHomePage(response);
        console.log(userAuthStatus);
    } catch(err) {
        console.log(err);
    }
}
    

performTask();