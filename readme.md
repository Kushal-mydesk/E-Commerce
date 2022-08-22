This Code is For the Graded Project

# Port : 
    The Port Number is on the server.config file in "configs" folder, Its 8080

## Dependencies: 
    "bcrypt": "^5.0.1",
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.0",
    "express": "^4.18.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.5.2"
  

### Here are the Routes For Every Activity
* Routes for Authentication Activity

    <p>//This is the route for sign in the users with POST call</p>
    <p>"/eshop/api/v1/signup/users"   with Post call</p>

    <p>//this will be the route for sign in the users with POST call</p>
    <p>"/eshop/api/v1/login/auth"    with Post call</p>


* Routes for Creation of the Address
    <p>//This will be the route fro adding address</p>
    <p>"/eshop/api/v1/addresses"      with Post call</p>


* Routes for activities with the Products
    <p>//This is the route for creating the Product with POST call</p>
    <p>"/eshop/api/v1/products"      with Post call</p>


    <p>//this is the route for getting all the categories</p>
    <p>"/eshop/api/v1/products/categories"    with Get call</p>


    <p>// this is the route for getting the product by id</p>
    <p>"/eshop/api/v1/products/:id"         with Get call</p>

    <p>//This will be route for updating the product</p>
    <p>"/eshop/api/v1/products/:id"     with Put Call</p>

    <p>//This will be the route for deleting the product</p>
    <p>"/eshop/api/v1/products/:id"    with Delete Call</p>


* Routes For creating the order

    "/eshop/api/v1/orders"  with POST call