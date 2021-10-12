const express = require('express')
const router = express.Router()
const productService = require("../services/productService.js");

//create
router.post("/",productService.createAProduct)

//read all
router.get("/",productService.getProducts)
router.get("/allCategories", productService.getAllCategories);

router.get("/allCategories", productService.getAllCategories);
//read one product

router.get("/:id",productService.getAProduct)

//update
router.put("/:id",productService.updateAProduct)

//delete

router.delete("/:id",productService.deleteAProduct)


module.exports = router