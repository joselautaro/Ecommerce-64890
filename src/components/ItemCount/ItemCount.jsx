import React, {useState} from 'react'
import './style.css';

export const ItemCount = () => {

    const [counter, setCounter] = useState(0)

    const aumentar = () =>{
        setCounter(counter + 1);
    }

    const disminuir = () =>{
        if(counter > 0){
            setCounter(counter - 1)
        }
    }

  return (
    <div className='count'>
        <button className='button' onClick={disminuir}>➖</button>
        <p>{counter}</p>
        <button className='button' onClick={aumentar}>➕</button>
    </div>

)
}
