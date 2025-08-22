import { ChangeContact } from "./ChangeContact"
import { useContext } from "react"
import App, { AppContext } from "../App"
export const Contact=()=>{
    const {username,setUsername}=useContext(AppContext)
    return(
        <>
            <h1>This the Contact Page {username}<br/> <ChangeContact/></h1>
        </>
    )
}