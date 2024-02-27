import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import Feed from './Feed'
import Routing from './Routing'
import Login from './Login'

function App() {
  const [showHome, setShowHome] = useState(false);

  const handleClick = () => {
    setShowHome(true); 
  };
  return (
    <div >
      <Routing/>

    {/* <h5>..</h5>
    <Navbar/>
    <Feed/>
    <Navbar/>
   <h6></h6>
    <button onClick={handleClick}>Table Component</button>
      {showHome && <Home />}  */}
    </div>
  )
}

export default App
