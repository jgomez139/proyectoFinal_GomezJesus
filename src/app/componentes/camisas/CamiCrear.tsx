import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Camisa } from "../../modelos/Camisa";
import noFoto from "../../../assets/img/noDisponible.png";
import { CamisaTalla } from "../../modelos/CamisaTalla";
import { ARREGLO_CAMISAS } from "../../mocks/Camisa-mocks";
import { useFormulario } from "../../utilidades/misHooks/useFormulario";
import { ConvertirBase64 } from "../../utilidades/funciones/ConvertirBase64";
import { ARREGLO_CAMISA_TALLA } from "../../utilidades/dominios/DomTalla";

export const CamiCrear = () => {
  const irsePara = useNavigate();

  type formHtml = React.FormEvent<HTMLFormElement>;
  const [enProceso, setEnProceso] = useState<boolean>(false);
  const [imgBase64, setImgBase64] = useState<any>();
  const [imgMiniatura, setimgMiniatura] = useState<any>(noFoto);

  const [arrCamisas] = useState<Camisa[]>(ARREGLO_CAMISAS);
  const [arrTalla] = useState<CamisaTalla[]>(ARREGLO_CAMISA_TALLA);

  let {
    marcaCamisa,
    colorCamisa,
    codTallaCamisa,
    imagenCamisa,
    dobleEnlace,
    objeto,
  } = useFormulario<Camisa>(new Camisa(0, "", "", "", "", ""));

  const enviarForm = (objForm: formHtml) => {
    objForm.preventDefault();
    const formulario = objForm.currentTarget;

    if (formulario.checkValidity() === false) {
      objForm.preventDefault();
      objForm.stopPropagation();
      setEnProceso(true);
    } else {
      const ultimaCami = arrCamisas[arrCamisas.length - 1];
      const nuevoCod = ultimaCami.codCamisa + 1;
      objeto.codCamisa = nuevoCod;
      objeto.imagenCamisa = imagenCamisa.substring(
        imagenCamisa.lastIndexOf("\\") + 1
      );
      objeto.imagenCamisaBase64 = imgBase64;
      arrCamisas.push(objeto);
      setEnProceso(false);
      irsePara("/camlis");
    }
  };

  const cargarImagen = async (e: any) => {
    const archivos = e.target.files;
    const imagen = archivos[0];
    setimgMiniatura(URL.createObjectURL(imagen));
    dobleEnlace(e);
    const base64 = await ConvertirBase64(imagen);
    setImgBase64(base64);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-5 mt-5 pb-4">
        <Form noValidate validated={enProceso} onSubmit={enviarForm}>
          <div className="card">
            <div className="card-header">
              <h5 className=" rojito">Formulario creación</h5>
            </div>

            <div className="card-body">
              <div className="mb-3">
                <Form.Group controlId="nom">
                  <Form.Label>
                    <span className="rojito">*</span> Marca de la camisa
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    required
                    type="text"
                    name="marcaCamisa"
                    value={marcaCamisa}
                    onChange={dobleEnlace}
                  />
                </Form.Group>
              </div>

              <div className="mb-3">
                <Form.Group controlId="col">
                  <Form.Label>
                    <span className="rojito">*</span> Color
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    required
                    type="text"
                    name="colorCamisa"
                    value={colorCamisa}
                    onChange={dobleEnlace}
                  />
                </Form.Group>
              </div>

              <div className="mb-3">
                <Form.Group controlId="tal">
                  <Form.Label>
                    <span className="rojito">*</span> Talla
                  </Form.Label>

                  <Form.Select
                    size="sm"
                    required
                    name="codTallaCamisa"
                    value={codTallaCamisa}
                    onChange={dobleEnlace}
                  >
                    <option value="">Seleccione una talla</option>

                    {arrTalla.map((miTalla: CamisaTalla) => (
                      <option
                        value={miTalla.codTalla}
                        key={miTalla.codTalla}
                      >
                        {miTalla.tallaCamisa}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="mb-3">
                <Form.Group controlId="fot">
                  <Form.Label>
                    <span className="rojito">*</span> Imágen
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    required
                    type="file"
                    name="imagenCamisa"
                    value={imagenCamisa}
                    onChange={cargarImagen}
                  />
                </Form.Group>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-center">
                  <img
                    src={imgMiniatura}
                    alt="no foto"
                    className="maximoTamanoCreacion"
                  />
                </div>
              </div>
            </div>

            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Crear Camisa
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
