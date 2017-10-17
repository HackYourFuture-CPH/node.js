import { h, render, Component    } from 'preact';
import axios from 'axios';
import CarRow from './car_row';
import CarForm from './car_form';

const API_PATH = 'car/';

class App extends Component {

    state = {
        cars: null,
        form_car: {
            brand: '',
            model: ''
        }
    }

    constructor(props, state) {
        super();
        this.setState({ cars: props.cars });
    }

    removeCar(index) {
        axios.delete(`${API_PATH}${index}`).then((data) => {
            this.setState({ cars: data.data });
            if (this.state.cars.length === 0) {
                this.setState({
                    form_car: {},
                    edit_mode: false,
                    edit_index: null
                });        
            }
        })
    }

    editCar(index) {
        if (!this.state.edit_mode) {
            this.setState({
                form_car: this.state.cars[index],
                edit_mode: true,
                edit_index: index
            });
        } else {
            this.setState({
                form_car: {},
                edit_mode: false,
                edit_index: null
            });   
        }
    }

    saveCar(car) {
        if (this.state.edit_mode && this.state.cars[this.state.edit_index]) {
            axios.put(`${API_PATH}${this.state.edit_index}`, car).then((data) => {
                this.setState({
                    cars: data.data,
                    form_car: {},
                    edit_mode: false,
                    edit_index: null
                });
            })
        }
    }

    addCar(car) {
        axios.post(`${API_PATH}`, car).then((data) => {
            this.setState({
                cars: data.data,
                form_car: {}
            });
        });
    }

    render(props, { form_car, edit_index, edit_mode, cars }) {
        return <div id="car_list">
            <CarForm initform={ form_car } edit_mode={ edit_mode } addCar={ car => this.addCar(car) } saveCar={ car => this.saveCar(car) } />            
            <br/>
            <hr/>
            {(() => {
                if (typeof cars === 'object' && cars) {
                    if (cars.length === 0) {
                        return <h2 class="subtitle">Sorry you have no cars, try to add one :)</h2>
                    } else {
                        return ([
                            <h2 class="subtitle">Cars list</h2>,
                            cars.map((car, index) => (
                                <CarRow is_editing={ edit_index === index } car={ car } removeCar={ _ => this.removeCar(index) } editCar={ _ => this.editCar(index) } />
                            ))
                        ])
                    }
                }
            })()}
        </div>
    }
}

axios.get(`${API_PATH}`).then((data) => {
    render((<App cars={data.data} />), document.getElementById('app').parentNode, document.getElementById('app'))
});