import React from 'react'
import './style.css';

export const ItemCount = ({max, cantidad, modify}) => {

    

    const aumentar = () =>{
        if( cantidad < max ){
            modify(cantidad + 1)
        }
    }

    const disminuir = () =>{
        if(cantidad > 0){
            modify(cantidad - 1)
        }
    }

  return (
    <div className='count'>
        <button className='button' onClick={disminuir}>➖</button>
        <p>{cantidad}</p>
        <button className='button' onClick={aumentar}>➕</button>
    </div>

)
}
