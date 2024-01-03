import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import './style.css'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from 'sweetalert2'


export const ItemDetail = ({ id, name, description, price, photo, category, stock }) => {

    const navigate = useNavigate()

    const volverHaciaAtras = () => {
        navigate("/")
    }

    const {agregarAlCarrito} = useContext(CartContext)

    const [counter, setCounter] = useState(0);

    const sumarAlCarrito = () => {
        const newItem = {
            id,
            name,
            description,
            photo,
            price,
            category,
            counter
        }
        agregarAlCarrito(newItem)
        Swal.fire("Producto agregado satisfactoriamente!");
    }

    return (
        <div className="card">
            <div>
                <img src={photo} alt={photo} />
                <p>{name}</p>
                <h4>{description}</h4>
                <p>um fugiat dolores sequi. </p>
                <h5>Categoria: {category}</h5>
                <h5>${price}</h5>
                <ItemCount max={stock} cantidad={counter} modify={setCounter}/>
                <div className="botones">
                <button onClick={sumarAlCarrito} className="btn btn-info">Agregar al Carrito</button>
                <Link className="btn btn-success" to='/cart'>Ir al carrito</Link>
                <button className="btn btn-danger" onClick={volverHaciaAtras}>Volver atras</button>
                </div>
            </div>
        </div>
    )

}