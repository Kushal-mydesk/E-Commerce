const express = require("express");

const app = express();


const server_config = require("./configs/server.config");
const db_config = require("./configs/db.config");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const bodyPareser = require("body-parser");
app.use(bodyPareser.json());

app.use(bodyPareser.urlencoded({extended : true}));



/**Database Connection */

mongoose.connect(db_config.DB_URL);

const db = mongoose.connection;


db.on('error' , () => {
    console.log("Error while connecting to Database");
})

db.once("open", () => {
    console.log("Connected to Database");
})


/**Pluggin the routes */

require("./routes/auth.route")(app);

app.listen(server_config.PORT, () => {
    console.log("Server running on port " + server_config.PORT);
})