import React from 'react';
import ServiceCliente from "../../../services/clientes.service";
import "bootstrap/dist/css/bootstrap.min.css";
import "./crearclientes.css";

export default class CrearClientes extends React.Component
{
    state={
            primerNombre:"",
            segundoNombre:"",
            primerApellido:"",
            segundoApellido:"",
            correo:"",
            tipoDocumento:"CC",
            documento:""
    }

    limpiarClientes(){
        this.setState({
            primerNombre:"",
            segundoNombre:"",
            primerApellido:"",
            segundoApellido:"",
            correo:"",
            tipoDocumento:"CC",
            documento:""
    })
    }
    async guardarCliente(){
        const data = await ServiceCliente.crearCliente(this.state)
        console.log(data)
    }

    render(){
        return(
            <div className="container-sm">
            <form>
                <h1 className="text-center mb-5">Añadir clientes</h1>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="txt-cliente-prinombre">Primer nombre</label>
                        <input type="text" class="form-control" type="text" id="txt-cliente-prinombre" placeholder="Primer nombre" value={this.state.primerNombre}  onChange={(e) => this.setState({primerNombre:e.target.value})} />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="txt-cliente-segnombre">Segundo nombre</label>
                        <input type="text" class="form-control" type="text" id="txt-cliente-segnombre" placeholder="Segundo nombre" value={this.state.segundoNombre}  onChange={(e)=>this.setState({segundoNombre:e.target.value})} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="txt-cliente-priapellido">Primer apellido</label>
                        <input type="text" class="form-control" type="text" id="txt-cliente-priapellido" placeholder="Primer apellido" value={this.state.primerApellido} onChange={(e)=>this.setState({primerApellido:e.target.value})} />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="txt-cliente-segapellido">Segundo apellido</label>
                        <input type="text" class="form-control" type="text" id="txt-cliente-segapellido" placeholder="Segundo apellido"  value={this.state.segundoApellido} onChange={(e)=>this.setState({segundoApellido:e.target.value})} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <label for="txt-cliente-correo">Correo</label>
                        <input type="email" class="form-control" type="text" id="txt-cliente-correo" placeholder="Correo electronico" value={this.state.correo} onChange={(e)=>{this.setState({correo:e.target.value})}} />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="txt-cliente-tipodoc">Tipo documento</label>
                        <select class="form-control" id="txt-cliente-tipodoc" value={this.state.tipoDocumento} onChange={(e)=>{this.setState({tipoDocumento:e.target.value})}}>
                                <option value="CC">--Seleccione una opcion--</option>
                                <option value="CC">Cedula de Ciudadania</option>
                                <option value="TI">Tarjeta de Identidad</option>
                                <option value="NIT">NIT</option>
                            </select> 
                    </div>
                    <div className="form-group col-md-4">
                        <label for="txt-cliente-doc">Documento</label>
                        <input type="text" class="form-control" type="text" id="txt-cliente-doc" placeholder="Documento" value={this.state.documento} onChange={(e)=>{this.setState({documento:e.target.value})}} />
                    </div>
                </div>

                <button class="btn btn-primary my-3 mx-3 btn-100" onClick={this.limpiarClientes.bind(this)}>Limpiar campos</button>
                <button class="btn btn-dark my-3 mx-3 btn-100" onClick={this.guardarCliente.bind(this)}>Agregar usuario</button>
            </form>
        </div>
    );
    }
}