import React from 'react';
import './Product.css';
import  mobile from './mobile.jpeg';
function Product(){
    return(
        <div className="container">
            <h1>mobiles</h1>

            <div className="card">
                <img src={mobile} alt="Product"/>
                <h3>samsung</h3>
                <p clasName="price">$99.99</p>
            </div>
        </div>
    );
}

export default Product;
