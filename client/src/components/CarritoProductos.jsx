import { useContext, useEffect, useState } from "react";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoProd } from "./CarritoProd";
import { useNavigate } from "react-router-dom";
export function CarritoProductos() {
  const navigate = useNavigate();
  const {
    cartItem,
    setTotal,
    total,
    setProductoLenght,
    modalIncioPaisForm,
    productoLenght,
  } = useContext(ProductosContext);

  useEffect(() => {
    setProductoLenght(
      cartItem.reduce((previus, current) => previus + current.amount, 0)
    );
  }, [cartItem]);

  return (
    <div
      onLoad={() => {
        setPagar(false);
      }}
      className="container" style={{ marginTop:'100px' }}
    >
      <h1 className="text-center mt-5">Carrito de Compras</h1>
      {productoLenght === 0 ? (
        <div className="text-center p-5">
          <h1>El carrito de compras esta vacio</h1>
          <a onClick={()=>{
            navigate('/')
          }} className="text-center m-5 btn btn-primary">Volver a la Tienda</a>
        </div>
      ) : (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Productos: {productoLenght}</th>
              </tr>
            </thead>
            <tbody>
              {cartItem.map((prod, i) => (
                <CarritoProd key={i} prod={prod} />
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="text-right">
                  <strong>Total:</strong>
                </td>
                <td>
                  <strong>${total}</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </>
      )}
    </div>
  );
}
