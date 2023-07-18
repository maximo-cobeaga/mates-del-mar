import axios from 'axios'

const categoriasAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/categorias/'
})

export const obtenerCategorias = () => categoriasAPI.get('/')