
//css
import './App.css';

//hooks
import { useCallback, useState, useEffect } from 'react';

//data
import {wordsList} from "./data/words"

//components
import StartScreen from './components/StartScreen';

const stages = [
  {id:1, name:"start"},  
  {id:2, name:"game"},  
  {id:3, name:"end"},
  {id:4, name:"reload"}
]

function App() {
  return (
    <div className="App">
      <StartScreen/>
    </div>
  );
}

export default App;
