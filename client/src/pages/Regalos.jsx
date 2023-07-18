import React from "react";
import { Banner } from "../components/Banner";
import { NavBar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import regalos1 from "../assets/Regalos1.jpg";
import regalos2 from "../assets/regalos2.jpg";
import regalos3 from "../assets/regalos3.jpg";
import regalos4 from "../assets/regalos4.jpg";
import regalos5 from "../assets/regalos5.jpg";
import regalos6 from "../assets/regalos6.jpg";
import { Whatsapp } from "./Whatsapp";

export function Regalos() {
  return (
    <>
      <NavBar />

      <Banner />
      <section className="container" style={{ position: "static" }}>
        <div className="text-center">
          <h2 className="m-3">Regalos Empresariales</h2>
          <p className="fs-3 fw-normal">
            En Mates del Mar buscamos que tengas el regalo ideal para tus
            proveedores, clientes o personal ofreciendo la mejor calidad en
            nuestro producto.
          </p>
          <img className="img-fluid w-50" src={regalos1} alt="" />
          <p className="fs-3 fw-normal">
            .Elegís el producto que mas te guste <br />
            .Nos mandas el logo de tu marca o lo que desees personalizar <br />
            .Te presupuestamos la cantidad que vos quieras
          </p>

          <div className="text-center p-3 border-top border-bottom border-secondary">
            <a
              className="p-1 btn btn-info btn-lg"
              href="https://api.whatsapp.com/send/?phone=542235733782&text&type=phone_number&app_absent=0"
            >
              Nuestro whatsapp
            </a>
            <p className="p-1 fs-3 fw-normal">
              !Contactanos a nuestro whatsapp¡
            </p>
          </div>
          <div className="container text-center p-3">
            <div className="row">
              <div className="col w-30">
                <img className="img-fluid" src={regalos2} alt="imagen" />
              </div>
              <div className="col w-30">
                <img className="img-fluid" src={regalos3} alt="imagen" />
              </div>
              <div className="col w-30">
                <img className="img-fluid" src={regalos4} alt="imagen" />
              </div>
            </div>
            <div className="row p-2">
              <div className="col w-30">
                <img className="img-fluid" src={regalos5} alt="imagen" />
              </div>
              <div className="col w-30">
                <img className="img-fluid" src={regalos6} alt="imagen" />
              </div>
              <div className="col w-30">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/0Do-FMmm9s8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Whatsapp />
      <Footer />
    </>
  );
}
