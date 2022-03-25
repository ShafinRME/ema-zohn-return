import { faTrash, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>Selected Items: {quantity}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping Charge:${shipping}</p>
            <p>Tax:${tax}</p>
            <p>Grand Total:${grandTotal}</p>
            <div>
                <button className='button-1'>
                    <p className='cart-clear'>Clear Cart</p>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button> <br />
                <button className='button-2'>
                    <p className='cart-review'>Review Order</p>
                    <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Cart;