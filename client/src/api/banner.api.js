import axios from "axios";

const bannerApi = axios.create({
  baseURL: "http://127.0.0.1:8000/banner/api/banner/",
});

export const obtenerBanner = () => bannerApi.get("/");
