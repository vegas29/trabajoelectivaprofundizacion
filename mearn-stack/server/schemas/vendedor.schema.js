const mongoose = require('mongoose');

const VendedorSchema = new mongoose.Schema({
    primerNombre:{
        type:String,
        required:true
    },
    segundoNombre:{
        type:String,
        required:true
    },
    primerApellido:{
        type:String,
        required:true
    },
    segundoApellido:{
        type:String,
        required:true
    },
    correo:{
        type:String,
        required: true,
        unique: true,
        // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
    },
    clave:{
        type:String,
        required:true
    }
    ,
    documento:{
        type:String,
        required:true,
        unique:true        
    },
    tipoDocumento:{
        type:String,
        required:true,
        enum:["CC","TI","NIT"]
    }
});

module.exports=mongoose.model("Vendedor",VendedorSchema)