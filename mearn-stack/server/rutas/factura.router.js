const express = require("express")
const router = express.Router()
const contrllerFacturas = require("../controller/factura.controller")
const autorizacion = require("../midleware/autorization.midleware")
router.get("/",autorizacion,contrllerFacturas.mostrarFactura)

router.get("/:id",autorizacion,contrllerFacturas.mostrarFacturaById)

router.post("/add",autorizacion,contrllerFacturas.crearFactura)


router.delete("/:id",autorizacion,contrllerFacturas.eliminarFactura)


module.exports=router