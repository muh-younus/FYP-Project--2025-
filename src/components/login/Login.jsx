"use client";

import google from "./image/google.webp";
import facebook from "./image/facebook.webp";
import apple from "./image/apple.png";
import image from "./image/mainimage.png";
import { useState } from "react";
import Lung from "../dashboard/image/lung logo.png";
import { Link } from "react-router-dom";
import Registration  from "./Registration";
import Signin from "./Signin";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  // const [showForm, setShowForm] = useState(false)
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
  });
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  // const handleOpen = () => setShowForm(true)
  // const handleClose = () => setShowForm(false)
  const handleOpenRegister = () => setShowRegisterForm(true);
  const handleCloseRegister = () => setShowRegisterForm(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Register data:", registerData);
    handleCloseRegister();
  };

  return (
    <>
      {/* Navigation */}
      <div className="px-[10px] py-[20px] hide-scrollbar  h-screen overflow-y-scroll">
        <nav className="p-5 px-5 shadow-lg shadow-[#059AA0]">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="">
              <h1 className="text-xl font-bold text-[#059AA0] flex flex-row gap-1">
                <img
                  src={Lung}
                  alt=""
                  className="w-[26px] h-[27px] object-cover"
                />{" "}
                BreatheWell
              </h1>
            </div>

            {/* Menu */}
            <div className="flex gap-12 font-medium text-gray-800">
              <a
                href="#"
                className="relative group cursor-pointer hover:text-teal-500 transition"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="relative group cursor-pointer hover:text-teal-500 transition"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="relative group cursor-pointer hover:text-teal-500 transition"
              >
                How to use
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6 text-sm font-medium">
              {/* Improved language selector with dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="text-gray-600 cursor-pointer hover:text-teal-500 transition flex items-center gap-1 px-3 py-2 rounded hover:bg-gray-50"
                >
                  🌐 {selectedLanguage}
                  <span
                    className={`transition-transform ${
                      showLanguageMenu ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {showLanguageMenu && (
                  <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-max">
                    {["English", "Spanish", "French", "German", "Chinese"].map(
                      (lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setSelectedLanguage(lang);
                            setShowLanguageMenu(false);
                          }}
                          className={`block w-full text-left px-4 py-2 hover:bg-teal-50 hover:text-teal-600 transition ${
                            selectedLanguage === lang
                              ? "bg-teal-100 text-teal-600 font-semibold"
                              : "text-gray-700"
                          }`}
                        >
                          {lang}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
              <Link
                to="/dashboard"
                className="text-teal-500 hover:text-teal-600 underline"
              >
                <a
                  href="#"
                  className="text-teal-500 hover:text-teal-600 underline"
                >
                  Sign in
                </a>
              </Link>
              <button
                onClick={handleOpenRegister}
                className="bg-[#059AA0] text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition duration-200"
              >
                Register
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <Signin/>
        
      </div>

      {/* Register Form Modal */}
      {showRegisterForm && (
        <Registration/>
        
      )}
    </>
  );
}

export default Login;
