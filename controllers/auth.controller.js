const bcrypt = require("bcryptjs");

const User = require("../models/user.model");

const jwt = require("jsonWebToken");

const auth_config = require("../configs/auth.config");


exports.signup = async(req,res) =>{

    try{
        const userObj = {
            first_name : req.body.firstname,
            last_name : req.body.lastname,
            email : req.body.email,
            phone_number : req.body.contactnumber,
            password :bcrypt.hashSync( req.body.password,8),
            user_name : req.body.firstname+Math.floor((Math.random()*10))+req.body.lastname
        }

        
        
        const savedUser = await User.create(userObj);

        const postRes = {
            id: savedUser.id,
            first_name : savedUser.first_name,
            last_name : savedUser.last_name,
            email : savedUser.email,
        }


        res.status(201).send(postRes)

    }catch(err){
        console.log("Error while registering the user",err.message);
        res.status(500).send({
            message : "some Internal Server Error"
        });
    }

}
