import {
  CalendarIcon,
  CubeIcon,
  HomeIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { RESOURCES } from "lib/helpers/constants";

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
        resource: RESOURCES.USERS,
      },
      {
        pathGroup: "/catalogo",
        name: "Catálogo",
        icon: CubeIcon,
        layout: "/panel",
        subitems: [
          { path: "", name: "Productos", resource: RESOURCES.PRODUCTS },
          {
            path: "/categorias",
            name: "Categorias",
            resource: RESOURCES.USERS,
          },
          { path: "/atributos", name: "Atributos", resource: RESOURCES.USERS },
          { path: "/marcas", name: "Marcas", resource: RESOURCES.USERS },
          {
            path: "/descuentos",
            name: "Descuentos",
            resource: RESOURCES.USERS,
          },
          { path: "/stock", name: "Stock", resource: RESOURCES.USERS },
        ],
      },
    ],
  },
  {
    section: "Configuración",
    items: [
      {
        path: "/ajustes",
        name: "Ajustes",
        icon: KeyIcon,
        layout: "/panel",
        resource: RESOURCES.USERS,
      },
      {
        path: "/perfil",
        name: "Perfil",
        icon: UserIcon,
        layout: "/panel",
        resource: RESOURCES.USERS,
      },
    ],
  },
];
