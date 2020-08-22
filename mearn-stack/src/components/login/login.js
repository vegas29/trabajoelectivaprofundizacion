import React from 'react';
import { withRouter } from 'react-router-dom';
import "./login1.css";
import ServiceVendedor from "../../services/vendedor.service";
import "bootstrap/dist/css/bootstrap.min.css";
class Login extends React.Component{
  state={
      correo:"",
      clave:""
  }

  cambiarCorreo(event){
    this.setState({correo:event.target.value})
  }

  cambiarClave(event){
    this.setState({clave:event.target.value})
  }


  async loguear(event){
    event.preventDefault();
    console.log({correo: this.state.correo, clave : this.state.clave})
      const data=await ServiceVendedor.login({correo: this.state.correo, clave : this.state.clave})
      console.log(data)
      if(data.title=="ok"){
        sessionStorage.setItem("auth",data.message)
        this.props.cambiarLogin(true)
      }else{ 
        alert("permisos denegado")
      }  
    
    
  }

  
    render(){
        return(
          <div className="container-sm mt-5"> 

          
          <form className="mt-5" onSubmit={this.loguear.bind(this)}>
            <h1 className="text-center">Inicio Sesión</h1>
            <div className="form-group">
              <label for="exampleInputEmail1">Correo Electrónico</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={this.state.correo} onChange={this.cambiarCorreo.bind(this)}></input>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Contraseña</label>
              <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" placeholder="Password" value={this.state.clave} onChange={this.cambiarClave.bind(this)}></input>
            </div>
            <button type="submit" class="btn btn-primary btn-100">Enviar</button>
          </form>
        </div>
        );
    }
}

export default withRouter(Login)