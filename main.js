const express = require("express");
const mongoose = require("mongoose");
const morgan = require("./middlewares/morgan.js");
const error404 = require("./middlewares/error404.js");

const app = express();
const port = 3000;

app.use(express.json());
//Conexion a BBDD
// mongoose
//   .connect("mongodb://localhost/mongo-games")
//   .then(() => console.log("Now connected to MongoDB!"))
//   .catch((err) => console.error("Something went wrong", err));

// Logger
app.use(morgan(":method :host :status :param[id] - :response-time ms :body"));



//Rutas
const providersRoutes = require("./routes/providers.routes.js");
const productsRoutes = require("./routes/products.routes.js");

app.use("/api/providers", providersRoutes.router);
app.use("/api/products", productsRoutes.router);




//Para rutas no existentes
app.use("*", error404);
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});



// mongoose
//   .connect("mongodb://localhost/ej_mongoose")
//   .then(() => console.log("Now connected to MongoDB!"))
//   .catch((err) => console.error("Something went wrong", err));

//   const Provider = require("./models/providers.model");
//   const Product = require("./models/products.model");

//   async function createProvider(company_name, CIF, address, url_web) {
//     const provider = new Provider({
//         company_name,
//         CIF,
//         address,
//         url_web
//     });
//     const result = await provider.save();
//     console.log({
//         message: 'Provider created!',
//         result
//     })
//   }
//   //Primer provider creado:
//   createProvider('Teatro Marquina', 'B40236882', 'Calle de Prim 11', 'https://tortillasmarquina.com')