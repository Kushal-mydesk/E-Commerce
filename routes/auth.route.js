const auth_controller = require("../controllers/auth.controller");

module.exports  = (app) => {
    
    //This is the route for sign in the users with POST call
    app.post("/eshop/api/v1/auth/signup",auth_controller.signup);
}