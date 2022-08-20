const User = require("../models/user.model");
const Address = require("../models/address.model");



exports.addressTaker = async(req,res) =>  {


    try{
        
        await Address.collection.drop();
        

        //validating the length of phone_number and zipcode
        const zip = req.body.zipcode.toString();
        if(zip.length>6 || zip.length<6){
            return res.status(400).send({
                error: "Invalid Zipcode,Must be 6 characters long"
            });
        }
        const phn = req.body.contactNumber.toString();
        if(phn.length>10 || phn.length<10){
            return res.status(400).send({
                error: "Invalid contact number,Must be 10 characters long"
            });
        }

        
        const UserId = req.user_name;   //this will be retrieved from the access token
        
        //storing the data from the request body
        const addressObj = {
            zipcode:req.body.zipcode,
            state: req.body.state,
            street: req.body.street,
            city: req.body.city,
            contactNumber: req.body.contactNumber,
            name: req.body.name,
           
        }

        //checking if the landmark value is present or not , as it is optional
        addressObj.landmark = req.body.landmark != null ? req.body.landmark : null;


        //getting the LoggedIn User from the userId we got 
        const reporter = await User.findOne({
            user_name: UserId,
        })

        
        //storing the data of the Address in the collection
        const addressCreated = await Address.create(addressObj);

        //Responsing with the data individually        
        res.status(200).send({
            _id:addressCreated._id,
            name: addressCreated.name,
            contactNumber: addressCreated.contactNumber,
            street: addressCreated.street,
            landmark: addressCreated.landmark,
            city: addressCreated.city,
            state: addressCreated.state,
            zipcode: addressCreated.zipcode,
            createdAt : addressCreated.createdAt,
            updatedAt : addressCreated.updatedAt,
            user: {
                _id: reporter._id,
                password: reporter.password,
                firstname: reporter.first_name,
                lastname: reporter.last_name,
                email: reporter.email,
                contactNumber: reporter.contactNumber,
                role: reporter.role,
                createdAt: reporter.createdAt,
                updatedAt: reporter.updatedAt
            }
        });




    }catch(err){
        console.log("Error while Inserting Address" , err.message);
        res.status(500).send({
            message: "Internal Server Error"   
        });
    }

}