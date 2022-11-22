import { useState } from 'react';

function CounterWithHooks() {
    const [value, setValue] = useState(0);
    const [isIncrementDisabled, setIsIncrementDisabled] = useState(false);
    const [isDecrementDisabled, setIsDecrementDisabled] = useState(true);
    const [maxValue, setMaxValue] = useState(10);
    // TODO: This reset is not working
    // const reset = () => {
    //     setValue(0);
    //     setIsIncrementDisabled(false);
    //     setIsDecrementDisabled(false);
    // }
    const updateCounter = (isIncrement) => {
        if (isIncrement) {
            setIsDecrementDisabled(false);
            setIsIncrementDisabled(value === maxValue - 1);
            setValue(value + 1);
        } else {
            setIsIncrementDisabled(false);
            setIsDecrementDisabled(value === 1);
            setValue(value - 1);
        }
    }
    const updateMaxValue = (event) => {
        setMaxValue(parseInt(event?.target?.value) || 10)
        setValue(0);
    }
    return (
        <>
            <div> This is a counter component </div>
            <div>
                <input value={maxValue} type="text" onChange={(event) => updateMaxValue(event)} />
            </div>
            <div> 
                <button disabled={isIncrementDisabled} onClick={() => updateCounter(true)}> + </button>
                <span> {value} </span>
                <button disabled={isDecrementDisabled} onClick={() => updateCounter(false)}> - </button>
            </div>
        </>
    )
}

export default CounterWithHooks;