import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import BreakFast from '../BreakFast/BreakFast';
import CheckOut from '../CheckOut/CheckOut';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const BreakeFastSource = () => {
    const breakeFastFood = fakeData.slice(12, 18);
    const [breakFast] = useState(breakeFastFood);


    const [cart, setCart] = useState([]);
    
    const handleAddFood = (breakFast) => {
        const newCart = [...cart, breakFast];
        setCart(newCart);
        const sameFood = newCart.filter(food => food.key === breakFast.key);
        const count = sameFood.length;
        addToDatabaseCart(breakFast.key, count);
         
       
    }
    return (
        <div className="container">
            <div className="row">
                {
                    breakFast.map(breakFast => <BreakFast
                         key = {breakFast.key}
                         handleAddFood = {handleAddFood}
                         breakFast={breakFast}>

                         </BreakFast>)
                }
                {
                    <CheckOut cart={cart}></CheckOut>
                }
            </div>
        </div>
    );
};

export default BreakeFastSource;