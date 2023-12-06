import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (

        <nav>
            <Link to="/">Home</Link>
            <Link to="/productos/tecnologia">Tecnologia</Link>
            <Link to="/productos/indumentaria">Indumentaria</Link>
            <Link to="/productos/ropa">Ropa</Link>
            <Link to="/cart"><CartWidget/></Link>
        </nav>

    );
};
