const progressBar = require("progress");
const bar = new progressBar("downloading [:bar] :rate/bps :percent :etas", {
    total: 20,
});

const timer = setInterval(() => {
    bar.tick();
    if(bar.complete) {
        clearInterval(timer);
    }
}, 100);

const chalk = require("chalk");

console.log(chalk.green("This is green."));
console.log(chalk.red("This is red."));
console.log(chalk.blue("This is blue."));