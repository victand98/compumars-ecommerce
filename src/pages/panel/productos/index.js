import React from "react";
import { DashboardLayout } from "layouts";

const ProductList = () => {
  return <div>Product List Page</div>;
};

ProductList.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default ProductList;
