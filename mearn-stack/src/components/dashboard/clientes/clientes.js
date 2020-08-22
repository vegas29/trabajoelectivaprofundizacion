import React from 'react';
import ServiceCliente from "../../../services/clientes.service";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free";
import "./cliente.css";
export default class Clientes extends React.Component{
    state={
        clientes:[],
        actualizando:false,
        updateCliente:{
            _id:"",
            primerNombre:"",
            segundoNombre:"",
            primerApellido:"",
            segundoApellido:"",
            correo:"",
            tipoDocumento:"CC",
            documento:""
        }
    }
    changeData(e){
        console.log(e.target.id,e.target.value)
        const cliente=this.state.updateCliente
        cliente[e.target.id]=e.target.value
        this.setState({updateCliente:cliente})
    }

    async eliminarCliente(index){
        const data=await ServiceCliente.eliminarCliente(index)
        console.log(data)
    }

    actulizarCliente(index){
        this.setState({updateCliente:this.state.clientes[index]})
        this.setState({actualizando:true})

    }
    async componentDidMount(){
        const data = await ServiceCliente.mostrarClientes()
        this.setState({clientes:data})
    }

    async submitUpdateClient(){
        delete this.state.updateCliente._id
       console.log(`http://localhost:3003/clientes/${this.state.updateCliente.documento}`)
       const data = await ServiceCliente.actualizarCliente(this.state.updateCliente.documento,this.state.updateCliente)
       alert(data.title)
    }

    render(){
        return(
            <div>
                <div className="table-container">
                    <h1>Nuestros clientes</h1>
                    <table class="table">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col"># Documento</th>
                            <th scope="col">Primer nombre</th>
                            <th scope="col">Segundo nombre</th>
                            <th scope="col">Primer apellido</th>
                            <th scope="col">Segundo apellido</th>
                            <th scope="col">Acciones para realizar</th>
                            </tr>
                        </thead>
                        <tbody>{
                                this.state.clientes.map((cliente,index)=>(
                                    <tr>
                            <th scope="row">{cliente.documento}</th>
                            <td>{cliente.primerNombre}</td>
                            <td>{cliente.segundoNombre}</td>
                            <td>{cliente.primerApellido}</td>
                            <td>{cliente.segundoApellido}</td>
                            <td className="text-center"><button className="btn btn-primary w-25"  onClick={this.actulizarCliente.bind(this,index)} ><i class="fa fa-wrench"></i></button><button className="btn btn-warning ml-5 w-25"  onClick={this.eliminarCliente.bind(this,cliente._id)} ><i class="fa fa-trash"></i></button></td>
                            </tr>
                                ))
                            }
                            
                        </tbody>
                    </table>
                </div>
                {
                    
                    (this.state.actualizando)?(<div id="container-crear-clientes">
                        <div class="card mt-5">
                            <div class="card-header">
                                <h2 class="mb-4 text-center">Actualizar Cliente</h2>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-3">
                                        <label for="primerNombre">Ingrese primer nombre</label><br/>
                                        <input class="w-100 form-control" type="text" id="primerNombre"  value={this.state.updateCliente.primerNombre} onChange={this.changeData.bind(this)}/>
                                    </div>
                                    <div class="col-md-3">
                                        <label for="segundoNombre">Ingrese segundo nombre</label><br/>
                                        <input class="w-100 form-control" type="text" id="segundoNombre"  value={this.state.updateCliente.segundoNombre} onChange={this.changeData.bind(this)}/>
                                    </div>
                                    <div class="col-md-3">
                                        <label for="primerApellido">Ingrese primer apellido</label><br/>
                                        <input class="w-100 form-control" type="text" id="primerApellido"  value={this.state.updateCliente.primerApellido} onChange={this.changeData.bind(this)}/>
                                    </div>
                                    <div class="col-md-3">
                                        <label for="segundoApellido">Ingrese segundo apellido</label><br/>
                                        <input class="w-100 form-control" type="text" id="segundoApellido"  value={this.state.updateCliente.segundoApellido} onChange={this.changeData.bind(this)}/>
                                    </div>
                                    <div class="col-md-4 ">
                                        <label for="correo">Ingrese correo</label><br/>
                                        <input class="w-100 form-control" type="text" id="correo"   value={this.state.updateCliente.correo} onChange={this.changeData.bind(this)}/>
                                    </div>
                                    <div class="col-md-3 ">
                                        <label for="documento">Ingrese documento</label><br/>
                                        <input class="w-100 form-control" type="text" id="documento"  value={this.state.updateCliente.documento} onChange={this.changeData.bind(this)}/>
                                    </div>
                                    <div class="col-md-5 ">
                                        <label for="tipoDocumento">Seleccione documento</label><br/>
                                        <select class="form-control" id="tipoDocumento"   value={this.state.updateCliente.tipoDocumento} onChange={(e)=>{this.changeData.bind(this,'tipoDocumento',e.target.value)}}>
                                            <option value="CC">Cedula de Ciudadania</option>
                                            <option value="TI">Tarjeta de Identidad</option>
                                            <option value="NIT">NIT</option>
                                        </select> 
                                    </div>
                                    <button class="btn btn-primary w-100 mx-5 mt-5" onClick={this.submitUpdateClient.bind(this)} >Actualizar</button>
                                </div>
                            </div>
                        </div>
                    </div>):(<br/>)
            
                }
            </div>
        );
    }
}