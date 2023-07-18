import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState } from "react";

export function PaymentMP({ preferenceId }) {
  initMercadoPago("TEST-356a3f2c-7c7a-4afa-be33-80f9804b38ce");

  return (
    <Wallet
      initialization={{
        preferenceId: preferenceId,
        redirectMode: "self",
      }}
    />
  );
}
