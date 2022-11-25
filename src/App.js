import React, { Component } from 'react';
import "./App.css";
import Counter from "./Counter";
import Jobs from "./Jobs";
import Clock from './Clock';
import Welcome from './Welcome';
import TemperatureCalculator from './TemperatureCalculator';

import CounterWithHooks from "./CounterWithHooks";
import CounterWithReducerHooks from "./CounterWithReducerHooks";
import ClockWithHooks from './ClockWithHooks';
import TemperatureCalculatorWithHooks from './TemperatureCalculatorWithHooks';

import FetchComponent from './FetchComponent';
import Spacer from './Spacer';

// [TODO]: Pending Application
// 1) Using redux
// 2) Uber application

// TODO: Other questions
// How frequently we use other hooks (not useState nor useEffect ) in our application
// useReducer, useCallback, useMemo, useRef, 
// useImperativeHandle, useLayoutEffect (same as useEffect but fires sync to browser paint)
// useDebugValue, useDeferredValue, useTransition, useId

class App extends Component {

    counter = React.createRef();
    // counterWithHooks = React.createRef();q
    // counterWithReducerHooks = React.createRef();
    jobs = React.createRef();
    resetApplication = () => {
        this.counter.current.reset();
        // this.counterWithReducerHooks.current.reset();
        // this.counterWithHooks.current.reset();
        this.jobs.current.reset();
    }
    render() {
        return (
            <div className="App">
                <Welcome name='Santosh' />
                <Clock />
                <button onClick={this.resetApplication}> Reset Application </button>
                <Spacer margin='16' />
                <Counter ref={this.counter}/>
                <Spacer margin='16' />
                <Jobs ref={this.jobs}/>
                <Spacer margin='16' />
                <TemperatureCalculator />
                <h1> With hooks </h1>
                <ClockWithHooks />
                <h5> Counter with State Hooks </h5>
                {/* ref={this.counterWithHooks} */}
                <CounterWithHooks/>
                <h5> Counter with Reducer Hooks</h5>
                {/* ref={this.counterWithReducerHooks} */}
                <CounterWithReducerHooks/>
                <Spacer margin='16' />
                <TemperatureCalculatorWithHooks />
                <Spacer margin='16' />
                <FetchComponent
                    url="https://jsonplaceholder.typicode.com/posts/"
                />
            </div>
        )
    }
}

export default App;