const mongoose = require("mongoose");
  const { Schema } = mongoose;

  const productSchema = new Schema({
   productName : {
       type : String,
       required : true
   },
   price : {
    type : Number,
    required : true
},
    description : {
    type : String
 
}, 
category : {
    type : String,
    required : true
},
quantity : {
    type : Number
    
    
},
bestSeller : {
    type : Boolean,
    required : true
    
    
},
photo : {
    type : String
 
},
dateCreated :{
    type: Date,
    default : Date.now()
}
    }
  );

  const product = mongoose.model('product', productSchema);

  module.exports = product;