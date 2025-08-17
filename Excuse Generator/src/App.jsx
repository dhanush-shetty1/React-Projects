import Axios from "axios"
import { useState } from "react";
useState
function App() {
  const [excuse,setExcuse]=useState("");

  const Excuse=(type)=>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${type}/`).
    then((res)=>{
      setExcuse(res.data[0].excuse);
    })

  }
  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={()=>Excuse("party")}>Party</button>
      <button onClick={()=>Excuse("family")}>Family</button>
      <button onClick={()=>Excuse("office")}>Office</button>
      <p>{excuse}</p>
    </div>
  )
}

export default App
