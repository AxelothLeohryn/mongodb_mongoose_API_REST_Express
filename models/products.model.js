// Conexión a BBDD MongoDB
// const mongoose = require("../config/db_mongo");

const model = require("../models/Product");

//Funciones--------------------------------------
async function getProducts() {
  const products = await model.Product.find().select(
    "title price description provider -_id"
  );
  console.log(products);
  return products;
}
async function createProduct(company_name, CIF, address, url_web) {
  const product = new model.Product({
    company_name,
    CIF,
    address,
    url_web,
  });
  const result = await product.save();
  console.log({
    message: "Product created!",
    result,
  });
}

// async function updateProduct() {

// }

// async function deleteProduct() {

// }

module.exports = {
  getProducts,
  createProduct,
  //   updateProduct,
  //   deleteProduct,
};
