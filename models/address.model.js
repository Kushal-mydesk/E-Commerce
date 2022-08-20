const mongoose = require('mongoose');


const address_schema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    contactNumber:{
        type: String,
        required:true,
    },
    street:{
        type : String,
        required:true,
    },
    landmark:{
        type:  String,
        optional:true,
        default:null,
    },
    
    city:{
        type: String,
        required:true,
    },
    state:{
        type : String,
        required:true,
    },
    zipcode:{
        type: Number,
        required:true,
        maxLength:6,
        minLength:6,
    },
    createdAt:{
        type: Date,
        default: () =>{
            return new Date();
        },
        immutable: true
    },
    updatedAt: {
        type : Date,
        default: () =>{
            return new Date();
        }
    }


});


module.exports = mongoose.model("Addresses",address_schema);