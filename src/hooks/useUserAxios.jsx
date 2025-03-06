import axios from "axios";

const userAxios = axios.create({
  baseURL: "http://localhost:5000",
  // withCredentials: true,
});
const useUserAxios = () => {
  return userAxios;
};

export default useUserAxios;
