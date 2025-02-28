import { FaTrashAlt, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../../hooks/useSecureAxios";
import toast from "react-hot-toast";

const AllUser = () => {
  const axiosSecure = useSecureAxios();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });

  const handleDelete = (id) => {
    axiosSecure
      .delete(`/users/${id}`)
      .then((result) => {
        const user = result.data;
        if (user.deletedCount > 0) {
          toast.success("User Succesfully Delete");
        }
        refetch();
      })
      .catch((error) => toast.error(error.message));
  };

  const handleCofirmDelete = (id) => {
    toast((t) => (
      <div className="flex items-center">
        <div>
          <p>
            Are You <b>Sure?</b>
          </p>
        </div>
        <div className="space-x-1">
          <button
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete(id);
            }}
            className="text-white px-4 py-0.5 rounded bg-red-500 text-sm"
          >
            Yes
          </button>
          <button
            className="px-4 py-0.5 text-sm bg-green-400 text-white rounded"
            onClick={() => {
              toast.dismiss(t.id);
            }}
          >
            No
          </button>
        </div>
      </div>
    ));
  };

  // ========= MAKE ADMIN =========
  const handleUserRole = (user) => {
    axiosSecure
      .patch(`/users/admin/${user._id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success(`${user.name} now you are a admin`);
        }
      })
      .catch((error) => toast.error(error.message));
  };

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
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleUserRole(user)}
                        className="btn btn-info text-white text-lg"
                      >
                        <FaUsers />
                      </button>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleCofirmDelete(user._id)}
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
