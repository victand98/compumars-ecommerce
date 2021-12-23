import React from "react";
import { HamburgerButton, HelpPopover, UserDropdown } from "components";

export const AdminNavbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <nav className="sticky top-0 bg-white border-b border-gray-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <HamburgerButton open={sidebarOpen} setOpen={setSidebarOpen} />
          </div>

          {/* Header: Right side */}
          <div className="flex items-center">
            <HelpPopover />
            {/*  Divider */}
            <hr className="w-px h-6 bg-gray-200 mx-3" />
            <UserDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};
