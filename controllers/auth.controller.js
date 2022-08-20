const bcrypt = require("bcryptjs");

const User = require("../models/user.model");

const jwt = require("jsonWebToken");

const auth_config = require("../configs/auth.config");


exports.signup = async(req,res) =>{

    try{

        
        //Checking The Phone Numbert's length
        const phn = req.body.contactnumber.toString();
        if(phn.length>10 || phn.length<10){
            return res.status(400).send({
                error: "Invalid contact number,Must be 10 characters long"
            });
        }
        //Storing the user data from the req obj
        const userObj = {
            first_name : req.body.firstname,
            last_name : req.body.lastname,
            email : req.body.email,
            phone_number : req.body.contactnumber,
            password :bcrypt.hashSync( req.body.password,8),    //Hashing the password before storing
            //User_name is not in the req body so i made one with firstname & lastname
            user_name : req.body.firstname+Math.floor((Math.random()*10))+req.body.lastname   
        }

        
        
        //creating the data in the database
        const savedUser = await User.create(userObj);

        //This will be th res body for sending back
        const postRes = {
            id: savedUser.id,
            first_name : savedUser.first_name,
            last_name : savedUser.last_name,
            email : savedUser.email,
        }


        res.status(201).send(postRes);

    }catch(err){
        console.log("Error while registering the user",err.message);
        res.status(500).send({
            message : "some Internal Server Error"
        });
    }

}


exports.login = async(req,res) => {


    try{
        
        
        const useremailFromReq = req.body.email;
        const password = req.body.password;

        const userSaved = await User.findOne({email : useremailFromReq});
        if(!userSaved){
            return res.status(401).send({
                message: "Email Address is not registered"
            });
        }


        const isValidPassword = bcrypt.compareSync(password,userSaved.password);

        if(!isValidPassword){
            return res.status(401).send({
                message: "Invalid Credentials"
            })
        }
        const token = jwt.sign({
            user_name : userSaved.user_name,
        },auth_config.secret,{
            expiresIn : 600
        })

        res.header('x-auth-token',token);

        res.status(200).send({
            email: userSaved.email,
            name: userSaved.first_name + " " + userSaved.last_name,
            isAuthenticated: true,
            //access_token: token
        })


    }catch(err){
        console.log("Error while authenticating the user",err.message);
        res.status(500).send({
            message : "some Internal Server Error"
        });

    }

}
