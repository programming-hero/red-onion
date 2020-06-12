import React from 'react';

const BreakFast = (props) => {
    const {name, img, price} = props.breakFast;
    
    return (
        <div className="col-xl-4"
         onClick={() => props.handleAddFood(props.breakFast)}
         >
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

export default BreakFast;