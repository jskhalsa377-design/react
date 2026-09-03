import { useState } from 'react'
import './App.css'
import Card from "./card.jsx";

function App() {
  const [count,setCount] = useState(0)
  let myobj={
    username:"Jagjeet Singh",
    age:19
  }
  let newArr=[1,2,3,4,5,6,7,8,9]
  return (
    <div className="min-h-screen bg-red-500 flex justify-center items-center">
      <Card username="jagjeet" channel="Chai aur code" someObject={myobj} btnText="visit me"/>
      <Card username="yadu" btnText="click me"/>
    </div>
  );
}

export default App;