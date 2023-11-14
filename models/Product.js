// Conexión a BBDD MongoDB
const mongoose = require("../config/db_mongo");

const productObjectSchema = {
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId, //Relacionado con _id de Provider
    ref: "Provider",
  },
};
// Crear el esquema
const productSchema = mongoose.Schema(productObjectSchema);

// Crear el modelo --> Colección
const Product = mongoose.model("Product", productSchema);

module.exports = {
    Product
};
