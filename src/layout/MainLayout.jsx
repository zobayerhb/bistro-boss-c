import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const isLocationAllowed = location.pathname.includes("login");

  return (
    <div>
      {isLocationAllowed || <Navbar />}
      <Outlet />
      {isLocationAllowed || <Footer />}
    </div>
  );
};

export default MainLayout;
