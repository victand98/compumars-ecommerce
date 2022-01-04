import React from "react";
import { DashboardLayout } from "layouts";
import { WithPermissions } from "components";
import { ACTIONS, RESOURCES, ROLES } from "lib/helpers/constants";

const Home = () => {
  return (
    <div className="h-screen">
      I am Home Dashboard
      <div>
        <WithPermissions action={ACTIONS.READ} resource={RESOURCES.USERS}>
          <button>I'm a button WithPermissions</button>
        </WithPermissions>
      </div>
    </div>
  );
};

Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
Home.auth = {
  roles: [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.MODERATOR],
};

export default Home;
