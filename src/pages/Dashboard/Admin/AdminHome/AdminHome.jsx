import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useSecureAxios from "../../../../hooks/useSecureAxios";
import { FaBook, FaUser, FaUsers } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useSecureAxios();

  const { data: stats } = useQuery({
    queryKey: ["admin-stat"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/admin-stat");
      return data;
    },
  });

  return (
    <div className="mx-[50px]">
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user?.displayName : "Back"}
      </h2>

      {/* stats */}
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBook className="text-3xl" />
          </div>
          <div className="stat-value">${stats?.revenue}</div>
          <div className="stat-title text-xl">Revenue</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl" />
          </div>
          <div className="stat-value">{stats?.user}</div>
          <div className="stat-title text-xl">Users</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUser className="text-3xl" />
          </div>
          <div className="stat-value">{stats?.products}</div>
          <div className="stat-title text-xl">Products</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUser className="text-3xl" />
          </div>
          <div className="stat-value">{stats?.orders}</div>
          <div className="stat-title text-xl">Orders</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
