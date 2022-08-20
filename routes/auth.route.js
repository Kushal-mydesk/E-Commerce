const auth_controller = require("../controllers/auth.controller");

module.exports  = (app) => {
    
    //This is the route for sign in the users with POST call
    app.post("/eshop/api/v1/signup/users",auth_controller.signup);

    //this will be the route for sign in the users with POST call
    app.post("/eshop/api/v1/login/auth",auth_controller.login);
}