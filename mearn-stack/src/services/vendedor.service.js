class ServiceVendedor{
    async login(datos){
        return new Promise(async (resolve)=>{
            const response= await fetch("http://localhost:3003/vendedor/login",{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization":sessionStorage.getItem("auth")
                },
                method: "POST",
                body: JSON.stringify(datos)
            })
            const json = await response.json()
            console.log(json)
            resolve(json)
        })
    }


    mostrarVendedorById(id){
        return new Promise(async ( resolve)=>{
            const response = await fetch(`http://localhost:3003/vendedor/${id}`,{
                headers:{
                    "Authorization":sessionStorage.getItem("auth")
                }
            })
            const json = await response.json()
            resolve(json)
        })
    }
}


export default new ServiceVendedor()