const express = require("express");
const path = require("path");
const multer = require("multer");
const logger = require("morgan");
const router = express.Router();
const upload = multer({dest : "./Uploads"});

const app = express();
const port = 5002;
app.use(express.json());
app.use(express.urlencoded({extended : true}));

const loggerMiddleware = (req, res, next) => {
    console.log(`${new Date()} --- Request [${req.method}] [${req.url}]`);
    next();
};
app.use(loggerMiddleware);
app.use(logger("combined"));
app.use("/api/users", router);

const fakeAuth = (req, res, next) => {
    const authStatus = true;
    if(authStatus) {
        console.log("User authStatus : ", authStatus);
        next();
    } else {
        res.status(401);
        throw new Error("Users is not authorized");
    }
};

const getUsers = (req, res) => {
    res.json({message: "Get all users"});
};

const createUser = (req, res) => {
    console.log("This is the request body received from client : ", req.body);
    res.json({message: "Create new user"});
};

router.use(fakeAuth);
router.route("/").get(getUsers).post(createUser);

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    switch(statusCode) {
        case 401:
            res.json({title: "Unauthorized", message: err.message});
            break;
        case 404:
            res.json({title: "Not found", message: err.message});
            break;
        case 500:
            res.json({title: "Server error", message: err.message});
            break;
        default:
            break;
    }
};

app.post("/Upload", upload.single("image"), (req, res, next) => {
    console.log(req.file, res.body);
    res.send(req.file);
}, (err, req, res, next) => {
    res.status(400).send({err: err.message})
});

app.all("*", (req, res) => {
    res.status(404);
    throw new Error("Route not found");
});

app.use(errorHandler);
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});