import { useState } from "react"
import { useContext } from "react";
import { AppContext } from "../App";
export const ChangeContact=()=>{
    const{setUsername}=useContext(AppContext)
    const [text,setText]=useState("");

    
    return(
        <>
            <input onChange={(event)=>setText(event.target.value)}/>
            <button onClick={()=>setUsername(text)}>Change username</button>
            
        </>
    )
}