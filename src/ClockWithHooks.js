import { useState, useEffect } from 'react';

function ClockWithHooks() {
    const [date, setDate] = useState(new Date());
    // TODO: If I don't pass `[]` it is calling for every render. Clearing interval and again setting interval 
    useEffect(() => {
        const timerID = setInterval(() => setDate(new Date()), 1000);
        return () => {
            clearInterval(timerID);
        }
    }, []);

    return (
        <h3> Current time is: {date.toLocaleTimeString()}</h3>
    )
}


export default ClockWithHooks;