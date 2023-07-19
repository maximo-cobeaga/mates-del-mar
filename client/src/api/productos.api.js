import axios from "axios";

const productosApi = axios.create({
  baseURL: "https://matesdelmar.onrender.com/api/productos/",
});

export const obtenerProductos = () => productosApi.get("/");
export const obtenerProducto = (prodId) => productosApi.get(`/${prodId}/`);
export const restaStock = (prodId, quantity) => productosApi.patch(`/${prodId}/`, quantity)