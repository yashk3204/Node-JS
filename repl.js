// REPL stands for Read Evaluate Print Loop

const repl = require("repl");
const local = repl.start("$");  // you can start running commands or defining functions after the '$' sign or whatever parameter is given to start() function.
local.on('exit', ()=>{
    console.log("Exiting REPL.");
    process.exit();
});                                          // runs a function before ending process when ctrl+C is pressed twice