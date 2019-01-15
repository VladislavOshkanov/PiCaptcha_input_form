import React, { Component } from 'react';
import { getWord as getWordAPI } from './api';
import App from './App'
import LC from "literallycanvas/lib/js";

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            type: 0, // 0 - picture input, 1 - accepted, 2 - declined
        }
        // this.drawer = React.createRef();
    }
    componentDidMount() {
        this.getWord();
        this.drawer = LC.init(document.getElementById('drawer'));

    }
    getWord() {
        // console.log(getWordAPI)
        let word = getWordAPI().then((word) => this.setState({word: word}));
    }
    onRefreshPressed = () => {
        this.drawer.clear();
    }
    render() {
        return (<App
            word={this.state.word}
            type={this.state.type}
            onRefreshPressed = {this.onRefreshPressed}
            reference = {this.drawer}
        />)
    }
}

export default AppContainer;