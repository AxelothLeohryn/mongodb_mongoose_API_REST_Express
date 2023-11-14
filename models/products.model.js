// Conexión a BBDD MongoDB
// const mongoose = require("../config/db_mongo");

const model = require("../models/Product");
const providerModel = require("./Provider");

//Funciones--------------------------------------
async function getProducts() {
  const products = await model.Product.find().select(
    "title price description provider -_id"
  );
  console.log(products);
  return products;
}
async function createProduct(productData) {
  const { title, price, description, provider } = productData;
  //Obtener provider_id a partir del nombre del provider que entra a la funcion
  let provider_id = await providerModel.Provider.find({
    company_name: provider,
  });
  // console.log(provider_id);
  provider_id = provider_id[0]._id.toString();
  // console.log(provider_id);

  //Guardo el producto con el formato correcto (provider es una id)
  const product = new model.Product({
    title,
    price,
    description,
    provider: provider_id,
  });

  const result = await product.save();
  console.log({
    message: "Product created!",
    result,
  });
}

async function updateProduct(id, updates) {
  const updatedProduct = await model.Product.findByIdAndUpdate(id, updates, {
    new: true,
  });
  return updatedProduct;
}

async function deleteProduct(title) {
  await model.Product.findOneAndDelete({title});
}

async function findProduct(id) {
  const product = await model.Product.findById(id);
  return product;
}

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  findProduct,
};
