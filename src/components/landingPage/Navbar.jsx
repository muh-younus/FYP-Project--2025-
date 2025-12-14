<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "../login/Login";
import Herosection from "./HeroSection";
import lungIcon from "../dashboard/image/lung logo.png";
import { useState } from "react";
import Doctor from "./image/doctor1.png";
import Patient from "./image/user.png";
import { ArrowLeft } from "lucide-react";
=======
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from '../login/Login';
import Herosection from './HeroSection';
import lungIcon from "../dashboard/image/lung logo.png"
import { useState } from 'react';
import Doctor from './image/doctor1.png'
import Patient from './image/user.png'
>>>>>>> fe3d66137c2e9baf113ae1b4d085da446a3759b4
function Home() {
  const [form, setForm] = useState(false);

<<<<<<< HEAD
=======

  const [form, setForm] = useState(false)
  function colseform() {
    setForm(!form)
  }
>>>>>>> fe3d66137c2e9baf113ae1b4d085da446a3759b4
  return (
    <>
      <nav className="p-5 px-5 shadow-md">
        <div className="flex justify-between">
          {/* Logo-section */}
          <div className="primary">
            <h1 className="text-xl font-bold primary flex flex-row gap-1">
              <img src={lungIcon} alt="" className="w-[26px] h-[27px]" />
              BreatheWell
            </h1>
          </div>
          {/* Menu-section */}
          <div>
            <ul className="flex align-center gap-10 pr-4 font-semibold">
              <li
                className="  relative cursor-pointer  
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-[#059AA0] 
             after:transition-all after:duration-300 
             hover:after:w-full"
              >
                <a href="#">Home</a>
              </li>
              <li
                className="  relative cursor-pointer  
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-[#059AA0]
             after:transition-all after:duration-300 
             hover:after:w-full"
              >
                <a href="#about">About Us</a>
              </li>
              <li
                className="  relative cursor-pointer  
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-[#059AA0] 
             after:transition-all after:duration-300 
             hover:after:w-full"
              >
                <a href="#contact">Contact</a>
              </li>
<<<<<<< HEAD
              <li className="cursor-pointer" onClick={() => setForm(!form)}>
                <button className="primary-bg  hover:border-primary hover:border-1  hover:bg-white hover:text-black text-white py-1 px-4 rounded-full">
                  Get Started
=======
              <li className="cursor-pointer"
                onClick={() => setForm(!form)}
              >
                <button className="primary-bg  hover:border-black  hover:bg-white hover:text-black text-white py-1 px-4 rounded-full">
                  Login

>>>>>>> fe3d66137c2e9baf113ae1b4d085da446a3759b4
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

<<<<<<< HEAD
      {form && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
    
    {/* Modal */}
    <div
      className="relative w-[540px] bg-white rounded-2xl shadow-2xl p-8"
      role="dialog"
      aria-modal="true"
    >
      {/* Header */}
      <div className="flex items-center mb-6">
        <ArrowLeft
          onClick={() => setForm(false)}
          className="w-6 h-6 cursor-pointer text-[#059AA0] bg-[#E6EEF8] rounded-full hover:opacity-70"
        />
        <h1 className="flex-1 text-center text-2xl font-bold">
          Welcome to BreatheWell
        </h1>
      </div>

      <p className="text-center text-gray-600 mb-8">
        To access the portal, please choose your access type
      </p>

      {/* Options */}
      <div className="flex gap-6 justify-center">
        <Link to="/login">
          <div className="w-[160px] h-[180px] border border-[#E6EEF8] rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer transition-all hover:shadow-lg hover:border-[#059AA0]">
            <img src={Doctor} alt="Doctor" className="w-[90px] h-[90px]" />
            <p className="mt-3 text-lg font-semibold">Doctor</p>
          </div>
        </Link>

        <Link to="/login">
          <div className="w-[160px] h-[180px] border border-[#E6EEF8] rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer transition-all hover:shadow-lg hover:border-[#059AA0]">
            <img src={Patient} alt="Patient" className="w-[90px] h-[90px]" />
            <p className="mt-3 text-lg font-semibold">Patient</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
)}
=======
      {form &&
        <>
          <div>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
              <div className='bg-white rounded'
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
              >
                <Link to="/" onClick={colseform}>
                  <h1 className=" text-end text-xl font-bold cursor-pointer mr-2 mb-0 text-red-">X</h1>
                </Link>

                <div className="  w-[540px] h-[280px] bg-white rounded flex flex-col justify-center items-center mt-0">
                  <h1 onClick={window.history.back()} className="text-[25px] font-bold font-poppins font-weight-700">Welcome to the BreathWell</h1>
                  <p className="text-[20px] font-[poppins] font-weight-500">To access the portal, you need to choose a type of access</p>
                  {/* <button onClick={window.history.back()} style={color='black'}>X</button> */}
                  <div
                    className="flex flex-row items-center justify-center"
                  >
                    <Link to="/login">
                      <div
                        className="w-[150px] h-[165px] border-1 border-[#E6EEF8] rounded p-5 flex flex-col justify-center items-center cursor-pointer"
                      >
                        <img className="w-[100px] h-[100px]" src={Doctor} alt="" />
                        <p className="text-[24px] font-poppins font-weight-600 font-bold">

                          Doctor

                        </p>

                      </div>
                    </Link>
                    <Link to="/login">
                      <div
                        className="w-[150px] h-[165px] border-1 border-[#E6EEF8] rounded p-5 flex flex-col justify-center items-center cursor-pointer"
                      >
                        <img className="w-[100px] h-[100px]" src={Patient} alt="" />
                        <p className="text-[24px] font-poppins font-weight-600 font-bold">


                          Patient

                        </p>

                      </div>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </>
      }
>>>>>>> fe3d66137c2e9baf113ae1b4d085da446a3759b4

    </>
  );
}
export default Home;
