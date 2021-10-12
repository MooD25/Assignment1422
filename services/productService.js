const productModel = require("../models/product.js");

exports.createAProduct =(req,res)=>{
    //create


    const product = new productModel(req.body)

    product.save()
    .then((newProduct)=>{


        res.json({
            message : "The Product was successfully created",
            data : newProduct
        })
    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })


};

exports.getProducts = (req, res) => {
    if (req.query.id) {
        productModel.findOne()
        .where("_id").equals(req.query.id)
        .then(product=> {
            if (!product) {
                res.status(404).json({
                    message : `Product with ID: ${req.query.id} not found`
                });
            }
            else {
                res.json({
                    message : `Product info for: ${req.query.id}`,
                    data : product
                })
            }
        })
        .catch((err) => {
            res.status(500).json({
                message : err
            })
        })
    }
    else if (req.query.category) {
        productModel.find()
        .where("prodCategory").equals(req.query.category)
        .then(product => {
            if (!product.length) {
                res.status(404).json({
                    message : `No category: ${req.query.category}`
                });
            }
            else {
                res.json({
                    message : `Product Category: ${req.query.category}`,
                    data : product
                })
            }
        }).catch((err) => {
            res.status(500).json({
                message : err
            })
        })
    }
    else if (req.query.bestSeller) {
        productModel.find()
        .where("bestSeller").equals(req.query.bestSeller==="yes" ? true : false)
        .then(product => {
            if (!product.length) {
                res.status(404).json({
                    message : `There is no best sellers`
                });
            }
            else {
                res.json({
                    message : `Here are the best sellers`,
                    data : product
                })
            }
        }).catch((err) => {
            res.status(500).json({
                message : err
            })
        })
    }
    else {
        productModel.find()
        .then(product => {
            if (!product) {
                res.status(404).json({
                    message : `No products available`
                });
            }
            else {
                res.json({
                    message : `All products`,
                    data : product
                })
            }
        }).catch((err) => {
            res.status(500).json({
                message : err
            })
        })
    }
};




exports.getAProduct =(req,res)=>{


    productModel.findById(req.params.id)
    .then(product=>{


        

            if(product){

                res.json({
                    message : `Product with the id ${req.params.id}`,
                    data : product
                })

            }
            else{
                res.status(404).json({
                    message : `There is no product in our database with the id ${req.params.id}`
                })
            }
            


    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })
};

exports.updateAProduct =(req,res)=>{
    productModel.findByIdAndUpdate(req.params.id, req.body, {new :true})
    .then(product=>{

        if(product){
            res.json({
                message : `The product with the id ${req.params.id} was updated `,
                data : product
            })
        }
        else {
            res.status(404).json({
                message : `product with ID ${req.params.id} was found`
            })
        }

    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })

}

exports.deleteAProduct = (req,res)=>{

    productModel.findByIdAndRemove(req.params.id)
    .then(()=>{
    res.json({
        message: `The product with the ID ${req.params.id} was deleted`
    })
    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })
    
    }

exports.getAllCategories = (req, res) => {
    productModel.find()
    .then(products => {
        if (!products) {
            res.status(404).json({
                message : `There are no product categories`
            });
        }
        else {
            let allCategories = [];
            for (i = 0; i < products.length; i++) {
                allCategories.push(products[i].category)
            }
            let distinctCategories = [...new Set(allCategories)];
            res.json({
                message : `Here are all of the product categories`,
                data : distinctCategories
            })
        }
    }).catch(err => {
        res.status(500).json({
            message : err
        })
    })
};