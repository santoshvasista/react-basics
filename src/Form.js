import { Component } from 'react';

class Form extends Component {
    // [TODO] If I want to convert it into hooks - how can I initialzie initial state?
    // Especially at line 19, Do I need to setXXXX for all state variables?
    // Or do we have any shortcut?

    initialState = {
        name: '',
        job: '',
    };
    state =  this.initialState;
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    render() {
        const {name, job} = this.state;
        return (
            <form>
                <label htmlFor="name"> Name </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange}
                />
                <label htmlFor="job"> Job </label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange}
                />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form;