import SidebarLinkGroup from "components/Sidebar/SidebarLinkGroup";
import React from "react";
import SidebarLink from "./SidebarLink";

const SidebarSection = ({
  section,
  items,
  sidebarExpanded,
  setSidebarExpanded,
  pathname,
}) => {
  return (
    <div>
      <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">
        <span
          className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
          aria-hidden="true"
        >
          •••
        </span>

        <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
          {section}
        </span>
      </h3>

      <ul className="mt-3">
        {items.map((item, index) =>
          item.subitems ? (
            <SidebarLinkGroup
              key={index}
              sidebarExpanded={sidebarExpanded}
              setSidebarExpanded={setSidebarExpanded}
              activecondition={pathname.includes(item.pathGroup)}
              {...item}
            />
          ) : (
            <SidebarLink key={index} pathname={pathname} {...item} />
          )
        )}
      </ul>
    </div>
  );
};

export default SidebarSection;
