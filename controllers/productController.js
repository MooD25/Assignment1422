const express = require('express')
const router = express.Router()
const productService = require("../services/productService.js");

//create
router.post("/",productService.createAProduct)

//read all
router.get("/",productService.getProducts)

//read all best sellers
router.get("/",productService.getBestSellerProducts)

//read one product

router.get("/:id",productService.getAProduct)

//update
router.put("/:id",productService.updateAProduct)

//delete

router.delete("/:id",productService.deleteAProduct)

router.get("/category", productService.getAllCategories);

module.exports = router