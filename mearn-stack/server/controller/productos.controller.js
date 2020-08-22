const ProductosSchemas=require("../schemas/productos.schema")

const controllerProductos ={}


controllerProductos.mostrarProductos=async function(req,res){
    res.send(await ProductosSchemas.find().exec())
}


controllerProductos.crearProductos=async function(req,res){
    productos = new ProductosSchemas(req.body)
    await productos.save()
    res.send({title:"ok",message:"El producto se registro"})
}

controllerProductos.mostrarProductosById=async function(req,res){
    res.send(await ProductosSchemas.findOne({_id:req.params.id}))
}


controllerProductos.eliminarProductos=function(req,res){
    ProductosSchemas.deleteOne({_id:req.params.id},function(err){
        if(err) res.send({title:"error",message:"El producto no existe"})
        res.send({title:"ok",message:"El producto fue eliminado"})
    })
}


module.exports = controllerProductos