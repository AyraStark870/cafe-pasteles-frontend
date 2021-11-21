

import React, {useState} from 'react'
import { Botones } from './Botones'

export const Cardcafe = ({ cafe, agregarCarrito}) => {

  const styles={
    btn:{
      backgroundColor:'#fff',
      color:'rgb(185, 22, 70)',
      display:'block',
      textAlign:'center',
      margin:'15px auto',
      marginTop:'15px',
      fontSize:'15px',
      border: '1px solid rgb(185, 22, 70)'
    }
  }

  const [cantidad, setCantidad] = useState(0)

  const empezarCompra =()=>{
    setCantidad(cantidad + 1)
  }
  const subir = () => {
    setCantidad(cantidad+1)
  }
  const bajar = () => {
      setCantidad(cantidad-1)
  }

  return (
    <div className='card'>
      <h2>{cafe.name}</h2>
      <img src={cafe.img} alt={cafe.name} />
      {cantidad === 0 ? <p style={{ color: 'rgb(185, 22, 70)' }}>
         ${cafe.price}</p> :<p>${cafe.price*cantidad}</p>}
      <p style={{ color: '#3F3351' }}>{cantidad}</p>

      {
        ! cantidad
        ? <button onClick={empezarCompra}>comprar</button>
        : <Botones subir={subir} bajar={bajar}/>
      }
      <button style={styles.btn} onClick={()=>agregarCarrito(cafe)}>
         agregar al carrito
      </button>
    </div>
  )
}
