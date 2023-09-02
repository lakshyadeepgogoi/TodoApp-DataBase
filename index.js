

//server instance 
const express = require("express");
const app = express();

//Load Config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//Middleware to parse json  request body
app.use(express.json());


//Import Routes For TODO API
const todoRoutes = require("./routes/todos");

//Append the Todo API Routes
app.use("/api/v1", todoRoutes);


//Start Server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

//Connect to the Database
const dbConnect = require("./config/database");
dbConnect();

//Default Route
app.get("/", (req,res) => {
    res.send(`<h1>This is a HOMEPAGE </h1>`);
})