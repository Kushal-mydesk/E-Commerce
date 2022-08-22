const express = require("express");

const app = express();


const server_config = require("./configs/server.config");
const db_config = require("./configs/db.config");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./models/user.model");
const Address = require("./models/address.model");

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
    //init();
    
})


/**Pluggin the routes */

require("./routes/auth.route")(app);
require("./routes/address.route")(app);
require("./routes/product.route")(app);



//this init function is called on 'once()' of instance 'db', 
//and this should be called to pre-store ADMIN on DB
async function init(){
    /**We should add ADMIN user from the database */

    const user = await User.create({
        first_name :  "Admin",
        last_name: "One",
        user_name : "admin101",
        password : bcrypt.hashSync("Welcome1",8),
        email : "admin@admin101.com",
        phone_number : 9809085874,
        role: "ADMIN"
    });
    console.log(user);
   
}

app.listen(server_config.PORT, () => {
    console.log("Server running on port " + server_config.PORT);
})