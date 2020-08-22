class ServiceProductos{
    mostrarProductosById(data){
        return new Promise(async (resolve)=>{
            const response=await fetch(`http://localhost:3003/productos/${data}`,{
                headers:{
                    "Authorization":sessionStorage.getItem("auth")
                }
            })
            const json = await response.json()
            resolve(json)
        })
    }
}


export default new ServiceProductos()