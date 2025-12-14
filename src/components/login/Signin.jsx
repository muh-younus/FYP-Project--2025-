import React from 'react'

function Signin() {
  return (
    <>
    <main className="bg-gradient-to-br from-cyan-50 via-white to-white min-h-screen px-20 py-10">
          <div className="grid grid-cols-3 gap-16 items-center">
            {/* Left Section - Promotional Text */}
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Welcome back to
                <br />
                BreatheWell
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                If you don't have an
                <br />
                account
                <br />
                you can{" "}
                <button
                  onClick={handleOpenRegister}
                  className="text-[#059AA0] font-semibold hover:text-teal-600 underline"
                >
                  Register here!
                </button>
              </p>
            </div>

            {/* Center Section - Illustration */}
            <div className="flex justify-center items-center">
              <img
                src={image || "/placeholder.svg"}
                alt="Person with lungs illustration"
                className="w-full max-w-xs object-contain"
              />
            </div>

            {/* Right Section - Login Form */}
            <div className="bg-white px-8 py-4  rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Welcome Back
              </h3>

              <form className="space-y-5">
                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#C5F2E8] text-gray-800 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 font-medium transition"
                  />
                </div>

                {/* Password Input */}
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-[#C5F2E8] text-gray-800 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 font-medium transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-teal-500 transition text-lg"
                  >
                    {showPassword ? "🔓" : "🔒"}
                  </button>
                </div>

                {/* Forget Password link */}
                <div className="text-right">
                  <button
                    type="button"
                    className="text-sm text-gray-600 hover:text-teal-500 transition font-medium"
                  >
                    Forget Password ?
                  </button>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="w-full bg-[#059AA0] text-white font-semibold py-3 rounded-lg hover:bg-teal-600 transition duration-200 mt-6"
                >
                  Sign In
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-6">
                  <span className="flex-1 h-px bg-gray-300"></span>
                  <span className="text-xs text-gray-500 font-medium">
                    Or continue with
                  </span>
                  <span className="flex-1 h-px bg-gray-300"></span>
                </div>

                {/* Social Login */}
                <div className="flex gap-4 justify-center">
                  <button
                    type="button"
                    className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-lg hover:shadow-md transition border border-gray-200 hover:border-gray-300"
                    title="Sign in with Google"
                  >
                    <img
                      src={google || "/placeholder.svg"}
                      alt="Google"
                      className="w-6 h-6"
                    />
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-lg hover:shadow-md transition border border-gray-200 hover:border-gray-300"
                    title="Sign in with Apple"
                  >
                    <img
                      src={apple || "/placeholder.svg"}
                      alt="Apple"
                      className="w-6 h-6"
                    />
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-lg hover:shadow-md transition border border-gray-200 hover:border-gray-300"
                    title="Sign in with Facebook"
                  >
                    <img
                      src={facebook || "/placeholder.svg"}
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
    </>
  )
}

export default Signin
