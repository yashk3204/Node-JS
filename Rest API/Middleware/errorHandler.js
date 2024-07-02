const {constants} = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case VALIDATION_ERROR:
            res.json({ title: "Validation failed", message: err.message, stackTrace: err.stack });
            break;
        case UNAUTHORIZED:
            res.json({ title: "Unauthorized", message: err.message, stackTrace: err.stack });
            break;
        case NOT_FOUND:
            res.json({ title: "Not found", message: err.message, stackTrace: err.stack });
            break;
        case FORBIDDEN:
            res.json({ title: "Forbidden", message: err.message, stackTrace: err.stack });
            break;
        case SERVER_ERROR:
            res.json({ title: "Server error", message: err.message, stackTrace: err.stack });
            break;
        default:
            console.log("No errors!");
            break;
    }
};

module.exports = errorHandler;