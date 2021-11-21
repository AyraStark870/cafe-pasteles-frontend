import React from 'react'

export const Botones = ({ subir, bajar}) => {



  return (
    <div>
      <button onClick={subir}>+</button>
      <button onClick={bajar}>-</button>
    </div>
  )
}
