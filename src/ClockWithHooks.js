import { useState, useEffect } from 'react';

function ClockWithHooks() {
    const [date, setDate] = useState(new Date());
    // TODO: If I don't pass `[]` it is calling for every render. Clearing interval and again setting interval 
    // Which is better? empty args or [] or date
    // [] - useEffect will call only once at intial render time and as we used setInterval it will run for every 1 sec
    // date - useEffect will trigger everytime there is update to date, In this case we are updating date in setInterval,
    //        so everytime it clears Interval and then new setInterval with 1sec. Instead we can use setTimeout 
    // useEffect(() => {
    //     const timerID = setInterval(() => setDate(new Date()), 1000);
    //     return () => {
    //         clearInterval(timerID);
    //     }
    // }, []);

    useEffect(() => {
        const timerID = setTimeout(() => setDate(new Date()), 1000);
        return () => {
            clearTimeout(timerID);
        }
    }, [date]);

    return (
        <h3> Current time is: {date.toLocaleTimeString()}</h3>
    )
}


export default ClockWithHooks;