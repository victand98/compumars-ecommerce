import { HomeIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { Popover } from "components";
import React from "react";

const solutions = [
  {
    name: "Insights",
    description: "Measure actions your users take",
    href: "##",
    icon: HomeIcon,
  },
  {
    name: "Automations",
    description: "Create your own targeted content",
    href: "##",
    icon: HomeIcon,
  },
  {
    name: "Reports",
    description: "Keep track of your growth",
    href: "##",
    icon: HomeIcon,
  },
];

export const HelpPopover = () => {
  return (
    <Popover button={HelpPopoverButton}>
      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="relative grid gap-8 bg-white p-7">
          {solutions.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
            >
              <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12 bg-red-200">
                <item.icon aria-hidden="true" className="text-yellow-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="p-4 bg-gray-50">
          <a
            href="##"
            className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
          >
            <span className="flex items-center">
              <span className="text-sm font-medium text-gray-900">
                Documentation
              </span>
            </span>
            <span className="block text-sm text-gray-500">
              Start integrating products and tools
            </span>
          </a>
        </div>
      </div>
    </Popover>
  );
};

const HelpPopoverButton = () => {
  return (
    <Popover.Button className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full">
      <span className="sr-only">Ayuda</span>
      <QuestionMarkCircleIcon className="w-5 h-5 fill-current text-gray-500" />
    </Popover.Button>
  );
};
