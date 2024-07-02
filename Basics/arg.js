const minimist = require("minimist");

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

/* the command 'node arg.js name=yash' prints:
        0: C:\Program Files\nodejs\node.exe
        1: C:\Users\yashk\OneDrive\Desktop\Codes\Node JS\arg.js
        2: name=yash
*/

const argNew = process.argv.slice(2)[0];
console.log(argNew);                             // command: 'node arg.js name=yash' prints: 'name=yash'

const argNew2 = minimist(process.argv.slice(2));
console.log(argNew2.name);                       // command: 'node arg.js --name=yash' prints: 'yash'