import React from "react";
import { Menu } from "@headlessui/react";
import {
  ChevronDownIcon,
  CogIcon,
  LogoutIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { Dropdown, Link } from "components";
import { useAppDispatch } from "lib/app/hooks";
import { logout } from "lib/features/auth/authSlice";

export const UserDropdown = () => {
  const dispatch = useAppDispatch();

  return (
    <Dropdown button={UserDropdownButton}>
      <div className="py-1">
        <Menu.Item disabled>
          <div className="px-4 py-2 opacity-7">
            <span className="font-medium text-gray-800">Compumars</span>
            <span className="text-xs text-gray-500 italic block">
              Administrador
            </span>
          </div>
        </Menu.Item>
      </div>

      <div className="py-1">
        <Menu.Item>
          {({ active }) => (
            <Link
              className={`${
                active ? "bg-gray-100 text-gray-900" : "text-gray-700"
              } group flex items-center w-full px-2 py-2 text-sm`}
              href="/panel/perfil"
            >
              <UserIcon className="w-5 h-5 mr-2" />
              Perfil
            </Link>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <Link
              className={`${
                active ? "bg-gray-100 text-gray-900" : "text-gray-700"
              } group flex items-center w-full px-2 py-2 text-sm`}
              href="/panel/ajustes"
            >
              <CogIcon className="w-5 h-5 mr-2" />
              Ajustes
            </Link>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <Link
              className={`${
                active ? "bg-gray-100 text-gray-900" : "text-gray-700"
              } group flex items-center w-full px-2 py-2 text-sm`}
              href="/"
              onClick={(e) => dispatch(logout())}
            >
              <LogoutIcon className="w-5 h-5 mr-2" />
              Salir
            </Link>
          )}
        </Menu.Item>
      </div>
    </Dropdown>
  );
};

const UserDropdownButton = () => {
  return (
    <Menu.Button className="inline-flex justify-center items-center group">
      <img
        className="w-8 h-8 rounded-full"
        src={`https://picsum.photos/200/300`}
        width="32"
        height="32"
        alt="User"
      />
      <div className="flex items-center truncate">
        <span className="hidden md:inline truncate ml-2 text-sm font-medium group-hover:text-gray-800">
          Compumars
        </span>
        <ChevronDownIcon
          className="w-5 h-5 flex-shrink-0 ml-1 fill-current text-gray-400"
          aria-hidden="true"
        />
      </div>
    </Menu.Button>
  );
};
