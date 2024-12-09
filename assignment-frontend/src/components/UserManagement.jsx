import React, { useState } from "react";

const UserManagement = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newCredits, setNewCredits] = useState('');
  const [permissions, setPermissions] = useState('user');
  const [username, setUsername] = useState('');
  const [amount, setAmount] = useState('');

  const userRole = localStorage.getItem('userRole');

  console.log(newUsername, newPassword, newEmail, newCredits, permissions, username, amount);

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        },
        body: JSON.stringify({
          name: newUsername,
          email: newEmail,
          password: newPassword,
          role: permissions,
          credits: Number(newCredits)
        }),
      });

      const data = await response.json();
      if (response.ok) {
        // Handle success (e.g., clear form, show success message)
      } else {
        // Handle error
        console.error(data.message);
      }
    } catch (error) {
      console.error('Failed to create user:', error);
    }
  };

  const handleAddCredits = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/users/credits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        },
        body: JSON.stringify({
          username,
          amount: Number(amount)
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setUsername('');
        setAmount('');
        // Add success message handling here
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Failed to add credits:', error);
    }
  };

  const getPermissionOptions = () => {
    if (userRole === 'admin') {
      return (
        <>
          <option value="user">User</option>
          <option value="agent">Agent</option>
        </>
      );
    } else {
      return (
        <>
          <option value="user">User</option>
        </>
      );
    }
  };

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
                New User Username:
              </label>
              <input
                type="text"
                id="newUsername"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
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
                New User Password:
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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
                New User Email:
              </label>
              <input
                type="email"
                id="newEmail"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
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
                New User Credits:
              </label>
              <input
                type="number"
                id="newCredits"
                value={newCredits}
                onChange={(e) => setNewCredits(e.target.value)}
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
                value={permissions}
                onChange={(e) => setPermissions(e.target.value)}
                className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                {getPermissionOptions()}
              </select>
            </div>

            {/* Add User Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
                onClick={handleAddUser}
              >
                Add User
              </button>
            </div>
          </form>
        </div>

        {/* Show Add Credits section only for admin */}
        {userRole === 'admin' && (
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Add Credits Button */}
              <div className="text-center">
                <button
                  type="submit"
                  onClick={handleAddCredits}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
                >
                  Add Credits
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
