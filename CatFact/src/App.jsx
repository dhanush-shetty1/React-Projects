
import Axios from "axios"
import { useEffect, useState } from "react"
function App() {
  const [fact,setFact]=useState("");
const func=()=>{
  Axios.get("https://catfact.ninja/fact").
  then((res)=>{
    setFact(res.data.fact)
  }).catch((err)=>console.error(err))
}
  return (
    <div className="App">
      <p>{fact}</p>
      <button onClick={func}>Generate Cat Fact</button>
    </div>
    
  )
}

export default App
