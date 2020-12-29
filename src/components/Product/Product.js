import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Product = (props) => {
    const {name,img ,seller, price, stock}= props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
           <div >
                <img src={img} alt=""/>
           </div>
           <div >
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order Soon</small></p>
           <button onClick={() => props.handleAddProduct(props.product)}>{element}add to Cart</button>
                      </div>

        </div>
    );
};

export default Product;