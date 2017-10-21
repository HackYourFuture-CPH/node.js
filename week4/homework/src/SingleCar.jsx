import React from "react";

const SingleCar = props => {
  console.log(props);
  return (
    <li className='single-car-list-item row align-items-center'>
      <ul id='single-car-data' className="row align-items-center col-md-11 list-unstyled list-inline" onClick={() => props.enterEditMode(props.car)}>
        <li className="col-md-1 list-inline-item">{props.car.id}</li>
        <li className="col-md-3 list-inline-item">{props.car.brand}</li>
        <li className="col-md-3 list-inline-item">{props.car.model}</li>
        <li className="col-md-3 list-inline-item">{props.car.color}</li>
        <li className="col-md-1 list-inline-item">{props.car.gears}</li>
      </ul>
      <div className='remove-car-button-div col-md-1 list-inline-item'>
        <button className="btn btn-primary btn-sm" onClick={() => props.removeCar(props.car)}>DELETE</button>
      </div>
    </li>
  );
};
export default SingleCar;