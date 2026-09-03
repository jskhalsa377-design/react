import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  //use state is a hook
  
  let [counter,setCounter]=useState(15)
 

  // let counter=15

const addValue=()=>{
 if(counter>=20){
  return;
 }
 else{
   console.log("clicked",counter);
  // counter=counter+1
  setCounter(counter+1)
 }
}
const removeValue=()=>{
if(counter<=0){
  return;
}
else{
    console.log("clicked",counter)
  
  setCounter(counter-1);
}
}

  return (
    <>
    <h1 className="bg-blue-500 text-white text-3xl font-bold p-10">Chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    <button className="bg-black text-white p-2 rounded" onClick={addValue}>Add value {counter}</button>
    <br></br>

    <button className="bg-black-600 text-white p-2 rounded" onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
