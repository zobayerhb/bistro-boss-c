import {
  FaBook,
  FaCalendar,
  FaCalendarCheck,
  FaEye,
  FaHome,
  FaListUl,
  FaMoneyBill,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: CHECK ADMIN EXIST OR NOT
  const isAdmin = useAdmin();

  return (
    <div className="flex cinzel-font">
      {/* dashboard link */}
      <div className="bg-orange-300 min-h-screen px-6">
        <ul className="menu">
          {!isAdmin ? (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-blue-400 text-white" : ""
                  }
                  to="/dashboard/adminHome"
                >
                  <FaHome /> ADMIN HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-blue-400 text-white" : ""
                  }
                  to="/dashboard/addItems"
                >
                  <FaUtensils /> ADD ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-blue-400 text-white" : ""
                  }
                  to="/dashboard/manageItems"
                >
                  <FaListUl /> MANAGE ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-blue-400 text-white" : ""
                  }
                  to="/dashboard/bookings"
                >
                  <FaBook /> MANAGE BOOKINGS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-blue-400 text-white" : ""
                  }
                  to="/dashboard/allUser"
                >
                  <FaUsers /> ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
          {/* common link */}
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
