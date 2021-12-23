import React from "react";
import { DashboardLayout } from "layouts";

const Settings = () => {
  return <div>Adjust settings page</div>;
};

Settings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Settings;
