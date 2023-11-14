const models = require("../models/providers.model");
const Product = require("../models/Product")

const getProviders = async (req, res) => {
  const providers = await models.getProviders();
  res.status(200).json(providers);
};

async function createProvider(req, res) {
  let provider = req.body;
  try {
    await models.createProvider(provider);
    res.status(201).json({
      message: `Proveedor creado`,
      provider: provider,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function updateProvider(req, res) {
  const id = req.params.id;
  const updates = req.body;
  try {
    const updatedProvider = await models.updateProvider(id, updates);
    res.status(200).json({
      message: "Proveedor actualizado: " + req.body.company_name,
      provider: req.body,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteProvider(req, res) {
  const company_name = req.body.company_name;
  try {
    //No funciona
    // const products = await Product.Product.find({ provider: company_name });
    // if (products.length > 0) {
    //   return res.status(400).json({ message: "No se puede eliminar un proveedor con productos asociados" });
    // }
    // else {
      await models.deleteProvider(company_name);
      res.status(200).json({
        message: "Se ha borrado el proveedor: " + company_name
      })
    // }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getProviders,
  createProvider,
  updateProvider,
  deleteProvider
};
