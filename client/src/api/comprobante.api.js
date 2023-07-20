import axios from "axios";

const comprobanteAPI = axios.create({
  baseURL: "http://127.0.0.1:8000/ventas/comprobante/comprobante/",
});

export const cargarComprobante = (comprobante) =>
  comprobanteAPI.post("/", comprobante);
