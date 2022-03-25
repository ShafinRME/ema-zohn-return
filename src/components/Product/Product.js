import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, seller, ratings, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>

            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;