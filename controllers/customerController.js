const express = require('express')
const router = express.Router()
const customerService = require("../services/customerService.js");

//create
router.post("/",customerService.createACustomer)

//read all
router.get("/",customerService.getCustomers)

//read one customer

router.get("/:id",customerService.getACustomer)

//update
router.put("/:id",customerService.updateACustomer)

//delete

router.delete("/:id",customerService.deleteACustomer)

module.exports = router