import React from 'react';
import './car-search.style.css';

export default function CarSearchScreen() {
    return (
        <div className="car-search screen background--blue">
            <div className="car-search__search-container background--yellow">
                <h2 className="car-search__header" >Let’s find your ideal car</h2>
                <label className="car-search__label">Pick-up Location</label>
                <input className="car-search__input"  />
            </div>
        </div>
    );
}
