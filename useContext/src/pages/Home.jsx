import { useContext } from "react"
import { AppContext } from "../App"

export const Home=(props)=>{
    const {username}=useContext(AppContext)
    return(
        <>
            <h1>Welcome to the HomePage</h1><br/>
            <h1>Namaste {username}</h1>
        </>
    )   

}