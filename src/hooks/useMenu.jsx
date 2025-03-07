import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useUserAxios from "./useUserAxios";

const useMenu = () => {
  const axiosPublic = useUserAxios();
  // const [loading, setLoading] = useState(true);
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading(false);
  //     });
  // }, []);

  const {
    data: menu = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`menu`);
      return data;
    },
  });

  return [menu, loading, refetch];
};

export default useMenu;
