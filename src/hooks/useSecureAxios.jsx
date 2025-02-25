import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useSecureAxios = () => {
  return axiosSecure;
};

export default useSecureAxios;
