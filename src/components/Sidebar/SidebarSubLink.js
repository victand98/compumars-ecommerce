import React, { memo } from "react";
import Link from "next/link";
import { useAppSelector } from "lib/app/hooks";
import { canRenderItem } from "lib/helpers/utils";

const SidebarSubLink = ({ layout, pathGroup, path, name, resource }) => {
  const resources = useAppSelector((state) => state.auth.currentRole.resources);

  if (canRenderItem(resources, resource))
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

  return null;
};

export default memo(SidebarSubLink);
