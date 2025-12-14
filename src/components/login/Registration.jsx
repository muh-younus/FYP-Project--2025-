import React, { useState } from 'react';

function Registration(props) {
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    bloodGroup: '',
    height: '',
    weight: '',
  });

  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Register Data:', registerData);
  };

  const handleCloseRegister = () => {
    props.state()
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 px-4">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl mx-auto p-8 md:p-10 relative">
          <button
            onClick={handleCloseRegister}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-[#059AA0] flex items-center justify-center text-gray-600 hover:text-red-600 transition text-xl"
          >
            ×
          </button>

          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 font-poppins">
            Create Your Account
          </h2>

          <form onSubmit={handleRegisterSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Muhammad Younus"
                  value={registerData.fullName}
                  onChange={handleRegisterChange}
                  className="w-full h-14 px-5 bg-cyan-50 border border-cyan-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-teal-400 transition font-poppins text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  className="w-full h-14 px-5 bg-cyan-50 border border-cyan-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-teal-400 transition font-poppins text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showRegisterPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="••••••••"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    className="w-full h-14 px-5 pr-14 bg-cyan-50 border border-cyan-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-teal-400 transition font-poppins text-base"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowRegisterPassword(!showRegisterPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-teal-600 font-medium text-sm font-poppins"
                  >
                    {showRegisterPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  placeholder="25"
                  value={registerData.age}
                  onChange={handleRegisterChange}
                  className="w-full h-14 px-5 bg-cyan-50 border border-cyan-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-teal-400 transition font-poppins text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                  Gender
                </label>
                <select
                  name="gender"
                  value={registerData.gender}
                  onChange={handleRegisterChange}
                  className="w-full h-14 px-5 bg-cyan-50 border border-cyan-200 rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-teal-400 transition font-poppins text-base cursor-pointer"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                  Blood Group
                </label>
                <select
                  name="bloodGroup"
                  value={registerData.bloodGroup || ''}
                  onChange={handleRegisterChange}
                  className="w-full h-14 px-5 bg-cyan-50 border border-cyan-200 rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-teal-400 transition font-poppins text-base cursor-pointer"
                >
                  <option value="">Select</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                  Height (cm)
                </label>
                <input
                  type="number"
                  name="height"
                  placeholder="170"
                  value={registerData.height}
                  onChange={handleRegisterChange}
                  className="w-full h-14 px-5 bg-cyan-50 border border-cyan-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-teal-400 transition font-poppins text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  placeholder="65"
                  value={registerData.weight}
                  onChange={handleRegisterChange}
                  className="w-full h-14 px-5 bg-cyan-50 border border-cyan-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-teal-400 transition font-poppins text-base"
                />
              </div>

              <div className="flex items-end justify-end">
                <button
                  type="submit"
                  className="h-14 px-12 bg-[#059AA0] text-white font-bold rounded-xl 
             hover:bg-[#05787d] active:bg-[#056066] 
             transform hover:scale-105 transition-all duration-300 
             shadow-lg font-poppins text-lg 
             flex items-center justify-center gap-3 
             min-w-[180px]"
                >
                  Register
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
