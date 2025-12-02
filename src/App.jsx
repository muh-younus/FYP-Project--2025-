import Home from "./components/landingPage/Navbar"
import Herosection from "./components/landingPage/HeroSection"
import Login from "./components/login/Login"
import Dashboard from "./components/dashboard/dashboard"
import Input from "./components/input/Input"
import Landing from "./components/landingPage/Navbar"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App(){

  return(

    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}  />
        {/* <Route path="/" element={<Login />}  /> ✅ This route exists */}
         ✅ This route exists
      </Routes>
    </Router>
    
    
    

    
    
    </>
  )
}export default App