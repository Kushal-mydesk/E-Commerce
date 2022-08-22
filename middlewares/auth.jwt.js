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

const isAdmin = async(req,res,next) => {

    const user = await User.findOne({user_name: req.user_name});

    if(user && user.role == "ADMIN"){
        next();
    }else{
        return res.status(403).send({
            message : "Only Admin is allowed to access"
        })
    }

}


module.exports = {
    verifyToken : verifyToken,
    isAdmin : isAdmin
};

