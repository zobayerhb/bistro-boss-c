import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "./useSecureAxios";
import toast from "react-hot-toast";

const useCart = () => {
  const axiosSecure = useSecureAxios();

  const fetchCarts = async () => {
    const { data } = await axiosSecure.get("/carts");
    return data;
  };
  const { error, data: cart = [] } = useQuery({
    queryKey: ["carts"],
    queryFn: fetchCarts,
  });
  console.log(cart);
  if (error) return toast.error(error.message);

  return [cart];
};

export default useCart;
