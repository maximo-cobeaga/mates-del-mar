import { useState, useContext, useDebugValue, useEffect } from "react";
import { ProductosContext } from "../context/ProductosContext";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffcanvasHeader from "react-bootstrap/esm/OffcanvasHeader";
import { Cart4 } from "react-bootstrap-icons";
import { DropDownButton } from "./DropDownButton";
import { DropDownCategorias } from "./DropDownCategorias";
import { useNavigate } from "react-router-dom";

export function NavBar() {
  const [mostrar, setMostrar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {});

  const abrir = () => {
    setMostrar(true);
  };
  const cerrar = () => {
    setMostrar(false);
  };

  return (
    <>
      <nav
        style={{ backgroundColor: "#2D4356" }}
        className=" navbar fixed-top "
      >
        <div className="container-fluid d-flex ">
          <div className="d-flex">
            <button
              onClick={abrir}
              className="navbar-toggler "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
              style={{ backgroundColor: "#F5F5F5" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <DropDownCategorias />
          </div>

          <a
            style={{ textDecoration: "none" }}
            onClick={() => {
              navigate("/");
            }}
          >
            <h1 className="display-6 fs-3 m-0 " style={{ color: "#F5F5F5" }}>
              Mates del Mar
            </h1>
          </a>
          <a
            onClick={() => {
              navigate("/carrito");
            }}
            type="button"
            className="btn btn-light border d-flex"
          >
            <Cart4 size={25} />
            <p className="m-0 ms-1 fw-bold">Carrito</p>
          </a>
        </div>
      </nav>

      <Offcanvas show={mostrar} onHide={cerrar}>
        <OffcanvasHeader closeButton>
          <Offcanvas.Title>Mates del Mar</Offcanvas.Title>
        </OffcanvasHeader>
        <Offcanvas.Body>
          <h5>
            <a
              onClick={() => {
                navigate("/blog");
              }}
              className="text-dark"
              style={{ textDecoration: "None" }}
            >
              Blog Matero
            </a>
          </h5>
          <hr />
          <h5>
            <a
              onClick={() => {
                navigate("/compras");
              }}
              className="text-dark"
              style={{ textDecoration: "None" }}
            >
              Compras Internacionales
            </a>
          </h5>
          <hr />
          <h5>
            <a
              onClick={() => {
                navigate("/grabados");
              }}
              className="text-dark"
              style={{ textDecoration: "None" }}
            >
              Grabados a Laser
            </a>
          </h5>
          <hr />
          <h5>
            <a
              onClick={() => {
                navigate("/regalos");
              }}
              className="text-dark"
              style={{ textDecoration: "None" }}
            >
              Regalos Empresariales
            </a>
          </h5>
          <hr />
          <h5>
            <a
              onClick={() => {
                navigate("/politicas");
              }}
              className="text-dark"
              style={{ textDecoration: "None" }}
            >
              Politicas de Cambios y Devoluciones
            </a>
          </h5>
          <hr />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
