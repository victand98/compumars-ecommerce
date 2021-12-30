import useSWR from "swr";
import fetcher from "lib/helpers/fetcher";

const useUsers = () => {
  const users = useSWR("/user/all", fetcher);
  return users;
};

export default useUsers;
