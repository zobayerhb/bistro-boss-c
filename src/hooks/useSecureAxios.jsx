import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useSecureAxios = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios.interceptors.request.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          await logoutUser();
          navigate("/login");
        }
        return Promise.reject("Promise Reject", error);
      }
    );
  }, []);
  return axiosSecure;
};

export default useSecureAxios;
