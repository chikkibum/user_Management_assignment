import React, { useState, useContext } from "react";
import ThemeContext from "../ThemeContext";

const SpoofChecker = () => {
  const [domain, setDomain] = useState("");
  const [logs, setLogs] = useState("Logs will appear here...");
  const { theme } = useContext(ThemeContext);

  const handleCheck = () => {
    if (!domain) {
      setLogs("Please enter a domain to check.");
      return;
    }
    // Simulated result
    setLogs(`Checking the domain: ${domain}... Result: No spoofing detected.`);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-800`}>
      <div className={`w-full max-w-xl bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6`}>
        {/* Title */}
        <h1 className={`text-2xl font-bold text-gray-700 dark:text-gray-200 text-center mb-6`}>
          Spoof Checker
        </h1>

        {/* Domain Input */}
        <div className="space-y-4">
          <label
            htmlFor="domain"
            className="block text-sm font-medium text-gray-600 dark:text-gray-300"
          >
            Domain to Check:
          </label>
          <input
            type="text"
            id="domain"
            placeholder="Enter domain to check"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Check Button */}
        <button
          onClick={handleCheck}
          className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          Check
        </button>

        {/* Result Section */}
        <div className="mt-8">
          <h2 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-4">Result:</h2>
          <div className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-4 text-gray-600 dark:text-gray-200 text-sm">
            {logs}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpoofChecker;
