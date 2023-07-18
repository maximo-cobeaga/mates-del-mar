import { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ProductosContext = createContext();

export function ProductosContextProvider(props) {
  const [compra, setCompra] = useLocalStorage("compra", []);
  const [pais, setPais] = useState("");
  const [preferenceId, setPreferenceId] = useState("");
  const [preferences, setPreferences] = useState([]);
  const [productoLenght, setProductoLenght] = useState(0);
  const [total, setTotal] = useState(0);
  const [formularioDatos, setFormularioDatos] = useLocalStorage(
    "DatosFormularios",
    []
  );
  const [dataPP, setDataPP] = useState({});
  const [dataMP, setDataMP] = useState({});
  const [variacionData, setVariacionData] = useState({});

  const [modalIncioPaisForm, setModalIncioPaisForm] = useLocalStorage(
    "paisForm",
    ""
  );
  const [modalFormData, setModalFormData] = useState(false);
  const [cartItem, setCartItem] = useState(() => {
    try {
      const productosEnLocalStorage = localStorage.getItem("cartProductos");
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartProductos", JSON.stringify(cartItem));
  }, [cartItem]);

  useEffect(() => {
    function totalprice() {
      if (modalIncioPaisForm === "AR") {
        setTotal(
          Math.round(
            cartItem.reduce(
              (previus, current) =>
                previus +
                current.amount *
                  (current.precio - (current.precio * current.oferta) / 100),
              0
            )
          )
        );
      } else {
        setTotal(
          Math.round(
            cartItem.reduce(
              (previus, current) =>
                previus +
                current.amount *
                  (current.precioDolar -
                    (current.precioDolar * current.oferta) / 100),
              0
            )
          )
        );
      }
    }
    totalprice();
  }, [cartItem, modalIncioPaisForm, pais]);

  const addItemToCart = (product) => {
    const inCart = cartItem.find(
      (prod) => prod.id === product.id && prod.diseño === product.diseño
    );

    if (inCart) {
      setCartItem(
        cartItem.map((prod) => {
          if (prod.id === product.id) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return prod;
        })
      );
    } else {
      setCartItem([...cartItem, { ...product, amount: 1 }]);
    }
  };

  const deleteItem = (product) => {
    const inCart = cartItem.find((prod) => prod.id === product.id);
    if (inCart.amount === 1) {
      setCartItem(cartItem.filter((prod) => prod.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((prod) => {
          if (prod.id === product.id) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else {
            return prod;
          }
        })
      );
    }
  };

  function prodEnOferta(prod) {
    if (prod.oferta !== 0) {
      return true;
    } else {
      return false;
    }
  }

  function precioOferta(prod, pais) {
    if (pais === "AR") {
      return prod.precio - (prod.oferta / 100) * prod.precio;
    } else {
      return prod.precioDolar - (prod.oferta / 100) * prod.precioDolar;
    }
  }

  function restaStock(prod) {
    console.log(prod);
  }

  return (
    <ProductosContext.Provider
      value={{
        compra,
        setCompra,
        preferences,
        setPreferenceId,
        setPreferences,
        preferenceId,
        cartItem,
        setCartItem,
        addItemToCart,
        deleteItem,
        productoLenght,
        setProductoLenght,
        prodEnOferta,
        precioOferta,
        restaStock,
        pais,
        setPais,
        modalIncioPaisForm,
        setModalIncioPaisForm,
        setTotal,
        total,
        setModalFormData,
        modalFormData,
        dataMP,
        setDataMP,
        dataPP,
        setDataPP,
        formularioDatos,
        setFormularioDatos,
        variacionData,
        setVariacionData
      }}
    >
      {props.children}
    </ProductosContext.Provider>
  );
}
