import React, { Component } from 'react';
import LC from "literallycanvas";

import './App.css';

import "../node_modules/literallycanvas/lib/css/literallycanvas.css"

const App = ({type, word}) => {
  return(
    <div className="App">
      <div className="InputForm">
        <div className="LeftContainer">
          <h1>{ word }</h1>
        </div>
        <div className="CentralContainer">
            <LC.LiterallyCanvasReactComponent imageURLPrefix="./img" />
        </div>
        <div className="RightContainer">
        </div>
      </div>
    </div>
  )
}


export default App;
