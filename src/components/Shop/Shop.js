import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const fd = fakeData.slice(0,10);
    const [products, setProducts ]=useState(fd);
    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
 const [cart, setCart]= useState([]);
    return (
        <div className="shop">
           <div>
               {
                   products.map( pd => <Product handleAddProduct={handleAddProduct} product={pd}> </Product> )
               }
               
           </div>
           <div>
              <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;