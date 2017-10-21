import React from "react";
import axios from "axios";

import CarForm from "./CarForm.jsx";
import CarList from "./CarList.jsx";

export default class Cars extends React.Component {
  constructor() {
    super();

    // adding editMode to 'State' which if true, will result in activating a put request instead of post on form submission. sending it down as props to CarForm. Need to define a new method called toggleEditMode which will change the property value to true from its default value of false. Will send this down to Car List as props which will send it onwards to SingleCar where a click action will activate it.
    // must remember that when the PUT request is completed, the editMode should become false again which means that toggleEdit should be sent as props to Car Form as well.
    this.state = {
      cars: [],
      editMode: false,
      carToEdit: null
    };

    this.enterEditMode = this.enterEditMode.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.createCar = this.createCar.bind(this);
    this.removeCar = this.removeCar.bind(this);
    this.editCar = this.editCar.bind(this);
  }

  enterEditMode(car) {
    this.setState({ carToEdit: car });
    if (!this.state.editMode) {
      this.toggleEditMode();
    }
  }

  // toggle edit mode within the state
  toggleEditMode() {
    console.log(`before toggle: ${this.state.editMode}`);
    let editMode = this.state.editMode ? false : true;
    this.setState({ editMode: editMode });
    console.log(`after toggle: ${this.state.editMode}`);
  }

  //   GET REQUEST --- WORKING
  componentDidMount() {
    axios.get("/api/cars").then(res => {
      // console.log(res.data.records);
      const cars = res.data.records;
      this.setState({ cars: cars });
    });
  }

  //   POST REQUEST --- WORKING
  createCar(car) {
    car.id =
      this.state.cars.length > 0
        ? this.state.cars[this.state.cars.length - 1].id + 1
        : 1;
    // console.log(car);
    axios.post("/api/cars", car).then(res => {
      // console.log(res.data.records);
      const cars = res.data.records;
      this.setState({ cars: cars });
    });
    console.log("car created...");
  }

  // PUT REQUEST ---- to be built on both client and server
  editCar(car) {
    car.id = this.state.carToEdit.id;
    axios.put(`/api/cars/${car.id}`, car).then(res => {
      const cars = res.data.records;
      this.setState({ cars: cars, carToEdit: null });
    });
    console.log("car edited...");
    this.toggleEditMode();
  }

  //   DELETE REQUEST ----- WORKING
  removeCar(car) {
    axios.delete(`/api/cars/${car.id}`).then(res => {
      // console.log(res.data.records);
      const cars = res.data.records;
      this.setState({ cars: cars });
    });
    console.log("car removed...");
  }

  render() {
    return (
      <div>
        <CarForm
          createCar={this.createCar}
          editCar={this.editCar}
          carToEdit={this.state.carToEdit}
          editMode={this.state.editMode}
        />
        <CarList
          enterEditMode={this.enterEditMode}
          removeCar={this.removeCar}
          cars={this.state.cars}
        />
      </div>
    );
  }
}