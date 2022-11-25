import { useState, useEffect } from "react";
import Table from './Table';
import Spacer from "./Spacer";

const FetchResultsComponent = (props) => {
    const [value, setValue] = useState("");
    const [data, setData] = useState(props.data ?? []);
    const [searchKey, setSearchKey] = useState(props.keys[0]);
    const [timer, setTimer] = useState(null);
    const debounceInterval = 1000;
    useEffect(() => {
        setSearchKey(props?.keys[0]);
    }, [props.keys]);

    const handleInput = (event) => {
        if (!searchKey) {
            return;
        }
        const searchValue = event?.target.value ?? "";
        setValue(searchValue);
        // TODO: Option 1 - which one is better? - not loading for first time
        // if (!value) {
        //     setData(props.data);
        //     return;
        // }
        // setData(props.data.filter(d => d.body.includes(value)));
    }
    // TODO: Option 2 - which one is better?

    useEffect(() => {
        if (timer) {
            clearTimeout(timer);
        }
        const _timer = setTimeout(() => {
            filterData();
            setTimer(null);
        }, debounceInterval);
        setTimer(_timer);
    }, [props.data, value, searchKey]);

    const filterData = () => {
        if (!value || !searchKey) {
            setData(props.data);
            return;
        }
        setData(props.data.filter(d => d?.[searchKey]?.toString()?.includes(value)));
    }

    const handleSelect = (event) => {
        setSearchKey(event.target.value);
    }
    return (
        <>
            {/* <b>Refreshed at { props.date.toLocaleTimeString() }</b> */}
            <div>
                <select value={searchKey} onChange={handleSelect}>
                    {props.keys.map(key => <option key={key} value={key} name={key}> {key} </option>)}
                </select>
                <input type="text" value={value} onChange={handleInput} />
                {data.length} results found
            </div>
            <Table
                data={data}
                removeData={props.removeData}
                keys={props.keys}
            />
        </>
    )
}

// TODO: How to impelement refresh button? 
// (1)
// In UseEffect I mentioned dependency as props.url. 
// for refresh - url will not change
// do I need to create another prop like date so that 
// when refersh button clicked we need to update date in parent component.
// so that it will trigger another useEffect
// (2)
// Upon intial render - API is triggering two times, both with same URL. why?

// TODO: Pending items:
// 1) Hightlight Search key or term
// 2) Data as '/n' in it. So when I tried to search with sentence - it is not working.
// How can I make sure it works with '/n'?
const FetchComponent = (props) => {
    const [data, setData] = useState([]);
    const [date, setDate] = useState(new Date());
    const [isRefreshEnabled, setIsRefreshEnabled] = useState(true);
    const [keys, setKeys] = useState([]);
    const timerInSeconds = 3;
     const [pendingTimer, setPendingTimer] = useState(timerInSeconds);

    // fetch data
    useEffect(() => {
        fetch(props.url)
            .then(response => response.json())
            .then(response => {
                setData(response);
                setKeys(Object.keys(response?.[0]))
                setIsRefreshEnabled(false);
                setPendingTimer(timerInSeconds);
            });
    }, [props.url, date]);

    useEffect(() => {
        if (pendingTimer === 0) {
            setIsRefreshEnabled(true);
        }
        if (pendingTimer > 0) {
            setTimeout(() => {
                setPendingTimer(pendingTimer - 1);
            }, 1000)
        }
    }, [pendingTimer])

    const removeData = (index) => {
        setData(data.filter((_, i) => i !== index));
        setIsRefreshEnabled(true);
    }
    const updateDate = () => {
        setDate(new Date());
    }
    return (
        <>
            <button onClick={updateDate} disabled={!isRefreshEnabled}> Refresh API </button>
            {!isRefreshEnabled && <span> Refresh disabled for {pendingTimer} seconds </span>}
            <div>
                <b>Refreshed at {date.toLocaleTimeString()} </b>
            </div>
            <Spacer margin='8' />
            <FetchResultsComponent
                data={data}
                removeData={removeData}
                keys={keys}
            />
        </>
    )
}
export default FetchComponent;