import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter,setCounter]= useState(0)
 const addValue =()=>{
  counter=counter+1;
  console.log("button clicked",counter);
  setCounter(counter)

 }
  const removeValue =()=>{  
  counter=counter-1;
  console.log(" button clicked",counter);
  setCounter(counter)
} 

return (
  <div className="container">
    <h1>Welcome to this page</h1>

    <div className="counter-value">{counter}</div>

    {/* Progress Bar */}
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${(counter / 10) * 100}%` }}
      ></div>
    </div>

    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove Value</button>
  </div>
)}

export default App
