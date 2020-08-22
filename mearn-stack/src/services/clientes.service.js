class ServiceCLiente{
    crearCliente(data){
        return new Promise(async (resolve)=>{
            const response=await fetch("http://localhost:3003/clientes/add",{
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

    actualizarCliente(documento,data){
        return new Promise(async (resolve)=>{
            const response=await fetch(`http://localhost:3003/clientes/${documento}`,{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization":sessionStorage.getItem("auth")
                    },
                    method: "PUT",
                    body: JSON.stringify(data)
            })
            const json=response.json()
            resolve(json)
        })
    }

    eliminarCliente(index){
        return new Promise(async (resolve)=>{
            const response=await fetch(`http://localhost:3003/clientes/${index}`,{
                method:"DELETE",
                headers:{
                    "Authorization":sessionStorage.getItem("auth")
                }
            })
            const json = await response.json()
            resolve(json)
        })
      
    }

     mostrarClientes(){
        return new Promise(async (resolve)=>{
            const response=await fetch("http://localhost:3003/clientes",{
                headers:{
                   "Authorization":sessionStorage.getItem("auth") 
                }
            })
            const json = await response.json()
            resolve(json)
        })
        
    }

    mostrarClientesById(data){
        return new Promise(async (resolve)=>{
            const response=await fetch(`http://localhost:3003/clientes/documento/${data}`,{
                headers:{
                    "Authorization":sessionStorage.getItem("auth")
                }
            })
            const json=await response.json()
            resolve(json)
        })
    }

    mostrarClienteFactura(data){
        return new Promise(async (resolve)=>{
            const response=await fetch(`http://localhost:3003/clientes/${data}`,{
                headers:{
                    "Authorization":sessionStorage.getItem("auth")
                }
            })
            const json=await response.json()
            resolve(json)
        })
    }
}


export default  new ServiceCLiente()