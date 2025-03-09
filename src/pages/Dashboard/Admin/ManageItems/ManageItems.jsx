import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../../hooks/useMenu";
import toast from "react-hot-toast";
import useSecureAxios from "../../../../hooks/useSecureAxios";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useSecureAxios();

  // delete item
  const handleDelete = (id) => {
    axiosSecure
      .delete(`/menu/${id}`)
      .then((result) => {
        console.log(result.data);
        const user = result.data;
        if (user.deletedCount > 0) {
          toast.success(`item successfully delete`);
        }
        // refetch data to update UI
        refetch();
      })
      .catch((error) => toast.error(error.message));
  };

  // confirmation delete item
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

  return (
    <div>
      <SectionTitle subheading="How many??" heading="MANAGE ALL USERS" />
      <div className="bg-white px-10 py-8 w-[850px] mx-auto rounded">
        {/* <span className="uppercase font-bold text-2xl">
          total users: ({users.length})
        </span> */}
        <div className="overflow-x-auto pt-4">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-right">${item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn btn-ghost bg-orange-300 text-white text-lg">
                        <FaEdit />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleCofirmDelete(item._id)}
                      className="btn btn-ghost btn-md bg-red-500 text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
