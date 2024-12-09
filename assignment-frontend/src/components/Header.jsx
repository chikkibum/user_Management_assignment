import React, { useContext } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Users, Sun, Moon } from "lucide-react"; // Import icons
import ThemeContext from '../ThemeContext';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Function to handle navigation for the User Settings modal
  const toggleUserSettings = () => {
    navigate('/dashboard/usersettings');
  };

  const toggleUserManagement = () => {
    navigate('/dashboard/usermanagement');
  };

  return (
    <>
      {/* Header */}
      <nav className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 px-6 py-4 shadow-sm">
      
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <h1 className="text-gray-600 dark:text-gray-300 font-medium text-lg">
            Hello <span className="text-purple-600">User,</span>
          </h1>
        </div>

        {/* Center Section */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-gray-600 dark:text-gray-300 text-xl font-bold">Admin</h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleUserManagement}
            className="relative text-gray-500 bg-purple-600 text-white py-2 px-4 rounded-lg hover:text-gray-300 flex items-center gap-1"
          >
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">User Management</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="py-2 px-4 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 flex items-center"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" /> // Moon icon for dark mode
            ) : (
              <Sun className="w-5 h-5" /> // Sun icon for light mode
            )}
          </button>

          {/* User Settings Button */}
          <button
            onClick={toggleUserSettings}
            className="w-25 h-10 pr-2 pl-2 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full hover:bg-green-300 focus:outline-none"
          >
            <span className="text-xs font-semibold">User Settings</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
