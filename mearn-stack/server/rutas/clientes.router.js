const express = require("express")
const router = express.Router()
const controllerClientes = require("../controller/clientes.controller")

const { body} = require("express-validator")
const autorizacion = require("../midleware/autorization.midleware")
const validate = require("../midleware/validate.midleware")
const controllerCliente = require("../controller/clientes.controller")
  


router.get("/",autorizacion,controllerClientes.mostrarClientes)

router.get("/documento/:doc",autorizacion,controllerCliente.buscarByDocumento)

router.get("/:id",autorizacion,controllerClientes.mostrarClientesById)

router.post("/add",[ autorizacion, validate([
    body('correo').exists().isEmail()
])],controllerClientes.crearClientes)


router.delete("/:id", autorizacion,controllerClientes.eliminarCliente)


router.get("/facturas/:id",autorizacion,controllerCliente.monstrarFacturasByClientes)


router.put("/:id", autorizacion,controllerCliente.actualizarCliente)


module.exports=router