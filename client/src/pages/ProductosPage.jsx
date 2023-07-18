import { Banner } from "../components/Banner";
import { Productos } from "../components/Productos";
import { NavBar } from "../components/NavBar";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ModalIncio } from "../components/ModalIncio";
import {Footer} from '../components/Footer'
import {Whatsapp} from './Whatsapp'

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
      <Footer />
    </>
  );
}
