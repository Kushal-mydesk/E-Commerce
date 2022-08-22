This Code is For the Graded Project

## "dependencies": {
    "bcrypt": "^5.0.1",
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.0",
    "express": "^4.18.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.5.2"
  }

# Here are the Routes For Every Activity
* Routes for Authentication Activity

 //This is the route for sign in the users with POST call
   "/eshop/api/v1/signup/users"   with Post call

 //this will be the route for sign in the users with POST call
   "/eshop/api/v1/login/auth"    with Post call


* Routes for Creation of the Address
    //This will be the route fro adding address
    "/eshop/api/v1/addresses"      with Post call


* Routes for activities with the Products
    //This is the route for creating the Product with POST call
    "/eshop/api/v1/products"      with Post call


    //this is the route for getting all the categories 
    "/eshop/api/v1/products/categories"    with Get call


    // this is the route for getting the product by id
    "/eshop/api/v1/products/:id"         with Get call

    //This will be route for updating the product
   "/eshop/api/v1/products/:id"     with Put Call

    //This will be the route for deleting the product
    "/eshop/api/v1/products/:id"    with Delete Call


* Routes For creating the order

    "/eshop/api/v1/orders"  with POST call