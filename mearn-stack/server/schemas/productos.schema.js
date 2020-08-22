const mongoose = require('mongoose');

const ProductosSchema = new mongoose.Schema({
    nombre:{
        type:String,
        requried:true
    },
    precio:{
        type:String,
        required:true
    },
    cantidad:{
        type:String,
        required:true
    },
    estado:{
        type:String,
        default:"activo",
        enum:["activo", "desactivo"]
    }
});



module.exports=mongoose.model("Productos",ProductosSchema)