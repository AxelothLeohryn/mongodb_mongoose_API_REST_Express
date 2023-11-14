const models = require("../models/products.model");

const getProducts = async (req, res) => {
  const products = await models.getProducts();
  res.status(200).json(products);
};

async function createProduct(req, res) {
  let product = req.body;
  try {
    await models.createProduct(product);
    res.status(201).json({
      message: `Producto creado`,
      provider: product,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function updateProduct(req, res) {
  const id = req.params.id;
  const updates = req.body;
  try {
    const updatedProduct = await models.updateProduct(id, updates);
    res.status(200).json({
      message: "Producto actualizado: " + req.body.title,
      product: req.body,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteProduct(req, res) {
  const title = req.body.title;
  try {
    await models.deleteProduct(title);
    res.status(200).json({
      message: "Se ha borrado el proveedor: " + title,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
};
