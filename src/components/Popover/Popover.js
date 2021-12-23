import React, { Fragment } from "react";
import { Popover as HeadlessuiPopover, Transition } from "@headlessui/react";

export const Popover = ({ button: Button, children }) => {
  return (
    <HeadlessuiPopover className="relative">
      <Button />

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <HeadlessuiPopover.Panel className="absolute z-10 w-64 mt-0.5 right-0 lg:w-80">
          {children}
        </HeadlessuiPopover.Panel>
      </Transition>
    </HeadlessuiPopover>
  );
};

Popover.Button = HeadlessuiPopover.Button;
