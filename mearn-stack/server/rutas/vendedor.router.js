const express = require("express")
const router = express.Router()
const controllerVendedor = require("../controller/vendedor.controller")
const autorizacion = require("../midleware/autorization.midleware")

router.get("/",autorizacion,controllerVendedor.mostrarVendedor)

router.post("/login",controllerVendedor.login)

router.get("/:id",autorizacion,controllerVendedor.mostrarVendedorById)

router.post("/add",autorizacion,controllerVendedor.crearVendedor)


router.delete("/:id",autorizacion,controllerVendedor.eliminarVendedor)



module.exports=router