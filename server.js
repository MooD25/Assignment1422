//Marco Dillon
//132690207


const express = require("express");
const mongoose = require('mongoose');
const customerController = require("./controllers/customerController.js");
const productController = require("./controllers/productController.js");
const cors = require("cors");

const PORT = 300;

if (process.env.NODE_ENV != "production") {

    require('dotenv').config({ path: 'config/keys.env' });

}


const app = express();

const corsOptionsDelegate = function (req, callback) {
    const allowlist = [`http://localhost:3000`, 'http://127.0.0.1:3001', 'https://boring-meitner-1b8850.netlify.app']
    let corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate))

app.use(express.json());

app.use("/customers", customerController);
app.use("/products", productController);





app.listen(process.env.PORT || PORT, () => {
    console.log(`Restful API is up and running  on port ${process.env.PORT}`);

    mongoose.connect(process.env.MONGODB_QUERY_STRING)
        .then(() => {
            console.log(`Connected to MongoDB`)
        })
        .catch(err => {
            console.log(`Error ${err}`);
        })
})