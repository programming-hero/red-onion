import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h1>{props.cart.length}</h1>
        </div>
    );
};

export default Cart;