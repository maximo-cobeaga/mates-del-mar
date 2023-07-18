import axios from "axios";

const productosApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/productos/",
});

export const obtenerProductos = () => productosApi.get("/");
export const obtenerProducto = (prodId) => productosApi.get(`/${prodId}/`);
export const restaStock = (prodId, quantity) => productosApi.patch(`/${prodId}/`, quantity)