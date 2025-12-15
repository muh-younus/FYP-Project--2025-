import React from 'react';

// Reusable Input Field Component to keep the code cleaner
const ProfileInputField = ({ label, placeholder, type = "text", widthClass = "w-full" }) => (
  <div className={widthClass}>
    <label className="text-lg font-medium">{label}</label>
    <br />
    <input
      type={type}
      placeholder={placeholder}
      // Replaced hardcoded w-[405px] with w-full inside a flex container for better layout control
      className="w-full border border-gray-300 rounded-md p-2 mt-1 mb-5 focus:ring-[#059AA0] focus:border-[#059AA0]"
    />
  </div>
);

function Editprofile() {
  return (
    <>
      {/* The main section container, keeping original padding and column span */}
      <section className="col-span-4 px-20">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold">Edit Profile</h1>
          
          {/* Avatar Area */}
          <div className="flex flex-col items-center">
            <img
              src=""
              alt=""
              className="w-20 h-20 rounded-full bg-[#059AA0] mb-2 border-2 border-[#059AA0]"
            />
            {/* Added a subtle button/link for changing the photo */}
            <button className="text-sm text-[#059AA0] hover:underline font-medium">
              Change Photo
            </button>
          </div>
        </div>
        
        {/* Profile Form */}
        <form onSubmit={(e) => e.preventDefault()}>
          
          {/* Row 1: First Name & Last Name */}
          <div className="flex flex-row gap-[30px]">
            <ProfileInputField label="First Name" placeholder="Muhammad" widthClass="flex-1" />
            <ProfileInputField label="Last Name" placeholder="Younus" widthClass="flex-1" />
          </div>

          {/* New Row 2: Designation & Gender/Pronouns (Professional Fields) */}
          <div className="flex flex-row gap-[30px]">
            <ProfileInputField label="Designation/Title" placeholder="Specialist in Medicine" widthClass="flex-1" />
            
            {/* Field with a select dropdown for a professional look */}
            <div className="flex-1">
              <label className="text-lg font-medium">Gender/Pronouns</label>
              <br />
              <select
                className="w-full border border-gray-300 rounded-md p-2 mt-1 mb-5 appearance-none bg-white focus:ring-[#059AA0] focus:border-[#059AA0]"
                defaultValue=""
              >
                <option value="" disabled>Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="nonbinary">Non-Binary</option>
                <option value="preferNot">Prefer not to say</option>
              </select>
            </div>
          </div>

          {/* Full Width Fields: Email & Password */}
          <div>
            <ProfileInputField label="Email" placeholder="muhammad.younus@example.com" type="email" />
            
            <div className="mb-5"> {/* Encapsulate password field */}
              <label className="text-lg font-medium">Password</label>
              <br />
              <input
                type="password"
                placeholder="********"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-[#059AA0] focus:border-[#059AA0]"
              />
              <p className="text-sm text-gray-500 mt-1">Leave blank to keep current password.</p>
            </div>

            {/* Row 3: Contact Number & Address (Kept the original structure) */}
            <div className="flex flex-row gap-[30px]">
              {/* Note: Original component had w-[405px] and w-[410px]. Using flex-1 keeps the clean two-column look. */}
              <ProfileInputField label="Contact Number" placeholder="+92 3XX XXXXXXX" widthClass="flex-1" />
              <ProfileInputField label="Address" placeholder="123 Street, City, Country" widthClass="flex-1" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6">
            <button
              type="button" // Use type="button" for cancel to prevent form submission
              className="px-6 py-2 text-[#059AA0] border border-[#059AA0] rounded-md mr-4 hover:bg-gray-100 transition duration-300 font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#059AA0] px-6 py-2 text-white rounded-md hover:bg-white hover:border hover:border-[#059AA0] hover:text-[#059AA0] transition duration-300 font-semibold"
            >
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Editprofile;