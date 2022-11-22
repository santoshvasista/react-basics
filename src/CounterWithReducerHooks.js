import React from 'react';
import { useReducer } from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'increment': {
            return {
                ...state,
                isDecrementDisabled: false,
                isIncrementDisabled: state.value === state.maxValue - 1,
                value: state.value + 1
            };
        };
        case 'decrement': {
            return {
                ...state,
                isDecrementDisabled: state.value === 1,
                isIncrementDisabled: false,
                value: state.value - 1
            };
        };
        case 'updateMaxValue': {
            return {
                ...state,
                maxValue: action.payload,
                value: 0,
                isIncrementDisabled: false,
                isDecrementDisabled: true,
            }
        }
        case 'reset': {
            return {
                ...action.payload,
            };
        };
        default: throw Error();
    }
}

const CounterWithReducerHooks = React.forwardRef((props, ref) => {
    const initialState = {value: 0, isIncrementDisabled: false, isDecrementDisabled: true, maxValue: 10};
    const [state, dispatch] = useReducer(reducer, initialState);
    // TODO: This reset is not working
    const reset = () => {
        dispatch({type: 'reset', payload: initialState});
    }
    return (
        <>
            <div> This is a counter component </div>
            <div>
                <input value={state.maxValue} type="text" onChange={(event) => dispatch({type: "updateMaxValue", payload: parseInt(event?.target?.value) || 10})} />
            </div>
            <div> 
                <button disabled={state.isIncrementDisabled} onClick={() => dispatch({type: "increment"})}> + </button>
                <span> {state.value} </span>
                <button disabled={state.isDecrementDisabled} onClick={() => dispatch({type: "decrement"})}> - </button>
            </div>
        </>
    )
});

// function CounterWithReducerHooks() {
//     const initialState = {value: 0, isIncrementDisabled: false, isDecrementDisabled: true, maxValue: 10};
//     const [state, dispatch] = useReducer(reducer, initialState);
//     // TODO: This reset is not working
//     const reset = () => {
//         dispatch({type: 'reset', payload: initialState});
//     }
//     return (
//         <>
//             <div> This is a counter component </div>
//             <div>
//                 <input value={state.maxValue} type="text" onChange={(event) => dispatch({type: "updateMaxValue", payload: parseInt(event?.target?.value) || 10})} />
//             </div>
//             <div> 
//                 <button disabled={state.isIncrementDisabled} onClick={() => dispatch({type: "increment"})}> + </button>
//                 <span> {state.value} </span>
//                 <button disabled={state.isDecrementDisabled} onClick={() => dispatch({type: "decrement"})}> - </button>
//             </div>
//         </>
//     )
// }

export default CounterWithReducerHooks;