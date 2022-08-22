const Order = require("../models/order.model");

const User = require("../models/user.model");
const Product = require("../models/product.model");
const Address  = require("../models/address.model");


exports.createOrder = async(req,res) => {

    try{
        const reqbody = {

            productId : req.body.productId,
            shippingAddress : req.body.addressId,
            orderPlacer: req.user_name,

        };

        reqbody.amount = req.body.amount !=null ? req.body.amount : null;

        const order = await Order.create(reqbody);

        if(order){
            const customer = await User.findOne({user_name: req.user_name});
            const product = await Product.findOne({_id: req.body.productId});
            const address = await Address.findOne({_id: req.body.addressId});

            return res.status(201).send({
                id: order._id,
                user: {
                    _id: customer._id,
                    password: customer.password,
                    firstname: customer.first_name,
                    lastname: customer.last_name,
                    email: customer.email,
                    contactNumber: customer.contactNumber,
                    role: customer.role,
                    createdAt: customer.createdAt,
                    updatedAt: customer.updatedAt
                },
                product:{
                    productId: product._id,
                    name: product.name,
                    category: product.category,
                    price: product.price,
                    description: product.description,
                    manufacturer: product.manufacturer,
                    availableItems: product.availablity,
                    image_url: product.image_url,
                    createdAt : product.createdAt,
                    updatedAt: product.updatedAt
                },
                shippingAddress:{
                    _id:address._id,
                    name: address.name,
                    contactNumber: address.contactNumber,
                    street: address.street,
                    landmark: address.landmark,
                    city: address.city,
                    state: address.state,
                    zipcode: address.zipcode,
                    createdAt : address.createdAt,
                    updatedAt : address.updatedAt,
                    user: {
                        _id: customer._id,
                        password: customer.password,
                        firstname: customer.first_name,
                        lastname: customer.last_name,
                        email: customer.email,
                        contactNumber: customer.contactNumber,
                        role: customer.role,
                        createdAt: customer.createdAt,
                        updatedAt: customer.updatedAt
                    }
                },
                amount : order.amount,
                orderDate : order.orderDate
        
                
            });
        }else{
            return res.status(500).send({
                message : "Coudnot Place the Order"
            })
        }


       




    }catch(err){
        console.log("Error creating order:", err.message);
        res.status(500).send({
            message : "Something went wrong!"
        })

    }


}