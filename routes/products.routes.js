const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller.js");

//READ
router.get("/", productsController.getProducts);
// //CREATE
// router.post("/", productsController.createProduct);
// //UPDATE
// router.put("/", productsController.updateProduct);
// //DELETE
// router.delete("/", productsController.deleteProduct);

module.exports = {
  router,
};
