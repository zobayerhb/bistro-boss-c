import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import OrderFood from "../pages/OrderFood/OrderFood/OrderFood";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Reservation from "../pages/Dashboard/Reservation/Reservation";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import Review from "../pages/Dashboard/Review/Review";
import Booking from "../pages/Dashboard/Booking/Booking";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoute from "./AdminRoute";
import Bookings from "../pages/Dashboard/Admin/Bookings/Bookings";
import AddItems from "../pages/Dashboard/Admin/AddItems/AddItems";
import ManageItems from "../pages/Dashboard/Admin/ManageItems/ManageItems";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import UpdateItem from "../pages/Dashboard/Admin/UpdateItem/UpdateItem";
import { menuLoader } from "../components/MenuLoader/MenuLoader";
import Payment from "../pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>Page not pound</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <OrderFood />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/userHome",
        element: <UserHome />,
      },
      {
        path: "/dashboard/reservation",
        element: <Reservation />,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/cart",
        element: <Cart />,
      },
      {
        path: "/dashboard/review",
        element: <Review />,
      },
      {
        path: "/dashboard/booking",
        element: <Booking />,
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      },
      // addmin route
      {
        path: "/dashboard/adminHome",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addItems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageItems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "/dashboard/bookings",
        element: (
          <AdminRoute>
            <Bookings />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allUser",
        element: (
          <AdminRoute>
            <AllUser />
          </AdminRoute>
        ),
      },
    ],
  },
]);
