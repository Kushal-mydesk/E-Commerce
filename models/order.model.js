const mongoose = require("mongoose");



const order_schema= new mongoose.Schema({

    productId:{
        type:[mongoose.SchemaTypes.ObjectId],
        ref: "Product",
        required: true
    },
    shippingAddress:{
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Address",
        required: true
    },
    orderPlacer:{
        type : String,

    },

    amount:{
        type: Number,
        optional: true,
    },
    orderDate:{
        type: Date,
        default: () => {
            return new Date();
        }
    }


})


module.exports = mongoose.model("Order", order_schema);