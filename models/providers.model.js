// Conexión a BBDD MongoDB
// const mongoose = require("../config/db_mongo");

const model = require("../models/Provider");

//Funciones--------------------------------------
async function getProviders() {
  const providers = await model.Provider.find().select(
    "company_name CIF address url_web -_id"
  );
  console.log(providers);
  return providers;
}
async function createProvider(providerData) {
  const { company_name, CIF, address, url_web } = providerData;
  const provider = new model.Provider({
    company_name,
    CIF,
    address,
    url_web,
  });
  const result = await provider.save();
  console.log({
    message: "Provider created!",
    result,
  });
}

// async function updateProvider() {

// }

// async function deleteProvider() {

// }

module.exports = {
  getProviders,
  createProvider,
  //   updateProvider,
  //   deleteProvider,
};
