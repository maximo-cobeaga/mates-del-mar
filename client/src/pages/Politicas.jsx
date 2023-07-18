import React from "react";
import { Banner } from "../components/Banner";
import { NavBar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import politicas from "../assets/politicas.jpg";
import {Whatsapp} from './Whatsapp'

export function Politicas() {
  return (
    <>
      <NavBar />
      <Banner />

      <section className="container">
        <div className="text-center ">
          <h2 className="m-3">Politiacas de Cambios y Devoluciones</h2>
          <p className="fs-3 fw-normal">
            Nuestros productos tienen garantía de 30 días por fallas de fábrica.
            La garantía NO cubre un mal uso del producto ni un accidente
            doméstico -caídas, golpes, entre otros-. Recordamos que nuestros
            mates son de calabaza, y este al ser un fruto, el tamaño VARÍA y no
            existen mates idénticos. Dicho esto, el tamaño del mate NO es motivo
            de cambio.
          </p>
          <div className="">
            <img
              style={{ maxHeight: "500px" }}
              width={700}
              className="img-fluid img-thumbnail  p-2"
              src={politicas}
              alt="politicas"
            />
          </div>
        </div>
      </section>
      <Whatsapp />
      <Footer />
    </>
  );
}
