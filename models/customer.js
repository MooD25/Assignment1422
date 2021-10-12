const mongoose = require("mongoose");
  const { Schema } = mongoose;

  const customerSchema = new Schema({
   firstName : {
       type : String,
       required : true
   },
   lastName : {
    type : String,
    required : true
},
    email : {
    type : String,
    required : true
}, 
password : {
    type : String,
    required : true
},
phoneNumber : {
    type : [],
    default : undefined
    
},
dateCreated :{
    type: Date,
    default : Date.now()
}
    }
  );

  const customer = mongoose.model('customer', customerSchema);

  module.exports = customer;