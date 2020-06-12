import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Dinner from '../Dinner/Dinner';
import Cart from '../Cart/Cart';
import CheckOut from '../CheckOut/CheckOut';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const DinnerSource = () => {
    const dinnerFood = fakeData.slice(6, 12);
    const [dinner] = useState(dinnerFood);

    const [cart, setCart] = useState([]);

    const handleAddFood = (dinner) =>{
        // console.log("Food Added", dinner);
        const newCart = [...cart, dinner];
        setCart(newCart);
        const sameFood = newCart.filter(food => food.key === dinner.key);
        const count = sameFood.length;
         addToDatabaseCart(dinner.key, count);


    }
    return (
        <div className="container">
            <div className="row">
                {
                    dinner.map(dinner => <Dinner
                    key = {dinner.key}
                    handleAddFood ={handleAddFood}
                     dinner={dinner}
                    ></Dinner>)
                }
                {
                    
                    <CheckOut cart={cart}></CheckOut>
                }
            </div>
        </div>
    );
};

export default DinnerSource;