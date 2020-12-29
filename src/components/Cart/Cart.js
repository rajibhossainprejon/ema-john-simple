import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total =  cart.reduce ((total,prd) => total + prd.price , 0);
    let shipping=0;
     if(total>100){
       shipping =shipping + 10;
     }
     else if(total>1 && total <99){
         shipping=shipping+5;
     }
     else{
         shipping=0;
     }

     const formatNumber = num =>{
         const precision = num.toFixed(2);
         return Number(precision);
     }
    
     return (
        <div>
            <h4>Order</h4>
            <p>Items: {cart.length}</p>
            <p>Price: {formatNumber(total)}</p>
            <p>Tax: {formatNumber(total/10)}</p>
            <p>Shipping Fee: {shipping}</p>
            <p>Total: {formatNumber(total+shipping+(total/10))}</p>

        </div>
    );
};

export default Cart;