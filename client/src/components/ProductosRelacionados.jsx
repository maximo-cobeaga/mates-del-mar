import React, { useEffect, useState } from "react";
import { obtenerProductos } from "../api/productos.api";
import { Producto } from "./Producto";

export function ProductosRelacionados({ etiqueta }) {
  const [Relacionados, setRelacionados] = useState([]);
  useEffect(() => {
    async function obtenerdatos() {
      const { data } = await obtenerProductos();
      const prodRelacionados = data.filter(
        (prod) => prod.etiqueta === etiqueta
      );
      setRelacionados(prodRelacionados);
    }

    obtenerdatos();
  }, [etiqueta]);

  return (
    <section className="py-5 bg-light">
      <div className="container px-4 px-lg-5 mt-5">
        <h2 className="fw-bolder mb-4 text-center">Productos Relacionados</h2>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {Relacionados.map((prod) => (
            <Producto prod={prod} key={prod.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
