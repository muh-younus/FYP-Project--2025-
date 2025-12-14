import React, { useState } from "react";
// Assuming these imports are correct based on your file structure
// import Header from "./header.jsx"; // Removed as it's not used in the snippet
import Logo from "./image/lung logo.png"; 
import { Pen, Bell, Lock, Settings, HelpCircle, Pencil } from "lucide-react";
import Editprofile from "./Editprofile.jsx";

// --- PLACEHOLDER COMPONENTS (Define these outside the main component) ---

const NotificationContent = () => (
    <section className="col-span-4 px-20 py-10">
        <h1 className="text-2xl font-bold mb-8">Notification Settings</h1>
        <p className="text-gray-600">Manage how you receive alerts and updates from BreatheWell.</p>
        <div className="mt-6 space-y-4">
            <label className="flex items-center space-x-3">
                <input type="checkbox" defaultChecked className="form-checkbox h-5 w-5 text-teal-600 rounded" />
                <span>Email Notifications for Care Plan updates</span>
            </label>
            <label className="flex items-center space-x-3">
                <input type="checkbox" defaultChecked={false} className="form-checkbox h-5 w-5 text-teal-600 rounded" />
                <span>Push Notifications for critical alerts</span>
            </label>
        </div>
    </section>
);

const SecurityContent = () => (
    <section className="col-span-4 px-20 py-10">
        <h1 className="text-2xl font-bold mb-8">Security Settings</h1>
        <p className="text-gray-600">Review your login activity and enable two-factor authentication.</p>
        <div className="mt-6 space-y-4">
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">Change Password</button>
            <p className="text-sm text-gray-500">Last login: 2 minutes ago</p>
        </div>
    </section>
);

const AppearanceContent = () => (
    <section className="col-span-4 px-20 py-10">
        <h1 className="text-2xl font-bold mb-8">Appearance Settings</h1>
        <p className="text-gray-600">Choose your preferred theme.</p>
        <div className="mt-6 space-x-4">
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300">Light Mode</button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">Dark Mode</button>
        </div>
    </section>
);

const HelpContent = () => (
    <section className="col-span-4 px-20 py-10">
        <h1 className="text-2xl font-bold mb-8">Help & Support</h1>
        <p className="text-gray-600">Find answers to common questions or contact support.</p>
        <div className="mt-6 space-y-4">
            <a href="#" className="text-[#059AA0] hover:underline">View FAQ</a>
            <p>Email Support: <a href="mailto:support@breathewell.com" className="text-[#059AA0] hover:underline">support@breathewell.com</a></p>
        </div>
    </section>
);

// Mapping of tab IDs to their corresponding components
const ContentMap = {
    'edit-profile': Editprofile,
    'notification': NotificationContent,
    'security': SecurityContent,
    'appearance': AppearanceContent,
    'help': HelpContent,
};


function Setting() {
  const items = [
    { id: 'edit-profile', name: "Edit Profile", icon: Pen, defaultIcon: Pencil },
    { id: 'notification', name: "Notification", icon: Bell },
    { id: 'security', name: "Security", icon: Lock },
    { id: 'appearance', name: "Appearance", icon: Settings },
    { id: 'help', name: "Help", icon: HelpCircle },
  ];
  
  // Use 'edit-profile' as the initial active tab
  const [activeTab, setActiveTab] = useState('edit-profile');
  
  const ActiveContentComponent = ContentMap[activeTab];

  return (
    // Outer container for the whole page view
    <div className="w-full min-h-screen bg-gray-50"> 
      
      {/* Main Grid Container: Set to full width and min-height, and uses fixed sidebar */}
      <main className="grid grid-cols-5 w-full min-h-screen">
        
        {/* Sidebar Section (col-span-1) */}
        <section className="col-span-1 border-r border-gray-200 bg-white fixed h-full w-[20%] p-6">
          
          {/* Logo and App Name */}
          <div className="flex items-center gap-3 justify-start mb-10">
            <img className="h-6 w-6" src={Logo} alt="logo" />
            <h1 className="text-xl font-bold text-[#059AA0]">BreatheWell</h1>
          </div>
          
          {/* Settings Title */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Settings</h3>

          {/* Navigation List */}
          <ul className="flex flex-col space-y-1">
            {items.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <li
                  key={item.id}
                  className={`text-lg px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200 
                    ${isActive ? "bg-[#059AA0] text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"}`
                  }
                  onClick={() => setActiveTab(item.id)}
                >
                  <IconComponent className="inline-block mr-3 my-1" size="18" />
                  {item.name}
                </li>
              );
            })}
          </ul>
        </section>

        {/* Main Content Area (col-span-4) 
           **IMPORTANT**: The col-span-4 section must have a left margin (ml) 
           equal to the width of the fixed sidebar (col-span-1) to avoid overlap.
           Here, the fixed sidebar is roughly 20% of the screen width.
        */}
        <section className="col-span-4 ml-[20%] p-8 overflow-y-auto">
             {ActiveContentComponent && <ActiveContentComponent />}
        </section>
        
      </main>
    </div>
  );
}

export default Setting;