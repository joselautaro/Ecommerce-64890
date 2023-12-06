import React from "react";
import { useNavigate } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount";
import './style.css'


export const ItemDetail = ({ id, name, description, price, photo, category }) => {

    const navigate = useNavigate()

    const volverHaciaAtras = () => {
        navigate(-1)
    }

    const sumarAlCarrito = () => {
        const newItem = {
            id,
            name,
            description,
            photo,
            category,
            counter
        }
        console.log(newItem)
    }

    return (
        <div className="card">
            <div>
                <img src={photo} alt={photo} />
                <p>{name}</p>
                <h4>{description}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti iste accusantium fugiat dolores sequi. </p>
                <h5>Categoria: {category}</h5>
                <h5>${price}</h5>
                <ItemCount />
                <div className="botones">
                <button onClick={sumarAlCarrito} className="btn btn-info">Agregar al Carrito</button>
                <button className="btn btn-success">Ir al carrito</button>
                <button className="btn btn-danger" onClick={volverHaciaAtras}>Volver atras</button>
                </div>
            </div>
        </div>
    )

}