import Link from "next/link";
import React, { memo } from "react";

const SidebarSubLink = memo(({ layout, pathGroup, path, name }) => {
  return (
    <li className="mb-1 last:mb-0">
      <Link href={`${layout}${pathGroup}${path}`}>
        <a className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
          <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
            {name}
          </span>
        </a>
      </Link>
    </li>
  );
});

export default SidebarSubLink;
