import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export const Item = ({ id, name, description, price, photo, category }) => {
    return (
        <div className="card">
            <div>
                <img src={photo} alt={photo} />
                <p>{name}</p>
                <h4>Descripción: {description}</h4>
                <h4>${price}</h4>
                <p>Categoría: {category}</p>
                <div className='link-detalles'>
                    <Link className='btn btn-info' to={`/detail/${id}`}>Ver más detalles</Link>
                </div>
            </div>
        </div>
    )
}
