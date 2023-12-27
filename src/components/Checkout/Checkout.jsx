import React from "react";
import { Link } from "react-router-dom";

export const Checkout = () =>{
    return(
        <div className="container">
            <h3>
                Terminar compra
            </h3>
            <hr />
            <div className="form-group mt-3">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="telefono">Teléfono</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group mt-3">
                <button type="submit" className="btn btn-success">Finaliza compra</button>
                <Link className="btn btn-info" to="/cart">Volver al carrito</Link>
            </div>
        </div>
    )
}