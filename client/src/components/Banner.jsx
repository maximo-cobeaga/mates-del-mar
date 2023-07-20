import Carousel from "react-bootstrap/Carousel";
import {obtenerBanner} from '../api/banner.api'
import { useEffect, useState } from "react";

export function Banner() {

  const [banner, setBanner] = useState([])

  useEffect(()=>{
    async function cargarBanner(){
      const {data} = await obtenerBanner()
      setBanner(data)
    }
    cargarBanner()
  }, [])


  return (
    <Carousel className="mt-5" >
      {banner.map((b) => (
        <Carousel.Item interval={3000} style={{height:'630px'}} key={b.id}>
        <img
          className="d-block w-100"
          style={{height: '100%', objectFit: "cover", filter: 'brightness(0.65)'}}
          src={b.imagen}
          alt={b.titulo}
        />
      </Carousel.Item>
      ))}
    </Carousel>
  );
}
