import { Banner } from "../components/Banner";
import { Productos } from "../components/Productos";
import { NavBar } from "../components/NavBar";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ModalIncio } from "../components/ModalIncio";
import {Footer} from '../components/Footer'
import {Whatsapp} from './Whatsapp'
import {InfoTargeta} from '../components/InfoTargeta'
import {VideoIncio} from '../components/VideoIncio'
import {Instagram} from '../components/Instagram'

export function ProductosPage() {
  const [modalIncioPais, setModalIncioPais] = useLocalStorage(true, true);

  return (
    <>
      <ModalIncio
        modalIncioPais={modalIncioPais}
        setModalIncioPais={setModalIncioPais}
      />
      <NavBar />
      <Banner />
      <Productos />
      <Whatsapp />
      <VideoIncio />
      <InfoTargeta />
      <Instagram />
      <Footer />
    </>
  );
}
