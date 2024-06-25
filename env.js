require("dotenv").config();
console.log(process.env.NAME); // command: node env.js
console.log(process.env.PROFESSION);
console.log("I am starting a course on", process.env.COURSE); // command: node -r dotenv/config env.js