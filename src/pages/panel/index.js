import React from "react";
import { DashboardLayout } from "layouts";

const Home = () => {
  return <div className="h-screen bg-gray-600">I am Home Dashboard</div>;
};

Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Home;
