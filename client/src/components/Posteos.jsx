import React, { useEffect, useState } from "react";
import { Posteo } from "../components/Posteo";
import { obtenerBlog } from "../api/blog.api";
import {useNavigate} from 'react-router-dom'

export function Posteos() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function cargarDatos() {
      const { data } = await obtenerBlog();
      console.log(data);
      setBlogs(data);
    }
    cargarDatos();
  }, []);

  return (
    <section className="container">
      <h2 className="text-center m-3">Blog Matero</h2>
      {blogs.length === 0 ? (
        <div className="text-center">
          <h2 className="text-center">Aun no hay blogs todavia</h2>
          <a onClick={()=>{
            navigate('/')
          }}>
            Haz click aqui para volver a la tienda
          </a>
        </div>
      ) : (
        blogs.map((post) => <Posteo key={post.id} post={post} />)
      )}
    </section>
  );
}
