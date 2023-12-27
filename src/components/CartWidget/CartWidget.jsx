import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import './style.css'
import { CartContext } from '../context/CartContext';

export const CartWidget = () => {


  const {calcularCantidad} = useContext(CartContext)

  return (
    <>
        <FaShoppingCart/>
        <span>{calcularCantidad()}</span>
    </>
  )
}
