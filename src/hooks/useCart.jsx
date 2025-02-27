import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "./useSecureAxios";
import toast from "react-hot-toast";
import useAuth from "./useAuth";
import { useEffect } from "react";

const useCart = () => {
  const axiosSecure = useSecureAxios();
  const { user } = useAuth();

  const fetchCarts = async () => {
    const { data } = await axiosSecure.get(`/carts?email=${user.email}`);
    return data;
  };

  const {
    refetch,
    error,
    data: cart = [],
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: fetchCarts,
    enabled: !!user?.email
  });

  useEffect(() => {
    if (error) {
      return toast.error(error.message);
    }
  }, [error]);

  return [cart, refetch];
};

export default useCart;
