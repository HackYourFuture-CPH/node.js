import React from "react";

import SingleCar from './SingleCar.jsx';

const CarList = (props) => {
    return (
        
            <ul className="container list-unstyled">
                <li id="car-list-header" className="row align-items-center">
                    <div className="row align-items-center col-md-11">
                <div className="col-md-1">ID</div>
                <div className="col-md-3">Brand</div>
                <div className="col-md-3">Model</div>
                <div className="col-md-3">Color</div>
                <div className="col-md-1">Gears</div>
                </div>
                <div className="col-md-1"></div>
                </li>
            
                {props.cars.map((car, index) => (
                    <SingleCar enterEditMode={props.enterEditMode} removeCar={props.removeCar} car={car} key={index}/>
                ))}
            </ul>
    );
}
export default CarList;