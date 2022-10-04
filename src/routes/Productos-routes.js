const express = require("express");
const Router = express.Router();
const {getProductos,getProducto,postProducto,putProducto,deleteProducto} = require("../controllers/Productos-controller");

Router.get("/", getProductos)
Router.get("/producto", getProducto)
Router.post("/", postProducto)
Router.put("/producto/:id", putProducto)
Router.delete("/producto/:id", deleteProducto)

module.exports = Router;