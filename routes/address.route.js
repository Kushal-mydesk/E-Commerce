const auth = require("../middlewares/auth.jwt");

const address_controller = require("../controllers/address.controller");



module.exports = (app) => {


    //This will be the route fro adding address

    app.post("/eshop/api/v1/addresses",[auth.verifyToken],address_controller.addressTaker)
}