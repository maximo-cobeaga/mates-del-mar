import React from "react";

export function ButtonW() {
  return (
    <div className="text-center p-3 border-top border-bottom border-secondary">
      <p className="p-1 fs-3 fw-normal">Contactanos a nuestro whatsapp</p>
      <a
        className="p-1 btn btn-primary btn-lg"
        href="https://api.whatsapp.com/send/?phone=542235733782&text&type=phone_number&app_absent=0"
      >
        Haz click aqui
      </a>
    </div>
  );
}
