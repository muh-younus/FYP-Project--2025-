import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from '../login/Login';
import Herosection from './HeroSection';
import lungIcon from "../dashboard/image/lung logo.png"
import { useState } from 'react';
import Doctor from './image/doctor1.png'
import Patient from './image/user.png'
function Home() {


  const [form, setForm] = useState(false)
  function colseform() {
    setForm(!form)
  }
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
                <a href="#">About Us</a>
              </li>
              <li
                className="  relative cursor-pointer  
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-[#059AA0] 
             after:transition-all after:duration-300 
             hover:after:w-full"
              >
                <a href="#">Contact</a>
              </li>
              <li className="cursor-pointer"
                onClick={() => setForm(!form)}
              >
                <button className="primary-bg  hover:border-black  hover:bg-white hover:text-black text-white py-1 px-4 rounded-full">
                  Login

                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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

    </>
  );
}
export default Home;
