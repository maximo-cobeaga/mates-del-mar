import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { ProductosContext } from "../context/ProductosContext";
import { useContext, useEffect } from "react";
import { restaStock, obtenerProducto } from "../api/productos.api";
import { enviarMail } from "../api/ventas.api";

export function PaymentPP() {
  const {
    total,
    cartItem,
    setCartItem,
    formularioDatos,
    setFormularioDatos,
    setDataPP,
    compra,
  } = useContext(ProductosContext);

  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "AamZisAXx-Xd0-M0pUTNetol5KdH8XW8IY315RkTim1-fVecS1SFZ3cAa8tiMLSH1X8gsMwT5milXkpW",
      }}
    >
      <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            cartItem.forEach((prod) => {
              async function restar() {
                const { data } = await obtenerProducto(prod.id);
                const newStock = data.stock - prod.amount;
                restaStock(prod.id, { stock: newStock });
              }
              restar();
            });
            const datosPP = [
              {
                pago: "PayPal",
                payerID: data.payerID,
                orderID: data.orderID,
              },
            ];
            enviarMail(compra.concat(datosPP));
            setFormularioDatos([]);

            setCartItem([]);
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
