import React, { useContext, useState } from "react";
import { cargarComprobante } from "../api/comprobante.api";
import { ProductosContext } from "../context/ProductosContext";
import { enviarMail } from "../api/ventas.api";

export function Transferencia() {
  const { compra, setFormularioDatos } = useContext(ProductosContext);
  const [archivo, setArchivo] = useState(null);

  const subirArchivos = (e) => {
    setArchivo(e[0]);
  };

  const InsertarArchivos = async (e) => {
    const formData = new FormData();

    const DatosTF = [
      {
        pago: "Transferencia",
        comprobante: archivo.name,
      },
    ];

    formData.append("comprobante", archivo);
    formData.append("titulo", archivo.name);
    await cargarComprobante(formData);
    enviarMail(compra.concat(DatosTF));
    setFormularioDatos([]);
  };

  return (
    <div className="container border mt-2">
      <h2 className="text-center">Datos de Transferencia</h2>
      <p className="text-center fs-6 w-100 fw-bold text-danger">
        Adjuntar comprobante
      </p>
      <p className="text-center fs-5 fw-normal">matesdelmar1@gmail.com</p>
      <ul className="list-group">
        <li className="list-group-item text-center">BruBank</li>
        <li className="list-group-item text-center">
          CBU: 1430001713019310280017
        </li>
        <li className="list-group-item text-center">ALIAS: ignaciomontiel</li>
        <li className="list-group-item text-center">CUIL: 20-41783585-8</li>
      </ul>
      <form>
        <div className="mb-3 text-center">
          <label className="text-center">Comprobante</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => subirArchivos(e.target.files)}
          />
        </div>
        <button className="btn" onClick={(e) => InsertarArchivos(e)}>
          Enviar Comprobante
        </button>
      </form>
    </div>
  );
}
