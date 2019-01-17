import React from 'react';

import InputFormLayout from "./layouts/InputFormLayout.js"

import './App.css';
import "literallycanvas/lib/css/literallycanvas.css"

const App = ({type, word, reference, onRefreshPressed, onSubmitPressed}) => {
  return(
    <div className="App">
       <InputFormLayout
           word={word}
           reference = {reference}
           onSubmitClick={onSubmitPressed}
           onRefresh={onRefreshPressed}
           type = {type}
       />
    </div>
  )
};


export default App;
