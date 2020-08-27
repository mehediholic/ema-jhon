import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product.name);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>

            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>By: {seller}</small></p>
                <p>${price}</p>
                <br/>
                <p>Only: {stock} left in Stock</p>
            </div>
            
        </div>
    );
};

export default Product;