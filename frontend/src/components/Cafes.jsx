import React, {useState} from 'react'
import { Cardcafe } from './Cardcafe';

const Cafes = ({ cafes, agregarCarrito, carrito, setCarrito}) => {

  // const agregarCarrito = (cafe) => {
  //   const { _id, name,img } = cafe
  //   if (carrito.find(x => x._id === cafe._id)) {
  //     const newCarrito = carrito.map(x => x._id === cafe._id
  //       ? ({
  //         ...x, qty: x.qty + 1
  //       })
  //       : x)
  //     return setCarrito(newCarrito)
  //   }
  //   return setCarrito([...carrito, {
  //     _id, name,img, qty: 1
  //   }])
  // }

  return (
    <div className="container">
        {
          cafes.map(cafe=>{
           return <Cardcafe agregarCarrito={agregarCarrito} key={cafe._id} cafe={cafe}/>
          })
        }

    </div>
  )
}

export default Cafes
