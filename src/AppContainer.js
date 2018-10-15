import React, { Component } from 'react';
import { getWord as getWordAPI } from './api';
import App from './App'

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            type: 0, // 0 - picture input, 1 - accepted, 2 - declined
        }
    }
    componentDidMount() {
        this.getWord();
    }
    getWord() {
        // console.log(getWordAPI)
        let word = getWordAPI();
        this.setState({
            word: word
        })
    }
    render() {
        return (<App
            word={this.state.word}
            type={this.state.type}
        />)
    }
}

export default AppContainer;