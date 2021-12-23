import React, { useState } from "react";
import { AdminNavbar, Sidebar } from "components";
import { dashboardRoutes } from "./routes";

export const DashboardLayout = ({ children, ...rest }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        routes={dashboardRoutes}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Content Area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <AdminNavbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main>{children}</main>
      </div>
    </div>
  );
};
