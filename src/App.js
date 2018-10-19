import React from 'react';

import InputFormLayout from "./layouts/InputFormLayout.js"

import './App.css';
import "literallycanvas/lib/css/literallycanvas.css"

const App = ({type, word}) => {
  return(
    <div className="App">
       <InputFormLayout
           word={word}
           onSubmitClick={()=>{}}
           onRefresh={()=>{}}
       />
    </div>
  )
};


export default App;
