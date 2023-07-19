import axios from "axios";

const ventasAPI = axios.create({
  baseURL: "https://matesdelmar.onrender.com/ventas/",
});

export const enviarMail = (datos) =>
  ventasAPI.post("/", datos).then((response) => {
    console.log("---RESPONSE---");
    console.log(response);
  });
