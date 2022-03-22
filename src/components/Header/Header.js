import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div className='h-parent'>
            <nav className='header'>
                <img src={logo} alt="" />

                <div className='links'>
                    <a href="/shop">Shop</a>
                    <a href="/order">Order</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;