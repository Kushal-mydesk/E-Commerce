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

