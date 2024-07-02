console.log("Node JS tutorial");
// process.exitCode = 1;   (crashes the code)

const _ = require("lodash");
const arr = [1,4,6,8];
console.log(_.chunk(arr));
console.log(_.last(arr));

const cowsay = require("cowsay");
console.log(cowsay.say({
    text: "I am learning NPM module",
    e: "00",
    t: "U",
}));

// npm list: lists all packages installed in project
// npm list -g: lists all packages installed globally
// npm view packagename version: prints version of package
// npm install npm@oldversion: to install older version of a package
// npm view react versions: lists all versions of react available in directory
// npm uninstall packagename: to uninstall a package
/* Semantic versioning: 
    "express": ^X.Y.X
        X - major version
        Y - minor version
        Z - patch version
        ^ indicates that minor or patch version can be changed
*/

const { car, car2 } = require("./car");
console.log(car);
console.log(car2);
console.log(JSON.stringify(car, null, 4)); // the last number parameter specifies indentation
console.log(JSON.stringify(car2, undefined, 2));