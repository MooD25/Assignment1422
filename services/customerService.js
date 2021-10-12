const bcrypt = require('bcrypt');
const customerModel = require("../models/customer.js");



exports.createACustomer =(req,res)=>{
    //create


    const customer = new customerModel(req.body)

    bcrypt.genSalt(12)
    .then(salt=>bcrypt.hash(req.body.password,salt))
    .then(hash=> {
        customer.password = hash;
        customer.save()
    })
.then((doc) => {
res.json({
message : "Customer created successfully",
data : doc
})
})
.catch((err) => {
res.status(500).json({
message : `Error ${err}`
})
})


};

exports.getCustomers =(req,res)=>{


    customerModel.find()
    .then(customers=>{


            res.json({
                message : "A list of all the customers",
                data : customers
               
            })
    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })
};

exports.getACustomer =(req,res)=>{


    customerModel.findById(req.params.id)
    .then(customer=>{


        

            if(customer){

                res.json({
                    message : `Customer with the id ${req.params.id}`,
                    data : customer
                })

            }
            else{
                res.status(404).json({
                    message : `There is no customer in our databse with the id ${req.params.id}`
                })
            }


    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })
};

exports.updateACustomer =(req,res)=>{
    customerModel.findByIdAndUpdate(req.params.id, req.body, {new :true})
    .then(customer=>{

        if(customer){
            res.json({
                message : `The customer with the id ${req.params.id} was updated `,
                data : customer
            })
        }
        else {
            res.status(404).json({
                message : `customer with ID ${req.params.id} was found`
            })
        }

    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })

}

exports.deleteACustomer = (req,res)=>{

    customerModel.findByIdAndRemove(req.params.id)
    .then(()=>{
    res.json({
        message: `The customer with the ID ${req.params.id} was deleted`
    })
    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })
    
    }