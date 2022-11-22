import { Component } from 'react';
import Form from './Form';
import Table from './Table';

class Jobs extends Component {
    initialState = {
        characters: [],
    }
    state = {
        ...this.initialState,
    };
    reset = () => {
        this.setState({...this.initialState});
    }
    removeCharacter = (index) => {
        const {characters} = this.state;
        this.setState({
            characters: characters.filter((_, i) => i !== index),
        })
    }
    handleSubmit = (character) => {
        this.setState({
            characters: [...this.state.characters, character],
        })
    }
    render() {
        return (
            <>
                <Form handleSubmit={this.handleSubmit}/>
                <Table
                    data={this.state.characters}
                    removeData={this.removeCharacter}
                />
            </>
        )
    }
}

export default Jobs;