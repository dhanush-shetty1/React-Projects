import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { Menu } from "./pages/Menu"
import { useState,createContext } from "react"

export const AppContext=createContext();
function App() {
  const [username,setUsername]=useState("Dhanush");
  return (
    <div className="App">
      <AppContext.Provider value={{username,setUsername}}>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link></Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="*" element={<h1>Dhanush SHetty is the best </h1>}/>
        </Routes>
      </Router>
      </AppContext.Provider>

    </div>
  )
}
export default App
