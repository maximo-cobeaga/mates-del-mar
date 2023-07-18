import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerProductos } from "../api/productos.api";
import { Banner } from "../components/Banner";
import { Producto } from "../components/Producto";
import { NavBar } from "../components/Navbar";
import { obtenerCategorias } from "../api/categorias.api";
import {Footer} from '../components/Footer'
import {Whatsapp} from './Whatsapp'


export function Categorias() {
  const params = useParams();
  const [productosCat, setProductosCat] = useState([]);
  const [categoria, setCategoria] = useState("");
  useEffect(() => {
    async function categoria() {
      const { data } = await obtenerCategorias();
      data.find((cat) => {
        cat.id === Math.floor(params.cat);
        setCategoria(cat.titulo);
      });
    }

    async function cargarProductos() {
      const { data } = await obtenerProductos();
      setProductosCat(
        data.filter(
          (prod) => prod.stock > 0 && prod.categoria === Math.floor(params.cat)
        )
      );
    }
    categoria();
    cargarProductos();
  }, []);
  return (
    <>
      <NavBar />
      <Banner />
      <section className="py-5">
        <h2 className="text-center">{categoria}</h2>
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {productosCat.length === 0 ? (
              <h5>No hay productos aun</h5>
            ) : (
              productosCat.map((prod) => <Producto key={prod.id} prod={prod} />)
            )}
          </div>
        </div>
      </section>
      <Whatsapp />
      <Footer />
    </>
  );
}
