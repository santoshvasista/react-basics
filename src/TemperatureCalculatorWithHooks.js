import { useState } from 'react';
import TemperatureInput from './TemperatureInput';

const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}

const toFarenhit = (celsius) => {
    return (celsius * 9 / 5) + 32;
}

function TemperatureCalculatorWithHooks() {
    const [value, setValue] = useState(0);
    const [scale, setScale] = useState('c');

    const handleCelsisChange = (event) => {
        const value = parseFloat(event.target.value);
        setValue(Number.isNaN(value) ? 0 : value);
        setScale('c');
    };

    const handleFarenhitChange = (event) => {
        const value = parseFloat(event.target.value);
        setValue(Number.isNaN(value) ? 0 : value);
        setScale('f');
    };

    const celsius = scale === "c" ? value : toCelsius(value);
    const farenhit = scale === "f" ? value: toFarenhit(value);
    return (
        <>
            <TemperatureInput scale="c" value={celsius} onInputChange={handleCelsisChange} />
            <TemperatureInput scale="f" value={farenhit} onInputChange={handleFarenhitChange} />
        </>
    )

}

export default TemperatureCalculatorWithHooks;