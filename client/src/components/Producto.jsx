import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";

export function Producto({ prod }) {
  const navigate = useNavigate();
  const { modalIncioPaisForm, addItemToCart, prodEnOferta, precioOferta } =
    useContext(ProductosContext);

  const { images } = prod;
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {prodEnOferta(prod) && prod.envio_gratis === true && (
          <div className="position-absolute">
            <div
              className="badge bg-dark text-white "
              style={{ top: "0.5rem", right: " 0.5rem" }}
            >
              En oferta
            </div>
            <div
              className="badge bg-dark text-white "
              style={{ top: "0.5rem", right: " 0.5rem" }}
            >
              Envio Gratis
            </div>
          </div>
        )}
        {prod.envio_gratis === true && prodEnOferta(prod) === false && (
          <div className="position-absolute">
            <div
              className="badge bg-dark text-white"
              style={{ top: "0.5rem", right: " 0.5rem" }}
            >
              Envio Gratis
            </div>
          </div>
        )}
        {prod.envio_gratis === false && prodEnOferta(prod) === true && (
          <div className="position-absolute">
            <div
              className="badge bg-dark text-white"
              style={{ top: "0.5rem", right: " 0.5rem" }}
            >
              En oferta
            </div>
          </div>
        )}

        <img
          onClick={() => {
            navigate(`/productos/${prod.id}`);
          }}
          className="card-img-top"
          src={images[0].imagen}
          alt="..."
        />
        {/* Detalles de producto */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* Nombre de Producto */}
            <a
              onClick={() => {
                navigate(`/productos/${prod.id}`);
              }}
            >
              <h5 className="fw-bolder">{prod.titulo}</h5>
            </a>
            {/* Precio de Producto */}
            {prodEnOferta(prod) ? (
              <p>
                {modalIncioPaisForm === "AR" ? (
                  <span className="text-decoration-line-through text-muted m-1">
                    ${prod.precio}
                  </span>
                ) : (
                  <span className="text-decoration-line-through text-muted m-1">
                    ${prod.precioDolar}
                  </span>
                )}
                ${precioOferta(prod, modalIncioPaisForm)}
              </p>
            ) : (
              <span>${prod.precio}</span>
            )}
          </div>
        </div>
        {/* Acciones de Producto */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a
              onClick={() => navigate(`/productos/${prod.id}`)}
              className="btn btn-outline-dark mt-auto"
            >
              Ver Producto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
