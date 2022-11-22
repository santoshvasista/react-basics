import { Component } from 'react';

class Counter extends Component {
    initialState = {value: 0, maxvalue: 10, isIncrementDisabled: false, isDecrementDisabled: true};
    state = this.initialState;
    reset = () => {
        this.setState({...this.initialState});
    }
    updateCounter = (isIncrement) => {
        const value = isIncrement ? this.state.value + 1 : this.state.value - 1;
        this.setState({
            value,
            isIncrementDisabled: value === this.state.maxvalue,
            isDecrementDisabled: value === 0,
        });
    }
    setMaxValue = (event) => {
        this.setState({
            ...this.initialState,
            maxvalue: parseInt(event?.target?.value, 10) || 10,
        })
    }
    render() {
        return (
            <>
                <div> This is a counter component </div>
                <div>
                    <input value={this.state.maxvalue} type="text" onChange={this.setMaxValue} />
                </div>
                <div> 
                    <button disabled={this.state.isIncrementDisabled} onClick={() => this.updateCounter(true)}> + </button>
                    <span> {this.state.value} </span>
                    <button disabled={this.state.isDecrementDisabled} onClick={() => this.updateCounter(false)}> - </button>
                </div>
            </>
        )
    }
}

export default Counter;