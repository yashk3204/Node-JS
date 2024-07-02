const error = new Error("Something went wrong!");
console.log(error.message);
// throw new Error("This is an error.");

const {customError} = require("./customError");
throw new customError("This is a custom error object.");