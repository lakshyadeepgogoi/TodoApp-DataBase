const mongoose = require("mongoose");

require("dotenv").config();

//Connection Establise to DB
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB Connection Successful"))
    .catch((error) =>{ 
        console.log("Issue in DB connection");
        console.error(error.message);
        // 0 means end the process without any kind of failure and 1 means end the process with some failure.
        process.exit(1);
    });
}

//Export the DB
module.exports = dbConnect;