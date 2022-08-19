//This will contain the schema ofor the User Data


const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({

    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type : String,
        required: true
    },
    user_name : {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type : String,
        required: true,
        unique: true,
        minLength: 10,
        lowercase: true
    },
    password:{
        type: String,
        required: true
    },
    phone_number:{
        type: Number,
        required: true
    },
    role:{
        type:String,
        default: "USER",
        enum: ['ADMIN','USER']
       
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


module.exports = mongoose.model("User" , user_schema)
