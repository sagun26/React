import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter,setCounter]= useState(0)
 const addValue =()=>{
  counter=counter+1;
  console.log("clicked",counter);
  setCounter(counter)

 }
  const removeValue =()=>{  
  counter=counter-1;
  console.log(" button clicked",counter);
  setCounter(counter)
} 


  return (
    <>
    
     <h1> welcome to this page </h1>
     
     <button onClick={addValue}>add value{counter}</button>
    
     <br/>
     <button onClick={removeValue}>remove value{counter}</button>
    </>
  )
}

export default App
