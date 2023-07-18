import React from 'react'
import ReactWhatsappButton from "react-whatsapp-button";

export function Whatsapp() {
  return (
    <div className="App">
      <ReactWhatsappButton
        countryCode="54"
        phoneNumber="2236323009"
      />
    </div>
  )
}