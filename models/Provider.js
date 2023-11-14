// Conexión a BBDD MongoDB
const mongoose = require("../config/db_mongo");
//Creación de modelo "Provider"----------------------------------------
const providerObjectSchema = {
  company_name: {
    type: String,
    required: true,
    unique: true,
  },
  CIF: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
    unique: true,
  },
  url_web: {
    type: String,
    required: true,
    unique: true,
  },
};
// 1. Crear el esquema
const providerSchema = mongoose.Schema(providerObjectSchema);
// 2. Crear el modelo --> Colección
const Provider = mongoose.model("Provider", providerSchema);

module.exports = {
    Provider
};
