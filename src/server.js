const express = require("express");
const cors = require('cors');



const app = express();

var corsOptions = {
    origin: [
                "localhost:3000", "localhost:3000/", 
                "deployedFrontend.com", "deployedFrontend.com/"
        ],
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (request, response) => {
    response.json({
        message: "Hello world"
    })
});
const userRouter = require('./controllers/UserController');
app.use("/users", userRouter);


module.exports = {
    app
}