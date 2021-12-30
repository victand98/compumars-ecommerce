import React from "react";
import { DashboardLayout } from "layouts";
import { useUsers } from "lib/api/user";

const ProductList = () => {
  const { data: users } = useUsers();
  console.log(`RENDER PAGE PRODUCTS`, users);

  return <div>{JSON.stringify(users, null, 2)}</div>;
};

ProductList.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
ProductList.authRequired = true;

export default ProductList;
