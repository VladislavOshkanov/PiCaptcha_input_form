import React, { Component } from 'react';
import { getWord as getWordAPI, sendPicture} from './api';
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
        let options = {
            imageSize: {width: 256, height: 256},
            toolbarPosition: 'hidden',
            backgroundColor: '#fff',
        }
        this.drawer = LC.init(document.getElementById('drawer'), options);
        // this.drawer.setImageSize({width: 256, height:256});

    }
    getWord() {
        // console.log(getWordAPI)
        let word = getWordAPI().then((word) => this.setState({word: word}));
    }
    onRefreshPressed = () => {
        this.setState({type: 0})
        let options = {
            imageSize: {width: 256, height: 256},
            toolbarPosition: 'hidden',
            backgroundColor: '#fff',
        }
        this.drawer.clear();
        this.getWord()
    }
    onSubmitPressed = () => {
        // let black = 0;
        // for (let i = 0; i < 255; i++){
        //     for (let j = 0; j < 255; j++){
        //         if (this.drawer.getPixel(i, j)) black++; 
        //     }
        // }
        // console.log(black);
        let pictureBase64 = this.drawer.getImage().toDataURL('image/jpeg').split(',')[1];
        sendPicture(this.state.word, pictureBase64).then(r => {
            if (r === "true") 
                this.setState({type: 1});
            else 
                this.setState({type: 2});
        });
        
    }
    render() {
        return (<App
            word={this.state.word}
            type={this.state.type}
            onRefreshPressed = {this.onRefreshPressed}
            onSubmitPressed = {this.onSubmitPressed}
            reference = {this.drawer}
        />)
    }
}

export default AppContainer;