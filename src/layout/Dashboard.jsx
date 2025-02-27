import {
  FaCalendar,
  FaCalendarCheck,
  FaEye,
  FaHome,
  FaMoneyBill,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  return (
    <div className="flex cinzel-font">
      {/* dashboard link */}
      <div className="bg-orange-300 min-h-screen px-6">
        <ul className="menu">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-blue-400 text-white" : ""
              }
              to="/dashboard/userHome"
            >
              <FaHome /> USER HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-blue-400 text-white" : ""
              }
              to="/dashboard/reservation"
            >
              <FaCalendar /> RESERVATION
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-blue-400 text-white" : ""
              }
              to="/dashboard/payment"
            >
              <FaMoneyBill /> PAYMENT HISTORY
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-blue-400 text-white" : ""
              }
              to="/dashboard/cart"
            >
              <FaShoppingCart /> MY CART ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-blue-400 text-white" : ""
              }
              to="/dashboard/review"
            >
              <FaEye /> ADD REVIEW
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-blue-400 text-white" : ""
              }
              to="/dashboard/booking"
            >
              <FaCalendarCheck /> MY BOOKING
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
