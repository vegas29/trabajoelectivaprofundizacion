import React from 'react';
import './dashboard.css'
import Clientes from "./clientes/clientes"
import CrearClientes from "./crear-clientes/crear-clientes"
import CrearFactura from  "./crear-factura/crear-factura"
import Login from "../login/login"
import Logout from "../logout/logout"
import { Route, Link, Redirect } from "react-router-dom";
import Factura from './facturas/factura';

export default class DashBoard extends React.Component{
    state={
        active:"active"
    }


    cambiarEstadoMenu(){
        this.setState({active:((this.state.active=="")?"active":"")})
    }
    render(){
        return(
            <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand" href="#">CRUD</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <Link to="/dashboard/clientes"><a class="nav-link" >Ver Clientes</a></Link>
                    <Link to="/dashboard/crear-cliente"><a class="nav-link" >Crear Clientes</a></Link>
                    <Link to="/dashboard/facturas"><a class="nav-link" >Ver Facturas</a></Link>
                    <Link to="/dashboard/crear-factura"><a class="nav-link" >Crear Facturas</a></Link>
                    <Link to="/dashboard/close"><a class="nav-link">Cerrar Sesión</a></Link>
                    </div>
                </div>
            </nav>

            
            <div id="content" className="p-4 p-md-5 pt-5">
                <Redirect to="/dashboard/facturas"/>
                <Route path="/dashboard/facturas">
                    <Factura/>
                </Route>
                <Route path="/dashboard/crear-factura">
                    <CrearFactura/>
                </Route>
                <Route path="/dashboard/crear-cliente">
                    <CrearClientes/>
                </Route>
                <Route path="/dashboard/clientes">
                    <Clientes/>
                </Route>
                <Route path="/dashboard/close">
                    <Logout cambiarLogin={this.props.cambiarLogin}/>
                </Route>
            </div>

            <footer className="footer text-center">
            <p> derecho reservados </p>
            </footer>
        </div>
        );
    }
}