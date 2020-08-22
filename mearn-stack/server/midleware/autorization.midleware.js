const jwt = require("jsonwebtoken")

const autorizacion = (req,res,next)=>{
    token=req.headers["authorization"]
    
    
    if(token){
        jwt.verify(token,"el software es bueno",(err,decode)=>{
            if(err){
                res.send({  title:"NoAutentication",
                            message:"No autenticado usuario no ha sido autenticado"
                        })
            }else{
                req.vendedor=decode.data
                next()
            }
        })
    }else{
        res.send({
            title:"error",
            message:"el token no existe"
        })
    }

}  



module.exports=autorizacion