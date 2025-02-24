import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const isLocationAllowed =
    pathName.includes("login") || pathName.includes("signup");

  return (
    <div>
      {isLocationAllowed || <Navbar />}
      <Outlet />
      {isLocationAllowed || <Footer />}
    </div>
  );
};

export default MainLayout;
