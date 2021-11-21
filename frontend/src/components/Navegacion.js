import { Route, Routes, Link } from "react-router-dom";
import React, {useState} from 'react'
import { Carrito } from "./Carrito";

const styles ={
  div:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    display:'flex',
    alignItems:'center',
    height:'80px',
    flexDirection:'row',
    padding:'0 50px ',
    boxShadow:'0 2px 10px rgb(0,0,0,0.3)',
    position:'sticky',
    backgroundColor:'#1F1D36'
  },
  navbar:{
    //backgroundColor:'#3F3351',
    position:'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '1800px'
  },
  link:{
    color:'#fff',
    textDecoration:'none',
    fontSize:'25px'
  },
  linkAct:{
    color:'#FFCA03',
    fontSize:'28px',
    textDecoration: 'none'
  },
  divCarrito:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight:'115px',
    marginTop:'25px',
  }
}

export const Navegacion = ({ carrito, carroVisible, mostrarCarrito}) => {

  const [pagina, setPagina] = useState('Inicio')

  const cambiarPag = (e)=>{
    setPagina(e.target.name)
  }

  console.log(pagina);
  return (
      <div>
      <div style={styles.div}>
        <nav style={styles.navbar}>
          <Link style={pagina !== 'Inicio' ? styles.link : styles.linkAct}
           name='Inicio' onClick={cambiarPag} to="/">Inicio</Link>
          <Link style={pagina === 'Cafes' ? styles.linkAct : styles.link}
          name='Cafes' onClick={cambiarPag}   to="/cafes">Cafes</Link>
          <Link style={pagina !== 'Pasteles' ? styles.link : styles.linkAct}
          name='Pasteles' onClick={cambiarPag}  to="/pasteles">Pasteles</Link>
        </nav>
      </div>
      <div style={styles.divCarrito}>

        <Carrito carroVisible={carroVisible} mostrarCarrito={mostrarCarrito} carrito={carrito} />
        </div>
    </div>

  )
}
