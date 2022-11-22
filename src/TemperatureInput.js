import { Component } from 'react';

const TempScale = {
    'c': 'Celsius',
    'f': 'Farenhit',
};

class TemperatureInput extends Component {
    render() {
        return (
            <>
                <label> Enter temperature in {TempScale[this.props.scale]} </label>
                <input type="text" value={this.props.value} onChange={this.props.onInputChange} />
            </>
        );
    }
}

export default TemperatureInput;