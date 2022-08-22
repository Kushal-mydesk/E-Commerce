const auth = require("../middlewares/auth.jwt");

const product_controller = require("../controllers/product.controller");


module.exports = (app) => {

    //This is the route for creating the Product with POST call

    app.post("/eshop/api/v1/products",[auth.verifyToken,auth.isAdmin], product_controller.createProduct)


    //this is the route for getting all the categories 
    app.get("/eshop/api/v1/products/categories", product_controller.getCategories);


    // this is the route for getting the product by id
    app.get("/eshop/api/v1/products/:id", product_controller.getProductById);
}