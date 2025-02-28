import { FaTrashAlt, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../../hooks/useSecureAxios";

const AllUser = () => {
  const axiosSecure = useSecureAxios();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });

  return (
    <div>
      <SectionTitle subheading="How many??" heading="MANAGE ALL USERS" />
      <div className="bg-white px-10 py-8 w-[850px] mx-auto rounded">
        <span className="uppercase font-bold text-2xl">
          total users: ({users.length})
        </span>
        <div className="overflow-x-auto pt-4">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td className="lowercase">{user.email}</td>
                  <td>
                    <button className="btn btn-info text-white text-lg">
                      <FaUsers />
                    </button>
                  </td>
                  <th>
                    <button
                      onClick={() => {}}
                      className="btn btn-error btn-md text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
