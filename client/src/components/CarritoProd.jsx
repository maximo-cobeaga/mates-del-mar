import { useEffect, useContext, useState } from "react";
import { ProductosContext } from "../context/ProductosContext";

export function CarritoProd({ prod }) {
  const [SubTotal, setSubTotal] = useState(0);
  const { deleteItem, modalIncioPaisForm, addItemToCart, precioOferta } =
    useContext(ProductosContext);

  function calculoSubToal(prod) {
    if (precioOferta(prod)) {
      setSubTotal(prod.amount * precioOferta(prod, modalIncioPaisForm));
    } else {
      if (modalIncioPaisForm === "AR") {
        setSubTotal(prod.amount * prod.precio);
      } else {
        setSubTotal(prod.amount * prod.precioDolar);
      }
    }
  }

  useEffect(() => {
    calculoSubToal(prod);
  });
  return (
    <tr>
      <td>
        <figure>
          <blockquote className="blockquote">
            <p>{prod.titulo}</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            {prod.diseño}
          </figcaption>
        </figure>
      </td>
      <td>${precioOferta(prod, modalIncioPaisForm)}</td>
      <td>
        <input
          type="number"
          min={1}
          readOnly={true}
          className="form-control w-50"
          value={prod.amount}
        />
      </td>
      <td>
        <button className="btn btn-success" onClick={() => addItemToCart(prod)}>
          Agregar
        </button>
        <button className="btn btn-danger" onClick={() => deleteItem(prod)}>
          Quitar
        </button>
      </td>
      <td>${Math.round(SubTotal)}</td>
    </tr>
  );
}
