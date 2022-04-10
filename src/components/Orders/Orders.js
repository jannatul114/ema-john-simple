import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from "../../utilities/fakedb";
import './Order.css';
import { Link, useNavigate } from 'react-router-dom';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest)
        removeFromDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem product={product}
                        key={product.id}
                        handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <h3>Inside orders</h3>
                    <button onClick={() => navigate('/inventory')}>Proceed checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;