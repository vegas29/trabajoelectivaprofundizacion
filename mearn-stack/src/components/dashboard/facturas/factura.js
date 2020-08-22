import React from "react";
import ServiceFactura from "../../../services/factura.service";
import Modal from "react-modal";
import ServiceCliente from "../../../services/clientes.service";
import ServiceVendedor from "../../../services/vendedor.service";

export default class Factura extends React.Component {
  customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  state = {
    facturas: [],
    modal: false,
    facturaUnica: {
      productos: [],
    },
    clienteFactura: {},
    vendedorFactura: {},
    documentoCliente: "",
  };

  closeModal() {
    this.setState({ modal: false });
  }

  async componentDidMount() {
    this.mostrarFacturas();
  }
  async mostrarFacturas() {
    const facturas = await ServiceFactura.mostrarFacturas();
    console.log(facturas);

    this.setState({ facturas });
  }
  async eliminarFactura(id) {
    console.log(id);
    const data = await ServiceFactura.eliminarFactura(id);
    console.log(data);
    this.mostrarFacturas();
  }

  async BuscarDocumento(e) {
    if (e.keyCode == 13) {
      let facturas = [];
      facturas = await ServiceFactura.mostrarFacturasByCliente(
        this.state.documentoCliente
      );
      console.log(facturas);
      this.setState({ facturas });
    }
  }

  async mostrarCampos(id) {
    this.setState({ modal: true });
    const facturaUnica = this.state.facturas[id];
    const clienteFactura = await ServiceCliente.mostrarClienteFactura(
      facturaUnica.cliente
    );
    const vendedorFactura = await ServiceVendedor.mostrarVendedorById(
      facturaUnica.vendedor
    );
    console.log(this.state.facturas[id].productos);
    this.setState({ facturaUnica });
    this.setState({ clienteFactura });
    this.setState({ vendedorFactura });
  }
  render() {
    return (
      <div className="container-sm">
        <div>
          <Modal style={this.customStyles} isOpen={this.state.modal}>
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h3 class="modal-title">Factura</h3>
                </div>
                <div class="modal-body">
                  <h3>Datos del cliente</h3>
                  <div class="row">
                    <div class="col-md-6">
                      <p>
                        Nombre:{" "}
                        <span id="modal-cliente-nombre">
                          {this.state.clienteFactura.primerNombre}{" "}
                          {this.state.clienteFactura.segundoNombre}
                        </span>
                      </p>
                    </div>
                    <div class="col-md-6">
                      <p>
                        Apellido:{" "}
                        <span id="modal-cliente-apellido">
                          {this.state.clienteFactura.primerApellido}{" "}
                          {this.state.clienteFactura.segundoApellido}
                        </span>
                      </p>
                    </div>
                    <div class="col-md-6">
                      <p>
                        Correo:{" "}
                        <span id="modal-cliente-correo">
                          {this.state.clienteFactura.correo}
                        </span>
                      </p>
                    </div>
                    <div class="col-md-6">
                      <p>
                        Documento:{" "}
                        <span id="modal-cliente-documento">
                          {this.state.clienteFactura.documento}
                        </span>
                      </p>
                    </div>
                    <div class="col-md-6">
                      <p>
                        Tipo Documento:{" "}
                        <span id="modal-cliente-tipodoc">
                          {this.state.clienteFactura.tipoDocumento}
                        </span>
                      </p>
                    </div>
                  </div>
                  <h3>Datos del vendedor</h3>
                  <div class="row">
                    <div class="col-md-6">
                      <p>
                        Nombre:{" "}
                        <span id="modal-vendedor-nombre">
                          {this.state.vendedorFactura.primerNombre}{" "}
                          {this.state.vendedorFactura.segundoNombre}
                        </span>
                      </p>
                    </div>
                    <div class="col-md-6">
                      <p>
                        Apellido:{" "}
                        <span id="modal-vendedor-apellido">
                          {this.state.vendedorFactura.primerApellido}{" "}
                          {this.state.vendedorFactura.segundoApellido}
                        </span>
                      </p>
                    </div>
                  </div>
                  <h3>Detalle de los productos</h3>
                  <table class="table table-striped">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">cantidad</th>
                        <th scope="col">precio</th>
                      </tr>
                    </thead>
                    <tbody id="modal-product">
                      {this.state.facturaUnica.productos.map(
                        (producto, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.cantidad}</td>
                            <td>{producto.precio}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                  <div></div>
                </div>
                <div class="modal-footer">
                  
                  <button
                    type="button"
                    class="btn btn-primary w-100"
                    onClick={this.closeModal.bind(this)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </Modal>

          <div id="container-facturas">
            <h2 class="mb-4 text-center">Facturas</h2>

            <div class="container-fluid my-5">
              <div className="row my-3">
                <div className="col-md-4">
                  <label for="input-cliente">Buscar por cedula cliente</label>
                  <input className="form-control"
                    type="text"
                    placeholder="CC"
                    id="input-cliente"
                    value={this.state.documentoCliente}
                    onChange={(e) => {
                      this.setState({ documentoCliente: e.target.value });
                    }}
                    onKeyUp={this.BuscarDocumento.bind(this)}
                  />
                </div>
              </div>
              <div>
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Total</th>
                      <th scope="col">Acciones para realizar</th>
                    </tr>
                  </thead>
                  <tbody id="table-factura">
                    {this.state.facturas.map((factura, index) => (
                      <tr>
                        <td scope="row">{factura._id}</td>
                        <td>{factura.fecha}</td>
                        <td>{factura.total}</td>
                        <td>
                          <div className="text-center">
                            <button
                              class="btn  btn-primary w-25"
                              onClick={this.mostrarCampos.bind(this, index)}
                            >
                              <i class="fa fa-eye"></i>
                            </button>{" "}
                            <button
                              class="btn  btn-danger w-25"
                              onClick={this.eliminarFactura.bind(
                                this,
                                factura._id
                              )}
                            >
                              <i class="fa fa-minus-circle"></i>
                            </button>
                          </div>                            
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
