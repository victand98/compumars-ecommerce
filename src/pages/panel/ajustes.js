import React from "react";
import { DashboardLayout } from "layouts";
import { ROLES } from "lib/helpers/constants";

const Settings = () => {
  return <div>Adjust settings page</div>;
};

Settings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
Settings.auth = {
  roles: [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.MODERATOR],
};

export default Settings;
