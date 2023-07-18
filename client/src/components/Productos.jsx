import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { enviarMail } from "../api/ventas.api";
import { Producto } from "./Producto";
import {
  obtenerProducto,
  obtenerProductos,
  restaStock,
} from "../api/productos.api";
import { useSearchParams } from "react-router-dom";
import { ProductosContext } from "../context/ProductosContext";

export function Productos() {
  const navigate = useNavigate();

  const {
    cartItem,
    setCartItem,
    setDataMP,
    formularioDatos,
    setFormularioDatos,
    compra,
    setCompra
  } = useContext(ProductosContext);
  const [productos, setProductos] = useState([]);
  const { search } = useLocation();
  let [serchParams] = useSearchParams();

  useEffect(() => {
    async function cargarProductos() {
      const { data } = await obtenerProductos();
      setProductos(data.filter((prod) => prod.stock > 0 && prod.principal === true));
    }
    cargarProductos();

    if (search) {
      if (serchParams.get("status") === "approved") {
        const datosMp = [
          {
            pago: "MercadoPago",
            paymentID: serchParams.get("payment_id"),
            collectionID: serchParams.get("collection_id"),
          },
        ];
        console.log("  --Compra-- desde: productos");
        console.log(compra.concat(datosMp));
        enviarMail(compra.concat(datosMp))

        setFormularioDatos([]);

        cartItem.forEach((prod) => {
          async function apiGet() {
            const { data } = await obtenerProducto(prod.id);
            const newStock = data.stock - prod.amount;
            restaStock(prod.id, { stock: newStock });
            setCartItem([]);
            navigate("/");
          }
          apiGet();
        });
      }
    }
  }, []);

  return (
    <section className="py-5">
      <h2 className="text-center">Los mas vendidos</h2>
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {productos.map((prod) => (
            <Producto key={prod.id} prod={prod} />
          ))}
        </div>
      </div>
    </section>
  );
}
