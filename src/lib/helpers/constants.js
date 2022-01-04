export const API_COMPUMARS_URI =
  process.env.NEXT_PUBLIC_API_COMPUMARS_URI || "";

export const LOCAL_STORAGE_ITEMS = {
  ACCESS_TOKEN: "access-token",
  REFRESH_TOKEN: "refresh-token",
  USER: "user",
};

export const ROLES = {
  SUPER_ADMIN: {
    name: "Super Administrador",
    slug: "superadmin",
  },
  ADMIN: {
    name: "Administrador",
    slug: "admin",
  },
  MODERATOR: {
    name: "Moderador",
    slug: "moderator",
  },
  USER: {
    name: "Usuario",
    slug: "user",
  },
  GUEST: {
    name: "Invitado",
    slug: "guest",
  },
};

export const RESOURCES = {
  PRODUCTS: "products",
  USERS: "users",
};

export const ACTIONS = {
  CREATE: "create",
  DELETE: "delete",
  UPDATE: "update",
  READ: "read",
};
