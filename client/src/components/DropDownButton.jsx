import Dropdown from "react-bootstrap/Dropdown";
import { ProductosContext } from "../context/ProductosContext";
import { useContext } from "react";

export function DropDownButton() {
  const { setModalIncioPaisForm } =
    useContext(ProductosContext);

  const handleClick = (pais) => {
    setModalIncioPaisForm(pais);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Monedas
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  onClick={()=>handleClick("AR")}>ARS</Dropdown.Item>
        <Dropdown.Item  onClick={()=>handleClick("US")}>USD</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
