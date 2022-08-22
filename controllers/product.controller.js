const { response } = require("express");
const Product = require("../models/product.model");


//this is the functionalities for creating the Product
exports.createProduct = async(req,res) => {


   try{
    const reqObj = {

        name: req.body.name,
        availablity: req.body.availablity,
        category: req.body.category,
        price: req.body.price,
        image_url: req.body.image_url,
        manufacturer: req.body.manufacturer
    };

    reqObj.description = req.body.description !=null ? req.body.description : null;

    const productCreated = await Product.create(reqObj);

    res.status(200).send(productCreated);
   }catch(err){
        console.log("Some error occured while creating the products", err.message);
        res.status(500).send({
            message: "Something went wrong!"
        });
   }


}


exports.getCategories = async(req,res) => {
    try{
        const categories = await Product.distinct("category");
        res.status(200).send(categories);
    }catch(err){
        console.log("Some error occured while creating the products", err.message);
        res.status(500).send({
            message: "Something went wrong!"
        });
   }
}

exports.getProductById = async(req,res) => {

    try{

        const product = await Product.findOne({_id: req.params.id});
        if(!product){
            return res.status(404).send({
                message : "No Product found for ID "
            })
        }

        res.status(200).send(product);

    }catch(err){
        console.log("some error while ")
    }
}

exports.updateById = async(req,res) => {

    try{

        const product = await Product.findOne({_id: req.params.id});
        if(!product){
            return res.status(404).send({
                message : "No Product found for ID "
            });
        }

        product.name = req.body.name != undefined ? req.body.name : product.name;
        product.availablity = req.body.availablity != undefined ? req.body.availablity : product.availablity;
        product.price = req.body.price != undefined ? req.body.price : product.price;
        product.category = req.body.category != undefined ? req.body.category : product.category;
        product.description = req.body.description != undefined ? req.body.description : product.description;
        product.image_url = req.body.image_url != undefined ? req.body.image_url : product.image_url;
        product.manufacturer = req.body.manufacturer != undefined ? req.body.manufacturer : product.manufacturer;
        

        const updatedProduct = await product.save();

        res.status(200).send({
            productId: updatedProduct._id,
            name: updatedProduct.name,
            category: updatedProduct.category,
            price: updatedProduct.price,
            description: updatedProduct.description,
            manufacturer: updatedProduct.manufacturer,
            availableItems: updatedProduct.availablity,
            image_url: updatedProduct.image_url,
            createdAt : updatedProduct.createdAt,
            updatedAt: updatedProduct.updatedAt
        });



    }catch(err){
        console.log("Some Error while updating", err.message);
        res.status(500).send({
            message : "Something went wrong!"
        });
    }
};

exports.deleteProductById = async(req,res) => {


    try{
        const product = await Product.findById(req.params.id);
        if(!product){
            res.status(200).send({
                message : "'No Product found for ID - " + req.params.id
            });
        }else{
            updateProduct = await Product.deleteOne({_id: product._id});
            res.status(200).send({
                message : "product with ID " + req.params.id + " deleted successfully!"
            })
        }
    }catch(err){
        console.log("Some error while deleting", err.message);
        res.status(500).send({
            message : "Something went wrong!"
        })
    }
}