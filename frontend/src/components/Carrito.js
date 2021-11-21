
import React from 'react'
import { BubbleAlert } from './BubbleAlert'
import { DetallesCarro } from './DetallesCarro'

const styles = {
  carro:{
    backgroundColor:'#105652',
    color:'#fff',
    border:'none',
    borderRadius: '10px',
    cursor:'pointer'
  },
  bubble:{
    position:'relative',
    left:17,
    top:18
  }
}

export const Carrito = ({ carrito, carroVisible, mostrarCarrito}) => {


  const cantidadItems = carrito.reduce((accum, x) =>  accum + x.qty, 0)

  return (
    <div>
      {cantidadItems>0 &&
      <span style={styles.bubble}>
        <BubbleAlert cantidadItems={cantidadItems}/>
      </span>}
      <button onClick={mostrarCarrito} style={styles.carro}>Carrito</button>
     {carroVisible && <DetallesCarro carrito={carrito} />}
    </div>
  )
}
