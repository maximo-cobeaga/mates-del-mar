import axios from 'axios'

const blogAPI = axios.create({
    baseURL: 'https://matesdelmar.onrender.com/blog/blog/'
})

export const obtenerBlog = ()=> blogAPI.get('/')