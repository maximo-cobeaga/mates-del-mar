import axios from "axios";

const ventasAPI = axios.create({
  baseURL: "http://127.0.0.1:8000/ventas/",
});

export const enviarMail = (datos) =>
  ventasAPI.post("/", datos).then((response) => {
    console.log("---RESPONSE---");
    console.log(response);
  });
