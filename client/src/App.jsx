import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProductosPage } from "./pages/ProductosPage";
import { Carrito } from "./pages/Carrito";
import { Categorias } from "./pages/Categorias";
import { DetalleProducto } from "./pages/DetalleProducto";
import {BlogMatero} from './pages/BlogMatero'
import {Grabados} from './pages/Grabados'
import {Compras} from './pages/Compras'
import {Regalos} from './pages/Regalos'
import {Politicas} from './pages/Politicas'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductosPage />} />
        <Route path="/:res" element={<ProductosPage />} />
        <Route path="/categorias/:cat" element={<Categorias />} />
        <Route path="/productos" element={<Navigate to={"/"} />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
        <Route path="/blog" element={<BlogMatero />} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/grabados" element={<Grabados />} />
        <Route path="/regalos" element={<Regalos />} />
        <Route path="/politicas" element={<Politicas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
