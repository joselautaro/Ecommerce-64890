import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import './style.css'

export const CartWidget = () => {
  return (
    <>
        <FaShoppingCart/>
        <span>0</span>
    </>
  )
}
