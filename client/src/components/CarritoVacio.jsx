import {useNavigate} from 'react-router-dom'

export function CarritoVacio() {
  const navigate = useNavigate()
  return (
    <div className="container">
      <h1>El carrito de compras esta vacio</h1>
      <a onClick={()=>{
            navigate('/')
          }} className="btn btn-primary">
        Vovler a la tienda
      </a>
    </div>
  );
}
