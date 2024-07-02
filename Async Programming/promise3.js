const makeApiCall = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This API executed in: " + time + "ms");
        }, time);
    });
};

makeApiCall(1000).then((val) => console.log(val));

let multiApiCall = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)];

Promise.all(multiApiCall).then((values) => {
    console.log(values);
});

Promise.race(multiApiCall).then((value) => {
    console.log(value);
});