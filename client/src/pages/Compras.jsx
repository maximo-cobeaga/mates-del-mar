import React from "react";
import { Banner } from "../components/Banner";
import { NavBar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import compras from "../assets/compras.jpg";
import {Whatsapp} from './Whatsapp'

export function Compras() {
  return (
    <>
      <NavBar />
      <Banner />

      <section className="container">
        <div className="text-center p-5">
          <p className="fs-3 fw-normal">
            La distancia ya NO es una excusa Ahora todos los materos por el
            mundo pueden tener su compañero. Contactanos por Whatsapp para que
            te enviemos nuestro catalogo COMPLETO.
          </p>
          <div className="">
            <img
              style={{ maxHeight: "500px" }}
              className="img-fluid p-5"
              src={compras}
              alt=""
            />
            <br />
            <p className="fs-3 fw-normal mb-3">
              - Envios a traves de DHL - Podes pagar con Paypal, Western Union o
              alguna plataforma similar - America y Europa envios entre 30 y 40
              dolares
            </p>
            <div className="text-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/B8ZcRrWXOHA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Whatsapp />
      <Footer />
    </>
  );
}
