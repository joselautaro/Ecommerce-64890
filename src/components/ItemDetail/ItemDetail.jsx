import React from "react";
import { useNavigate } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import './style.css'


export const ItemDetail = ({ id, name, description, price, photo, category }) => {

    const navigate = useNavigate()

    const volverHaciaAtras = () => {
        navigate("/")
    }

    const sumarAlCarrito = () => {
        const newItem = {
            id,
            name,
            description,
            photo,
            category,
        }
        console.log(newItem)
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
                <ItemCount />
                <div className="botones">
                <button onClick={sumarAlCarrito} className="btn btn-info">Agregar al Carrito</button>
                <Link className="btn btn-success" to='/cart'>Ir al carrito</Link>
                <button className="btn btn-danger" onClick={volverHaciaAtras}>Volver atras</button>
                </div>
            </div>
        </div>
    )

}