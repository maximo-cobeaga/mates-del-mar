import { useContext, useEffect, useState } from "react";
import { PaymentMP } from "../components/PaymentMP";
import { CarritoProductos } from "../components/CarritoProductos";
import { NavBar } from "../components/Navbar";
import { ProductosContext } from "../context/ProductosContext";
import axios from "axios";
import { ModalForm } from "../components/ModalForm";
import { PaymentPP } from "../components/PaymentPP";
import {Footer} from '../components/Footer'
import {Whatsapp} from './Whatsapp'


export function Carrito() {
  const [preferenceId, setPreferenceId] = useState(null);
  const {
    cartItem,
    modalFormData,
    setModalFormData,
    prodEnOferta,
    modalIncioPaisForm,
    precioOferta,
    productoLenght,
    pais,
  } = useContext(ProductosContext);
  const [mostra, setMostra] = useState(false);

  const preferenceAPI = axios.create({
    baseURL: "https://matesdelmar.onrender.com/payment/proccess-payment/",
  });

  function preferenciasAuto() {
    const newPreferences = cartItem.map((prod) => {
      if (prodEnOferta(prod)) {
        return {
          id: prod.id,
          category_id: prod.categoria,
          title: prod.titulo,
          quantity: prod.amount,
          unit_price: prod.precio - (prod.precio * prod.oferta) / 100,
        };
      } else {
        return {
          id: prod.id,
          category_id: prod.categoria,
          title: prod.titulo,
          quantity: prod.amount,
          unit_price: prod.precio,
        };
      }
    });
    preferenceAPI.post("/", newPreferences).then((response) => {
      setPreferenceId(response.data.id);
    });
  }

  const handleBuy = () => {
    preferenciasAuto();
    setMostra(true);
  };

  function monedaAR() {
    if (preferenceId && modalIncioPaisForm === "AR" && modalFormData) {
      return <PaymentMP preferenceId={preferenceId} />;
    } else if (modalIncioPaisForm !== "AR") {
      if (modalFormData) return <PaymentPP />;
    } else {
    }
  }

  useEffect(() => {
    preferenciasAuto();
    setModalFormData(false);
  }, [cartItem]);

  return (
    <>
      <NavBar />
      <CarritoProductos />

      {productoLenght !== 0 && (
        <div className="container" style={{ maxWidth: "50%" }}>
          <button onClick={handleBuy} className="btn btn-primary w-100">
            Pagar
          </button>
          {mostra && <ModalForm mostrar={mostra} setMostrar={setMostra} />}
          {monedaAR()}
        </div>
      )}
    <Whatsapp />
    </>
  );
}
