import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export const Dropdown = ({ button: Button, children }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Button />
      </div>

      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-0.5 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
