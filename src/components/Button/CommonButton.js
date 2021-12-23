import React from "react";

export const HamburgerButton = ({ open, setOpen }) => {
  return (
    <button
      className="text-gray-500 hover:text-gray-600 lg:hidden"
      aria-controls="sidebar"
      aria-expanded={open}
      onClick={() => setOpen(!open)}
    >
      <span className="sr-only">Open sidebar</span>
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="5" width="16" height="2" />
        <rect x="4" y="11" width="16" height="2" />
        <rect x="4" y="17" width="16" height="2" />
      </svg>
    </button>
  );
};
