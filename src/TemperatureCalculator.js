import { Component } from 'react';
import TemperatureInput from './TemperatureInput';

const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}

const toFarenhit = (celsius) => {
    return (celsius * 9 / 5) + 32;
}

class TemperatureCalculator extends Component {

    state = {value: 0, scale: 'c'};
    handleCelsisChange = (event) => {
        const value = parseFloat(event.target.value);
        this.setState({
            scale: 'c',
            value : Number.isNaN(value) ? 0 : value,
        })
    };
    handleFarenhitChange = (event) => {
        const value = parseFloat(event.target.value);
        this.setState({
            scale: 'f',
            value : Number.isNaN(value) ? 0 : value,
        })
    };
    render() {
        const celsius = this.state.scale === "c" ? this.state.value : toCelsius(this.state.value);
        const farenhit = this.state.scale === "f" ? this.state.value: toFarenhit(this.state.value);
        return (
            <>
                <TemperatureInput scale="c" value={celsius} onInputChange={this.handleCelsisChange} />
                <TemperatureInput scale="f" value={farenhit} onInputChange={this.handleFarenhitChange} />
            </>
        )
    }
}

export default TemperatureCalculator;