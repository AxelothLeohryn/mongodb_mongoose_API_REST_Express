const express = require("express");
const router = express.Router();
const providersController = require("../controllers/providers.controller.js");

//READ
router.get("/", providersController.getProviders);
//CREATE
router.post("/", providersController.createProvider);
// //UPDATE
// router.put("/", providersController.updateProvider);
// //DELETE
// router.delete("/", providersController.deleteProvider);

module.exports = {
  router,
};
