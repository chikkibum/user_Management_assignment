import React from "react";

const UserManagement = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-8 text-center">
          User Management
        </h1>

        {/* Add New User Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-6">Add New User</h2>
          <form className="space-y-6">
            {/* New User's Username */}
            <div>
              <label
                htmlFor="newUsername"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                New User's Username:
              </label>
              <input
                type="text"
                id="newUsername"
                placeholder="Enter new user's username"
                className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* New User's Password */}
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                New User's Password:
              </label>
              <input
                type="password"
                id="newPassword"
                placeholder="Enter new user's password"
                className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* New User's Email */}
            <div>
              <label
                htmlFor="newEmail"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                New User's Email:
              </label>
              <input
                type="email"
                id="newEmail"
                placeholder="Enter new user's email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* New User's Credits */}
            <div>
              <label
                htmlFor="newCredits"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                New User's Credits:
              </label>
              <input
                type="number"
                id="newCredits"
                placeholder="Enter new user's credits"
                className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Permissions */}
            <div>
              <label
                htmlFor="permissions"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Permissions:
              </label>
              <select
                id="permissions"
                className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>User</option>
                <option>Agent</option>
                <option>Admin</option>
              </select>
            </div>

            {/* Add User Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
              >
                Add User
              </button>
            </div>
          </form>
        </div>

        {/* Add Credits Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-6">Add Credits to User</h2>
          <form className="space-y-6">
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Amount */}
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Amount:
              </label>
              <input
                type="number"
                id="amount"
                placeholder="Enter amount"
                className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Add Credits Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
              >
                Add Credits
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
