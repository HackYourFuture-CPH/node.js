import { h, Component } from 'preact';
import linkstate from 'linkstate';

export default class CarForm extends Component {

    gears_options = [1,2,3,4,5,6,7,'A'];

    constructor(props, state) {
        super();
        this.state = {
            car: props.initform,
            edit_mode: false
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        this.setState({
            car: nextProps.initform,
            edit_mode: nextProps.edit_mode
        });
    }

    handleSubmit = e => {
        if (this.state.edit_mode) {
            this.props.saveCar(this.state.car);
        } else {
            this.props.addCar(this.state.car);
        }
        e.preventDefault();
    }

    render({ }, { car, edit_mode }) {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="field">
                    <label class="label">Brand</label>
                    <div class="control">
                        <input class="input" required name="brand" type="text" value={car.brand} onChange={linkstate(this, 'car.brand')} />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Model</label>
                    <div class="control">
                        <input class="input" required name="model" type="text" value={car.model} onChange={linkstate(this, 'car.model')} />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Color</label>
                    <div class="control">
                        <input class="input" required name="color" type="text" value={car.color} onChange={linkstate(this, 'car.color')} />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Gears</label>
                    <div class="control">
                        <div class="select">
                            <select
                            onChange={linkstate(this, 'car.gears')}
                            value={car.gears}>
                            {this.gears_options.map((gear_option, i) => (
                                <option key={i} value={gear_option}>{gear_option} gears</option>
                            ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link" disabled={(car.brand === '' && car.model === '')} type="submit">{edit_mode ? 'Edit' : 'Add'}</button>
                    </div>
                </div>
            </form>
        );
    }
}
