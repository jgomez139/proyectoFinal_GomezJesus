import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

import { Camisa } from "../../modelos/Camisa";
import { ARREGLO_CAMISAS } from "../../mocks/Camisa-mocks";
import { ARREGLO_CAMISA_TALLA } from "../../utilidades/dominios/DomTalla"; 

export const CamiAdmin = () => {
  const [objCami, setObjCami] = useState<Camisa>(
    new Camisa(0, "", "", "", "", "")
  );
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => {
    setShow(false);
  };
 
  const eliminarCamisa = (codigo: number) => {
    const cantidad = arrCamisas.length;

    for (let i = 0; i < cantidad; i++) {
      if (arrCamisas[i] !== undefined) {
        const comparar = arrCamisas[i].codCamisa;

        if (comparar === codigo) {
          arrCamisas.splice(i, 1);
        }
      }
    }
  };
  const [arrCamisas] = useState<Camisa[]>(ARREGLO_CAMISAS);
  
  const obtenerNombreTalla = (valor: string) => {
    for (const objTalla of ARREGLO_CAMISA_TALLA) {
      if (objTalla.codTalla == valor) {
        return objTalla.tallaCamisa;
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 mt-4">
          <table className="table table-striped table-hover">
            <thead>
              <tr className="table-danger">
                <th style={{ width: "10%" }}>Código</th>
                <th style={{ width: "30%" }}>Marca</th>
                <th style={{ width: "20%" }}>Color</th>
                <th style={{ width: "20%" }}>Talla</th>
                <th style={{ width: "10%" }}>Imagen</th>
                <th style={{ width: "10%" }}>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {arrCamisas.map((miCami: Camisa) => (
                <tr className="align-middle">
                  <td>{miCami.codCamisa}</td>
                  <td>{miCami.marcaCamisa}</td>
                  <td>{miCami.colorCamisa}</td>
                  <td>{obtenerNombreTalla(miCami.codTallaCamisa)}</td>
                  <td>
                  <img
                      src={miCami.imagenCamisaBase64}
                      alt=""
                      className="imagenListado"
                    />
                    <div className="text-info">{miCami.imagenCamisa}</div>
                  </td>
                  <td className="text-center">
                    <a
                      href="/#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShow(true);
                        setObjCami(miCami);
                      }}
                    >
                      <i className="fa-solid fa-trash-can rojito"></i>
                    </a>{" "}
                    <NavLink to={"/camactual/" + miCami.codCamisa}>
                      <i className="fa-regular fa-pen-to-square verde"></i>
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Eliminar Camisas</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              ¿Está seguro de eliminar la camisa {objCami.marcaCamisa}?
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  setShow(false);
                }}
              >
                Cancelar
              </Button>

              <Button
                variant="danger"
                onClick={() => {
                  eliminarCamisa(objCami.codCamisa);
                  setShow(false);
                }}
              >
                Eliminar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};