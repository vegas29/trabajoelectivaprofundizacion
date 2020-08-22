const VendedorSchema = require("../schemas/vendedor.schema")
const jwt = require("jsonwebtoken")

const controllerVendedor={}


controllerVendedor.mostrarVendedor=async function(req,res){
    res.send(await VendedorSchema.find().exec())
}


controllerVendedor.crearVendedor=async function(req,res){

    vendedor = new VendedorSchema(req.body)
    await vendedor.save();
    res.send({title:"ok", message:"vendedor registrado"})
}

controllerVendedor.mostrarVendedorById=async function(req,res){
    let vendedor={}
    try{
        vendedor=await VendedorSchema.findOne({_id:req.params.id}).exec()
    }catch(e){
        console.log(e)
    }
    res.send(vendedor)
    
}


controllerVendedor.eliminarVendedor=function(req,res){
    VendedorSchema.deleteOne({_id:req.params.id},function(err){
        if(err) res.send({title:"error",message: "no encontro el id"})
        res.send({title:"ok",message:"el vendedor a sido eliminado sastifactoriamente"})
    })
}


controllerVendedor.login=async function(req,res){
    const user=await VendedorSchema.findOne({correo:req.body.correo,clave:req.body.clave}).exec()
    
    if(user){
        const token=jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60),data: user }, 'el software es bueno');
        res.send({
            title:"ok",
            message:token
        })
    }else{
        res.send({
            title:"error",
            message:"Acceso restringido"
        })
    }
}


module.exports = controllerVendedor