import React from "react";

const UserSettings = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center py-10 px-6">
      <div className="max-w-lg w-full bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 text-center">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">User Settings</h1>

        {/* User Info */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-300">proxy</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Credits: 12.0</p>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Change Password
          </button>
          {/* Uncomment if needed */}
          {/* <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            Change Email
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
