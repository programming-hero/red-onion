import React from 'react';
import './FoodDetails.css'

const FoodDetails = (props) => {
    
    const {name, description, img, price} = props.food;
    return (
        <div className="container reviewStyle">
            <div className="row">
                <div className="col-md-6 detailStyle">
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <h3 className="price">$ {price} 
                    <span className="plusMinus"><span className="minus"> -</span> <span className="increment">1</span><span className="plus"> +</span></span>
                    </h3>
                    <button className="">Add</button>
                    <button>Remove</button>
                </div>
                <div className="col-md-6">
                    <img className="w-100" src={img} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;