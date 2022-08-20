const jwt = require("jsonwebtoken");
const auth_config = require("../configs/auth.config");
const User = require("../models/user.model");  


const verifyToken = (req,res,next) => {

    /**if the token is present*/
    const token = req.headers['x-access-token'];
    if(!token){
        res.status(403).send({
            message : "No token provided"
        });
    }
    /**if the token is valid */

    
        jwt.verify(token,auth_config.secret,(err,user) => {
            if(err){
                return res.status(410).send({
                    message : "Invalid Token",
                });
            }
            console.log("Token is valid")

            //Fetch the userId ffrom token and set it to the request object

            req.user_name = user.user_name;
            next();
        }) 
    
}


module.exports = {
    verifyToken : verifyToken
};

