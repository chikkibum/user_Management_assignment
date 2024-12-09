import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
      <div className="h-screen flex">
        {/* Sidebar */}
        <div className="fixed top-0 left-0 h-full w-64">
          <Sidebar />
        </div>
  
        {/* Main Area */}
        <div className="ml-64 flex flex-col flex-1">
          {/* Header */}
          <div className="fixed top-0 left-64 w-[calc(100%-16rem)] z-10">
            <Header />
          </div>
  
          {/* Page Content */}
          <div className="mt-16 p-6">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

export default DashboardLayout;
