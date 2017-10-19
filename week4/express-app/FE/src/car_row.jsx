import { h, Component } from 'preact';

export default class CarRow extends Component {
    constructor() {
        super();
    }

    render(props, state) {
        return <ul>
                    <li>
                        
                        <p><span class={props.is_editing ? 'bold' : ''} onClick={ () => { props.editCar() }}>{ 'A ' + props.car.color + ' ' + props.car.brand + ' ' + props.car.model + ' with ' + props.car.gears + ' gears' }</span>
                            <button class="button is-danger is-small" type="button" onClick={ () => { props.removeCar() }}>delete car</button>
                        </p>
                    </li>
                </ul>;
    }
}