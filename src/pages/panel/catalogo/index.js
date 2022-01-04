import React from "react";
import { DashboardLayout } from "layouts";
import { useUsers } from "lib/api/user";
import { ROLES } from "lib/helpers/constants";

const ProductList = () => {
  const { data: users } = useUsers();
  console.log(`RENDER PAGE PRODUCTS`, users);

  return <div>{JSON.stringify(users, null, 2)}</div>;
};

ProductList.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
ProductList.auth = {
  roles: [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.MODERATOR],
};

export default ProductList;
