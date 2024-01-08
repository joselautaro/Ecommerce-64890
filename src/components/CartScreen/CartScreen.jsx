import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { BsFillTrashFill } from "react-icons/bs";
import { ItemCount } from "../ItemCount/ItemCount";
import './CartScreen.css'

export const CartScreen = () => {
    const { carrito, vaciarCarrito, precioTotal, removerItem } = useContext(CartContext);

    return (
        <div className="container my-5">
            {
                !carrito || carrito.length === 0
                    ? <>
                        <h3>Carrito Vacio</h3>
                        <hr />
                        <Link to="/" className="btn btn-success">Volver a comprar</Link>
                    </>
                    : <>
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th colSpan={3}>
                                        <h3>Resumen de compras</h3>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Descripción</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>

                            {
                                carrito.map((prod) => (

                                    <>
                                        <tbody>
                                            <tr key={prod.id}>
                                                <td>
                                                    <p>{prod.description}</p>
                                                </td>
                                                <td>
                                                    <p>{prod.counter}</p>
                                                </td>
                                                <td>
                                                    <p>${prod.price}</p>
                                                </td>

                                                <button className="btn btn-danger float-end" onClick={() => removerItem(prod.id)}>
                                                    <BsFillTrashFill />
                                                </button>
                                            </tr>
                                        </tbody>
                                    </>
                                ))
                            }
                            <tr className="text-center">
                                <td>
                                    <p>Precio total:</p>
                                </td>
                                <td>

                                </td>
                                <td>
                                    <p>${precioTotal()}</p>
                                </td>
                            </tr>
                        </table>
                        <Link className="btn btn-success float-end" to='/checkout'>Terminar compra</Link>
                        <button onClick={vaciarCarrito} className="btn btn-danger float-end">Vaciar carrito</button>
                        <Link to="/" className="btn btn-success">Seguir comprando</Link>
                    </>
            }
        </div>
    )
}



