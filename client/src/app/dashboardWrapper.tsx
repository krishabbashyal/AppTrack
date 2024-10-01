import React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex w-full flex-col">
        {/* Navbar */}
        <Navbar />
        <div className="h-full w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
