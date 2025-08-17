import { useState,useEffect } from "react";
export const Text=()=>{
    const [text,setText]=useState("");
    useEffect(()=>{
        console.log("Mounted");
        return()=>[
            console.log("Unmounted")
        ]
    },[])
    const handleChange=(event)=>{
        setText(event.target.value);
    }
    return(
        <>
        <input type="text" onChange={handleChange} /><br/>
        {text}
        </>
    )
}