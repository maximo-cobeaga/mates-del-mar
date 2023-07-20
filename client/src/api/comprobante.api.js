import axios from "axios";

const comprobanteAPI = axios.create({
  baseURL: "https://matesdelmar.onrender.com/ventas/comprobante/comprobante/",
});

export const cargarComprobante = (comprobante) =>
  comprobanteAPI.post("/", comprobante);
