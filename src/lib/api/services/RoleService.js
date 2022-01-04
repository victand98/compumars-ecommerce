import axios from "lib/helpers/axios";

const RoleService = {
  all: () => axios.get("/role/all"),
};

export default RoleService;
