import { useToggle } from "./useToggle"



function App() {
  
  const[isvisible,toggle]=useToggle();
  return (
    <div className="App">
      <button onClick={toggle}>
        {isvisible? "Hide":"Show"}
      </button>
      {isvisible && <h1>Hidden Text</h1>}
    </div>
  )
} 

export default App
