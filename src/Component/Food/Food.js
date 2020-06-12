import React from 'react';
import { Card } from 'react-bootstrap';
import { ListGroup , ListGroupItem } from 'react-bootstrap';
import './Food.css';

const Food = (props) => {

    const {name, img, price} =  props.food;
    
    
    return (

        <div className="col-xl-4" onClick={()=>props.handleAddFood(props.food)}>
                <div className="m-4 text-center single-item">
                    <div className="card p-4">
                        <img className="card-img-top" src={img} alt=""/>
                    <div className="card-body">
                        <h6 className="card-title">{name}</h6>
                        <p className="card-text"></p>
                        <h4 className="price">${price}</h4>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;