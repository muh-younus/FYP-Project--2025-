import Home from "./components/landingPage/Navbar"
import Herosection from "./components/landingPage/HeroSection"
import Login from "./components/login/Login"
import Dashboard from "./components/dashboard/dashboard"
import Input from "./components/input/Input"
import Landing from "./components/landingPage/Landing"
import Uploadcough from "./components/input/UploadInput"
import Report from "./components/input/Report"
import Chatbot from "./components/chatbot/Chatbot"
import Setting from "./components/dashboard/Setting"



import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {

  return (

    <>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Landing />}  />
        <Route path="/login" element={<Login />}  /> 
        <Route path="/dashboard" element={<Dashboard />}  />
        <Route path="/setting" element={<Setting />}  />
        <Route path="/Input" element={<Input />}  />
         <Route path="/Uploadcough" element={<Uploadcough />} />
          <Route path="/report" element={<Report />} />  */}
          <Route path="/" element={<Chatbot />} /> 
         
      </Routes>
    </Router>
    
    
    



    </>
  )
} export default App