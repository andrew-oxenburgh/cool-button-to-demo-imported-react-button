import React from 'react';
import './App.css';
import Button from "./components/Button";

function App() {
  return (
    <Button backgroundColor="green" label="thingy" onClick={()=>{alert('on clicked')}}/>
  );
}

export default App;
