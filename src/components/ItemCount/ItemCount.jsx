import React, {useState} from 'react'
import './style.css';

export const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const aumentar = () =>{
        setContador(contador + 1);
    }

    const disminuir = () =>{
        if(contador > 0){
            setContador(contador - 1)
        }
    }

  return (
    <div className='count'>
        <button className='button' onClick={disminuir}>➖</button>
        <p>{contador}</p>
        <button className='button' onClick={aumentar}>➕</button>
    </div>

)
}
