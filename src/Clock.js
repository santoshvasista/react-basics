import { PureComponent } from 'react';

class Clock extends PureComponent {
    state = { date: new Date()}
    tick = () => {
        this.setState({
            date: new Date()
        });
    }
    componentDidMount() {
        this.timerID = setInterval(this.tick, 1000);
    }
    componentWillMount() {
        clearInterval(this.timerID);
    }
    render() {
        return (
        <h3> Current time is: {this.state.date.toLocaleTimeString()} </h3>
        )
    }
}

export default Clock;