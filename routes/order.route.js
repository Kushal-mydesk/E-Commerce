const auth = require("../middlewares/auth.jwt");

const ordercontroller = require("../controllers/order.controller");


module.exports = (app) => {


    app.post("/eshop/api/v1/orders", [auth.verifyToken],ordercontroller.createOrder);
}