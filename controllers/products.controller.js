const models = require("../models/products.model")

const getProducts = async (req, res) => {
    const products = await models.getProducts();
    res.status(200).json(products)
}

// async function createProduct(req, res) {

// }

module.exports = {
    getProducts,
    // createProduct,

}