import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureAxios from "./useSecureAxios";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useSecureAxios();

  const { data: isAdmin } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin];
};

export default useAdmin;
