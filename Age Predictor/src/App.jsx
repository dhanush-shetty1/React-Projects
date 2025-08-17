import Axios from "axios";
import { useState,useEffect } from "react";

function App() {
  const [name,setName]=useState("");
  const [age,setAge]=useState(null);

  const predict=()=>{
    Axios.get(`https://api.agify.io/?name=${name}`).
    then((res)=>{
      
      setAge(res.data)
    })
  }
  return(
    <div className="App">
      <input type="text" onChange={(event)=>setName(event.target.value)} />
      <button onClick={predict}>Predict</button>
       <h1>Name:{age?.name}</h1>
      <h1>Predicted age:{age!==null?age?.age:"-"}</h1>
      <h1>Count:{age?.count}</h1>
    </div>
  )
}

export default App
