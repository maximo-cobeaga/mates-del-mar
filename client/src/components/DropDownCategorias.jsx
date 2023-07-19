import React, { useEffect, useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { obtenerCategorias } from "../api/categorias.api";
import { useNavigate } from "react-router-dom";

export function DropDownCategorias() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    async function cargarDatos() {
      const { data } = await obtenerCategorias();
      setCategorias(data);
    }
    cargarDatos();
  }, []);

  return (
    <DropdownButton
      className="text-light"
      title="Productos"
      variant="none"
    >
      <Dropdown.Item
        onClick={() => {
          navigate("/");
        }}
      >
        Inicio
      </Dropdown.Item>
      {categorias.map((cat) => (
        <Dropdown.Item
          key={cat.id}
          onClick={() => {
            navigate("/categorias/" + cat.id);
          }}
        >
          {cat.titulo}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}
