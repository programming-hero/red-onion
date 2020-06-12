import React from 'react';
import './MenuBar.css';

const MenuBar = () => {
    return (
        <div>
            <nav className=" MenuStyle d-flex justify-content-center">
                <a href="/breakfast">Breakfast</a>
                <a href="/lunch">Lunch</a>
                <a href="/dinner">Dinner</a>
                <a href="/all" className="text-right">All</a>
            </nav>
        </div>
    );
};

export default MenuBar;