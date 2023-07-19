import axios from 'axios'

const categoriasAPI = axios.create({
    baseURL: 'https://matesdelmar.onrender.com/api/categorias/'
})

export const obtenerCategorias = () => categoriasAPI.get('/')