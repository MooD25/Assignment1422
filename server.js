//Marco Dillon
//132690207


const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config({ path: 'config/keys.env' });
const customerController = require("./controllers/customerController.js");
const productController = require("./controllers/productController.js");





const app = express();

app.use(express.json());

app.use("/customers", customerController);
app.use("/products", productController);





app.listen(process.env.PORT,()=>{
    console.log(`Restful API is up and running  on port ${process.env.PORT}`);

    mongoose.connect(process.env.MONGODB_QUERY_STRING)
    .then(()=>{
        console.log(`Connected to MongoDB`)
    })
    .catch(err=>{
        console.log(`Error ${err}`);
    })
})