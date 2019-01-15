import React from 'react';

import InputFormLayout from "./layouts/InputFormLayout.js"

import './App.css';
import "literallycanvas/lib/css/literallycanvas.css"

const App = ({type, word, reference, onRefreshPressed}) => {
  return(
    <div className="App">
       <InputFormLayout
           word={word}
           reference = {reference}
           onSubmitClick={()=>{}}
           onRefresh={onRefreshPressed}
       />
    </div>
  )
};


export default App;
