import { useState, useEffect, useContext } from "react";
import { obtenerProducto } from "../api/productos.api";
import { useParams, useNavigate } from "react-router-dom";
import { NavBar } from "../components/Navbar";
import Carousel from "react-bootstrap/Carousel";
import { ProductosContext } from "../context/ProductosContext";
import { ProductosRelacionados } from "../components/ProductosRelacionados";
import { FormularioVariacion } from "../components/FormularioVariacion";
import { Footer } from "../components/Footer";
import { InfoCompras } from "../components/InfoCompras";
import { Whatsapp } from "./Whatsapp";

export function DetalleProducto() {
  const { addItemToCart, prodEnOferta, precioOferta, modalIncioPaisForm } =
    useContext(ProductosContext);
  const navigate = useNavigate();
  const params = useParams();
  const [prod, setProd] = useState({});
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState("");
  const [variaciones, setVariaciones] = useState([]);

  useEffect(() => {
    async function CargarDatos() {
      const { data } = await obtenerProducto(params.id);
      setVariaciones(data.variaciones);
      setProd(data);
      setImages(data.images);
      setVideo(`https://www.youtube.com/embed/${data.video}`);
    }
    CargarDatos();
  }, []);

  return (
    <>
      <NavBar />
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <Carousel>
                {images.map((i) => (
                  <Carousel.Item
                    interval={1000}
                    style={{ height: "500px" }}
                    key={i.id}
                  >
                    <img
                      className="d-block w-100"
                      style={{
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={i.imagen}
                      alt={i.titulo}
                    />
                  </Carousel.Item>
                ))}
                {prod.video !== "" && (
                  <Carousel.Item
                    key={100 + prod.key}
                    interval={1000}
                    style={{ height: "500px" }}
                  >
                    <iframe
                      width="560"
                      height="500"
                      src={video}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </Carousel.Item>
                )}
              </Carousel>
            </div>
            <div className="col-md-6">
              <h1 className="display-5 fw-bolder">{prod.titulo}</h1>
              <div className="fs-5 mb-5">
                {prodEnOferta(prod) ? (
                  <>
                    {modalIncioPaisForm === "AR" ? (
                      <span className="text-muted text-decoration-line-through">
                        ${prod.precio}
                      </span>
                    ) : (
                      <span className="text-muted text-decoration-line-through">
                        ${prod.precioDolar}
                      </span>
                    )}

                    <span>${precioOferta(prod, modalIncioPaisForm)}</span>
                  </>
                ) : modalIncioPaisForm === "AR" ? (
                  <span>${prod.precio}</span>
                ) : (
                  <span>${prod.precio}</span>
                )}
              </div>
              <p className="lead">{prod.descripcion}</p>

              {variaciones.length === 0 ? (
                <a
                  className="btn btn-outline-dark"
                  onClick={() => {
                    addItemToCart(prod);
                    navigate("/carrito");
                  }}
                >
                  Agregar al carrito
                </a>
              ) : (
                <FormularioVariacion variaciones={variaciones} prod={prod} />
              )}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Related items section--> */}
      <ProductosRelacionados etiqueta={prod.etiqueta} />
      <Whatsapp />
      <InfoCompras />
      <Footer />
    </>
  );
}
