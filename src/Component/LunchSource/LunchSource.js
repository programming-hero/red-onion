import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Lunch from '../Lunch/Lunch';
import CheckOut from '../CheckOut/CheckOut';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const LunchSource = () => {
   const lunchFood = fakeData.slice(0, 6);
   const [lunch , setLunch] = useState(lunchFood);

    const [cart, setCart] = useState([]);

   const handleAddFood = (lunch) =>{
       const newCart = [...cart, lunch];
        setCart(newCart);
        
        const sameFood = newCart.filter(food => food.key === lunch.key);
        const count = sameFood.length;
        addToDatabaseCart(lunch.key, count);
       
   }
   
    return (
        <div className="container">
           <div className="row">
                {
                    lunch.map(lunch => <Lunch
                        key = {lunch.key} 
                        handleAddFood = {handleAddFood}
                        lunch={lunch}
                        >

                        </Lunch>)
                }
                {
                    <CheckOut cart= {cart}></CheckOut>
                }
           </div>
        </div>
    );
};

export default LunchSource;