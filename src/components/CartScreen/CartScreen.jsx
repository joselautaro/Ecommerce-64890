import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import './CartScreen.css'

export const CartScreen = () =>{
    return(
        <div className="container my-5">
            <h3>Resumen de compras</h3>
            <hr />
            <div className="listado">
                <p>Producto:</p>
                <p>$</p>
                <p>Cantidad:</p>
                <button className="btn btn-danger">
                <FaTrashAlt />
                </button>
            </div>
            <hr />
            <strong>Precio Total:</strong>
            <hr />
            <Link className="btn btn-success float-end" to='/checkout'>Terminar compra</Link>
            <button className="btn btn-danger float-end">Vaciar carrito</button>
        </div>
    )
}