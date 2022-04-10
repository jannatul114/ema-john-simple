import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div className='h-parent'>
            <nav className='header'>
                <img src={logo} alt="" />

                <div className='links'>
                    <Link to='/'>Shop</Link>
                    <Link to='/order'>Order</Link>
                    <Link to='/about'>About</Link>
                    <Link to='*'>NotFound</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;