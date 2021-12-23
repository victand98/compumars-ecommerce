import Link from "next/link";
import React, { memo } from "react";

const SidebarLink = memo(({ layout, path, name, icon: Icon, pathname }) => {
  return (
    <li
      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
        pathname === `${layout}${path}` && "bg-gray-900"
      }`}
    >
      <Link href={`${layout}${path}`}>
        <a
          className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
            pathname === `${layout}${path}` && "hover:text-gray-200"
          }`}
        >
          <div className="flex items-center">
            <Icon
              className={`flex-shrink-0 h-6 w-6 ${
                pathname === `${layout}${path}`
                  ? "text-indigo-500"
                  : "text-gray-400"
              }`}
            />

            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
              {name}
            </span>
          </div>
        </a>
      </Link>
    </li>
  );
});

export default SidebarLink;
