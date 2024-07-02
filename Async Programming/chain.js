const p = Promise.resolve("done");

p.then((val) => {
    console.log(val);
    return "done2";
}).then((val) => {
    console.log(val);
    return "done3";
}).then((val => console.log(val)));