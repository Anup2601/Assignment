import React, { useState } from "react";

export const UserProfile: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="relative flex gap-2 justify-center items-center">
      {/* Notification Button */}
      <div className="relative">
        <button
          onClick={() => {
            setShowNotifications(!showNotifications);
            setShowProfileMenu(false); // close profile if open
          }}
          className="hover:scale-105 transition"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/614d2cbe1851c6ce188ad7ce1949f6c1b1e2e599?placeholderIfAbsent=true&apiKey=3f7458e5d9a64c4696cf1cdfab9613a3"
            className="object-contain w-9 aspect-square"
            alt="Notifications"
          />
        </button>

        {/* Notifications Dropdown */}
        {showNotifications && (
          <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-xl border border-gray-200">
            <div className="p-3 text-gray-800 font-semibold border-b">Notifications</div>
            <ul className="max-h-60 overflow-y-auto">
              <li className="p-3 hover:bg-gray-100 cursor-pointer">New message from Ayush</li>
              <li className="p-3 hover:bg-gray-100 cursor-pointer">Your order has shipped</li>
              <li className="p-3 hover:bg-gray-100 cursor-pointer">System update available</li>
            </ul>
            <div className="p-3 text-sm text-center text-blue-600 hover:underline cursor-pointer">
              View all
            </div>
          </div>
        )}
      </div>

      {/* Profile Button */}
      <div className="relative">
        <button
          onClick={() => {
            setShowProfileMenu(!showProfileMenu);
            setShowNotifications(false); // close notifications if open
          }}
          className="hover:scale-105 transition"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/cab76405f377e91aaf178bb988ebdfbe2b2cbf09?placeholderIfAbsent=true&apiKey=3f7458e5d9a64c4696cf1cdfab9613a3"
            className="object-contain rounded-full w-[59px] aspect-square"
            alt="User Profile"
          />
        </button>

        {/* Profile Dropdown */}
        {showProfileMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl border border-gray-200">
            <ul className="text-gray-700">
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">My Profile</li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">Settings</li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">Help</li>
              <li className="px-4 py-3 text-red-600 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
