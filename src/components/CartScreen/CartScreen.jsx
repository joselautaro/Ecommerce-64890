import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {BsFillTrashFill} from "react-icons/bs";
import './CartScreen.css'

export const CartScreen = () => {
    const { carrito, vaciarCarrito, precioTotal, removerItem } = useContext(CartContext);

    return (
        <div className="container my-5">
           {
            !carrito || carrito.length === 0
            ?   <>
                    <h3>Carrito Vacio</h3>
                    <hr />
                    <Link to="/" className="btn btn-success">Volver a comprar</Link>
                </>
                :<>
                    <h3>Resumen de compras</h3>
                    <hr />
                    {
                        carrito.map((prod) =>(
                            
                            <>
                                <div key={prod.id}>
                                <button className="btn btn-danger float-end" onClick={() => removerItem(prod.id)}>
                                    <BsFillTrashFill />
                                </button>
                                    <p>Producto: {prod.description}</p>
                                  
                                        <p>${prod.price}</p>
                                        <p>Cantidad: {prod.counter}</p>
                                    
                                </div>
                            </>
                        ))
                    }
                    <hr />
                    <strong>Precio total: ${precioTotal()}</strong>
                    <hr />
                    <Link className="btn btn-success float-end" to='/checkout'>Terminar compra</Link>
                    <button onClick={vaciarCarrito} className="btn btn-danger float-end">Vaciar carrito</button>
                    <Link to="/" className="btn btn-success">Seguir comprando</Link>
                </>
           }
        </div>
    )
}



