import { useState, useContext, useDebugValue, useEffect } from "react";
import { ProductosContext } from "../context/ProductosContext";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffcanvasHeader from "react-bootstrap/esm/OffcanvasHeader";
import { Cart4 } from "react-bootstrap-icons";
import { DropDownButton } from "./DropDownButton";
import { DropDownCategorias } from "./DropDownCategorias";
import {useNavigate} from 'react-router-dom'

export function NavBar() {
  const [mostrar, setMostrar] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {});

  const abrir = () => {
    setMostrar(true);
  };
  const cerrar = () => {
    setMostrar(false);
  };

  return (
    <div className="fixed-top">
      <nav style={{position:'static'}} className="navbar bg-light fixed-top ">
        <div className="container-fluid ">
          <div className="d-flex">
            <button
              onClick={abrir}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <DropDownCategorias />
          </div>

          <a className="navbar-brand" onClick={()=>{
            navigate('/')
          }}>
            <h1 className="display-6 fs-3 m-0">Mates del Mar</h1>
          </a>
          <div className="d-flex ">
            <DropDownButton />
            <a onClick={()=>{
              navigate('/carrito')
            }} type="button" className="btn btn-light border">
              <Cart4 size={25} />
            </a>
          </div>
        </div>
      </nav>

      
      
      <Offcanvas show={mostrar} onHide={cerrar}>
        <OffcanvasHeader closeButton>
          <Offcanvas.Title>Mates del Mar</Offcanvas.Title>
        </OffcanvasHeader>
        <Offcanvas.Body>
          <h5>
            <a
              onClick={()=>{
                navigate('/blog')
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
              onClick={()=>{
                navigate('/compras')
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
              onClick={()=>{
                navigate('/grabados')
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
              onClick={()=>{
                navigate('/regalos')
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
              onClick={()=>{
                navigate('/politicas')
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
    </div>
  );
}
