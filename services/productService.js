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

exports.getProducts =(req,res)=>{


    productModel.find()
    .then(products=>{


            res.json({
                message : "A list of all the products",
                data : products
               
            })
    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })
};

//best seller
exports.getBestSellerProducts =(req,res)=>{


    productModel.find()
    .where("bestSeller").equals(true)
    .then(products=>{


            res.json({
                message : "A list of all the products that are best sellers",
                data : products
               
            })
    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })
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
                    message : `There is no product in our databse with the id ${req.params.id}`
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
            .then((product) => {
                if (product.length === 0) {
                    res.status(404).json({
                        message : `There are no product categories`
                    });
                }
                else {
                    var categoryNames = [];
    
                    for (i = 0; i < product.length; i++) {
                        var repeat = false;
                        if (categoryNames.length != 0) {
                            for (j = 0; j < categoryNames.length; j++) {
                                if (product[i].prodCategory == categoryNames[j]) {
                                    repeat = true;
                                }
                            }
                            if (repeat == false) {
                                categoryNames.push(product[i].prodCategory);
                            }
                        }
                        else {
                            categoryNames.push(product[i].prodCategory);
                        }
                    }
    
                    res.json({
                        message : `Showing all product categories`,
                        data : categoryNames
                    })
                }
            }).catch((err) => {
                res.status(500).json({
                    message : `Error ${err}`
                })
            })
    };