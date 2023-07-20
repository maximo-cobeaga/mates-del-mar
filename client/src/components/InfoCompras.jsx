import React from "react";
import testimonio1 from "../assets/testimonio1.jpeg";
import testimonio2 from "../assets/testimonio2.jpeg";

export function InfoCompras() {
  return (
    <section className="w-100 py-5 p-5 mb-0" style={{ backgroundColor: "#435B66" }}>
      <h2 className="text-center mb-5 text-light">
        Testimonios de nuestros clientes
      </h2>
      <div className="container-fluid  text-center">
        <div className="row">
          <div className="col-sm">
            <img
              src={testimonio1}
              alt="testimonio1"
              style={{ maxHeight: "400px" }}
              className="img-fluid w-auto img-thumbnail"
            />
          </div>
          <div className="col-sm">
            <img
              src={testimonio2}
              alt="testimonio2"
              style={{ maxHeight: "400px" }}
              className="img-fluid w-auto img-thumbnail"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
