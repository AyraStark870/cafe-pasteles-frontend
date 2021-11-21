
import React, { useEffect, useState } from "react";
import clienteAxios from "../config/axios"
import { Route, Routes } from "react-router-dom";
import Pasteles from "./Pasteles";
import Index from "./Index";
import Cafes from "./Cafes";
import { Navegacion } from "./Navegacion";

function App() {

  const [cafes, guardarCafes] = useState([])
  const [consultar, guardarConsulta] = useState(true);
  const [carrito, setCarrito] = useState([])
  const [carroVisible, setcarroVisible] = useState(false)

  const agregarCarrito = (algo) => {
    const { _id, name, img } = algo
    if (carrito.find(x => x._id === algo._id)) {
      const newCarrito = carrito.map(x => x._id === algo._id
        ? ({
          ...x, qty: x.qty + 1
        })
        : x)
      return setCarrito(newCarrito)
    }
    return setCarrito([...carrito, {
      _id, name, img, qty: 1
    }])
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }
  const mostrarCarrito = () => {
     if(!carrito.length) return
     setcarroVisible(!carroVisible)
  }


  useEffect(() => {
    if (consultar) {
      const consultarApi = () => {
        clienteAxios.get("./api/cafes")
          .then(respuesta => {
            const cafeses = respuesta.data.cafes.map(x=>{
              return{...x, price:Number(x.price)};
            })
            guardarCafes(cafeses)
            guardarConsulta(false)
          })
          .catch(error => {
            console.log(error);
          })
      }
      consultarApi()
    }
  }, [ consultar]);//este array seria para las dependencias


  return (
    <>
      <Navegacion mostrarCarrito={mostrarCarrito} carroVisible={carroVisible} carrito={carrito}/>
    <div>
      <Routes>
        <Route path="/"  element={<Index />} />
        <Route path="/cafes" element={< Cafes cafes={cafes} carrito={carrito}
            agregarCarrito={agregarCarrito} setCarrito={setCarrito}  guardarCafes={guardarCafes}/>} />
         <Route path="/pasteles" element={<Pasteles />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
