import React from "react";
import { Banner } from "../components/Banner";
import { NavBar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import grabados1 from "../assets/grabados.jpg";
import grabados2 from "../assets/grabados2.jpeg";
import grabados3 from "../assets/grabados3.jpg";
import { ButtonW } from "../components/ButtonW";
import { Whatsapp } from "./Whatsapp";

export function Grabados() {
  return (
    <>
      <NavBar />
      <Banner />
      <section className="container">
        <h2 className="text-center mt-5">¿CÓMO PUEDO PERSONALIZAR MI MATE?</h2>
        <div className="text-center p-2">
          <div className="">
            <img
              width={700}
              className="img-fluid img-thumbnail p-2"
              src={grabados1}
              alt=""
            />
          </div>
          <h3>
            El paso a paso para grabar la virola del mate, en Camioneros Virola
            de Acero.
          </h3>
          <p className="fs-3 fw-normal">
            Paso 1: Que grabar sobre la virola. En el link a continuación vas a
            encontrar distintos álbumes de fotos, con las posibles tipografías,
            imágenes, escudos, etc. que se pueden grabar sobre la virola. A cada
            foto le corresponde un número (con el cursor sobre la imagen se
            puede ver) para poder elegir.
          </p>
          <a href="https://www.flickr.com/photos/197357394@N06/albums">
            Diseños
          </a>
          <p className="fs-3 fw-normal">
            Paso 2: Ubicación del grabado. Una vez elegidos los diseños para el
            grabado, hay que definir la ubicación de los mismos. Para eso, usar
            esta imagen como referencia.
          </p>

          <img
            width={700}
            className="img-fluid img-thumbnail p-2"
            src={grabados2}
            alt=""
          />
          <img
            width={700}
            className="img-fluid img-thumbnail p-2"
            src={grabados3}
            alt=""
          />
          <p className="fs-3 fw-normal">
            Paso 3: Pedir tu mate personalizado. Ya con el diseño y ubicación
            del grabado definido, dejanos un mensaje para hacer tu pedido.
          </p>
        </div>
        <ButtonW />
      </section>
      <Whatsapp />
      <Footer />
    </>
  );
}
