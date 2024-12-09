import React from "react";
import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  SquareCheckBig,
  Mails,
  Send,
  Logs,
  Waypoints,
  LogOut,
  MessageSquare,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="h-full w-64 bg-gray-50 dark:bg-gray-900 shadow-lg flex flex-col justify-between p-6">
      {/* Top Section */}
      <div>
        {/* Logo and Title */}
        <div className="flex items-center gap-2 mb-10">
          <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full">
            <LayoutDashboard className="text-purple-600 dark:text-purple-400 w-6 h-6" />
          </div>
          <h1 className="text-purple-600 dark:text-purple-400 font-bold text-lg">XYZ</h1>
        </div>

        {/* Menu Items */}
        <ul className="space-y-6">

          <li>
            <NavLink
              to="/dashboard/spoofchecker"
              className={({ isActive }) =>
                `flex items-center gap-3 text-sm font-medium p-3 rounded-lg ${
                  isActive
                    ? "text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-800"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`
              }
            >
              <SquareCheckBig className="w-5 h-5" />
              Spoof Checker
            </NavLink>
          </li>

        </ul>

        <div className="border-t my-6 border-gray-200 dark:border-gray-700"></div>

        <ul className="space-y-6">
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center gap-3 text-sm font-medium p-3 rounded-lg ${
                  isActive
                    ? "text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-800"
                    : "text-gray-600 dark:text-gray-300 hover:bg-red-300 dark:hover:bg-red-700"
                }`
              }
            >
              <LogOut className="w-5 h-5" />
              Logout
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="bg-purple-200 dark:bg-purple-700 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
            <MessageSquare className="text-purple-600 dark:text-purple-400 w-5 h-5" />
          </div>
          <button className="text-sm text-purple-600 dark:text-purple-400 font-medium hover:underline">
            Share Your Thoughts
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
