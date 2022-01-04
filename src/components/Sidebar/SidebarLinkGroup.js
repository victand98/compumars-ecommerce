import React, { memo, useState } from "react";
import Link from "next/link";
import SidebarSubLink from "./SidebarSubLink";

const SidebarLinkGroup = ({
  sidebarExpanded,
  setSidebarExpanded,
  activecondition,
  name,
  icon: Icon,
  subitems,
  layout,
  pathGroup,
}) => {
  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <li
      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
        activecondition && "bg-gray-900"
      }`}
    >
      <Link href="#">
        <a
          className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
            activecondition && "hover:text-gray-200"
          }`}
          onClick={(e) => {
            e.preventDefault();
            sidebarExpanded ? handleClick() : setSidebarExpanded(true);
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Icon
                className={`flex-shrink-0 h-6 w-6 ${
                  activecondition ? "text-indigo-500" : "text-gray-400"
                }`}
              />

              <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                {name}
              </span>
            </div>

            {/* Icon */}
            <div className="flex flex-shrink-0 ml-2">
              <svg
                className={`w-3 h-3 flex-shrink-0 ml-1 fill-current text-gray-400 ${
                  open && "transform rotate-180"
                }`}
                viewBox="0 0 12 12"
              >
                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
              </svg>
            </div>
          </div>
        </a>
      </Link>

      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
        <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
          {subitems.map((subitem, index) => (
            <SidebarSubLink
              key={index}
              layout={layout}
              pathGroup={pathGroup}
              {...subitem}
            />
          ))}
        </ul>
      </div>
    </li>
  );
};

export default memo(SidebarLinkGroup);
