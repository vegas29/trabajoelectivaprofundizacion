class ServiceFactura{
    crearFactura(data){
        return new Promise(async (resolve)=>{
            const response=await fetch("http://localhost:3003/factura/add",{
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization":sessionStorage.getItem("auth")
                },
                method: "POST",
                body: JSON.stringify(data)
            })
            const json = await response.json()
            resolve(json)
        })
    }

    mostrarFacturas(){
        return new Promise(async (resolve)=>{
            const response=await fetch("http://localhost:3003/factura",{
                headers:{
                    "Authorization":sessionStorage.getItem("auth")
                }
            })
            const json = await response.json()
            resolve(json)
        })
    }


    eliminarFactura(index){
        return new Promise(async (resolve)=>{
            const response=await fetch(`http://localhost:3003/factura/${index}`,{
                method:"DELETE",
                headers:{
                    "Authorization":sessionStorage.getItem("auth")
                }
            })
            const json = await response.json()
            resolve(json)
        })
      
    }

    mostrarFacturasByCliente(doc){
        return new Promise(async (resolve)=>{
            const response = await fetch(`http://localhost:3003/clientes/facturas/${doc}`,{
                headers:{
                    "Authorization":sessionStorage.getItem("auth")
                }
            })
            const json = await response.json()
            resolve(json)
        })
    }
}



export default new ServiceFactura()