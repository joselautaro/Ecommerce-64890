import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (

        <nav>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/productos/tecnologia">Tecnología</Link>
            <Link className='link' to="/productos/indumentaria">Indumentaria</Link>
            <Link className='link' to="/productos/ropa">Ropa</Link>
            <Link className='link' to="/cart"><CartWidget/></Link>
        </nav>

    );
};
