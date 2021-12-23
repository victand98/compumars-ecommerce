import {
  CalendarIcon,
  CubeIcon,
  HomeIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/solid";

// Dashboard routes
export const dashboardRoutes = [
  {
    section: "Páginas",
    items: [
      { path: "", name: "Principal", icon: HomeIcon, layout: "/panel" },
      {
        path: "/calendario",
        name: "Calendario",
        icon: CalendarIcon,
        layout: "/panel",
      },
      {
        pathGroup: "/productos",
        name: "Productos",
        icon: CubeIcon,
        layout: "/panel",
        subitems: [
          { path: "", name: "Lista" },
          { path: "/nuevo", name: "Registrar" },
          { path: "/eliminados", name: "Eliminados" },
        ],
      },
    ],
  },
  {
    section: "Configuración",
    items: [
      { path: "/ajustes", name: "Ajustes", icon: KeyIcon, layout: "/panel" },
      { path: "/perfil", name: "Perfil", icon: UserIcon, layout: "/panel" },
    ],
  },
];
