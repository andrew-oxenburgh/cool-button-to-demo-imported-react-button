import React from 'react';
import './App.css';
import DemoButton from "./components/DemoButton";

function App() {
  return (
    <DemoButton backgroundColor="green" label="thingy" onClick={()=>{alert('on clicked')}}/>
  );
}

export default App;
