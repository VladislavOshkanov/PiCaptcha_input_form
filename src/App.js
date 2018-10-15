import React, { Component } from 'react';
import './App.css';

const App = ({type, word}) => {
  return(
    <div className="App">
      <div className="InputForm">
        <div className="LeftContainer"> 
          <h1>{ word }</h1>
        </div>
        <div className="CentralContainer"> 
        </div>
        <div className="RightContainer"> 
        </div>
      </div>
    </div>
  )
}


export default App;
