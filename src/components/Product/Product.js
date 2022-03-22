import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { handleAddToCart } = props;
    const { name, category, seller, price, stock, ratings, img, shipping, quantity } = props.product;


    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-detailse'>
                <h4 className='product-name'>{name}</h4>
                <p>Price: {price}</p>
                <small>Menufecture: {seller}</small>
                <br />
                <small>Rating: {ratings}</small>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                <p>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>

            </button>

        </div>
    );
};

export default Product;