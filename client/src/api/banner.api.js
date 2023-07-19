import axios from "axios";

const bannerApi = axios.create({
  baseURL: "https://matesdelmar.onrender.com/banner/api/banner/",
});

export const obtenerBanner = () => bannerApi.get("/");
