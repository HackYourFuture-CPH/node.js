import React from "react";

export default class CarForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: "Porsche",
      model: "Panamera",
      color: "White",
      gears: 5
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.editMode) {
      this.setState({
        brand: nextProps.carToEdit.brand,
        model: nextProps.carToEdit.model,
        color: nextProps.carToEdit.color,
        gears: nextProps.carToEdit.gears
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editMode
      ? this.props.editCar({
          brand: this.state.brand,
          model: this.state.model,
          color: this.state.color,
          gears: this.state.gears
        })
      : this.props.createCar({
          brand: this.state.brand,
          model: this.state.model,
          color: this.state.color,
          gears: this.state.gears
        });
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div id="car-form-div" className="container">
        <form
          name="carForm"
          onSubmit={this.handleSubmit}
          className="form-inline"
          id="car-form"
        >
          <input
            id="car-form-brand"
            className="form-control mb-2 mr-sm-2 mb-sm-0"
            type="text"
            name="brand"
            placeholder={this.state.brand}
            value={this.state.brand}
            onChange={this.handleChange}
          />
          <input
            id="car-form-model"
            className="form-control mb-2 mr-sm-2 mb-sm-0"
            type="text"
            name="model"
            placeholder={this.state.model}
            value={this.state.model}
            onChange={this.handleChange}
          />
          <input
            id="car-form-color"
            className="form-control mb-2 mr-sm-2 mb-sm-0"
            type="text"
            name="color"
            placeholder={this.state.color}
            value={this.state.color}
            onChange={this.handleChange}
          />
          <input
            id="car-form-gears"
            className="form-control mb-2 mr-sm-2 mb-sm-0"
            type="number"
            name="gears"
            placeholder={this.state.gears}
            value={this.state.gears}
            min="3"
            max="8"
            onChange={this.handleChange}
          />
          <button id="car-form-button" className="btn btn-primary">
            {this.props.editMode ? "EDIT" : "ADD"}
          </button>
        </form>
      </div>
    );
  }
}
