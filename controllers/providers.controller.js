const models = require("../models/providers.model")

const getProviders = async (req, res) => {
    const providers = await models.getProviders();
    res.status(200).json(providers)
}

async function createProvider(req, res) {
    let provider = req.body;
  try {
    await models.createProvider(provider);
    res.status(201).json({
      message: `Proveedor creado`,
      provider: provider
    });
  } catch (error) {
      res.status(500).json(error.message)
  }
}

module.exports = {
    getProviders,
    createProvider,
}