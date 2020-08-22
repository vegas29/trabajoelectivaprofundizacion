const express = require("express")
const router = express.Router()
const controllerProductos = require("../controller/productos.controller")
const autorizacion = require("../midleware/autorization.midleware")

router.get("/",autorizacion,controllerProductos.mostrarProductos)

router.get("/:id",autorizacion,controllerProductos.mostrarProductosById)

router.post("/add",autorizacion,controllerProductos.crearProductos)


router.delete("/:id",autorizacion,controllerProductos.eliminarProductos)


module.exports=router
