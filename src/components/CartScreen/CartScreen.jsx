import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import './CartScreen.css'

export const CartScreen = () => {
    const { carrito, vaciarCarrito, precioTotal } = useContext(CartContext);

    return (
        <div className="container my-5">
            {
                !carrito || carrito.length === 0
                ? <h3>Carrito vacío</h3>
                : carrito.map((prod) => (
                    <div key={prod.id} className="cart-item">
                        {prod.description && <p>{prod.description}</p>}
                        {prod.price && <p>{prod.price}</p>}
                        {prod.counter && <p>{prod.counter}</p>}
                    </div>
                ))
            }

            <hr />
            <strong>Precio Total: {precioTotal()}</strong>
            <hr />
            <Link className="btn btn-success float-end" to='/checkout'>Terminar compra</Link>
            <button onClick={vaciarCarrito} className="btn btn-danger float-end">Vaciar carrito</button>
        </div>
    )
}

