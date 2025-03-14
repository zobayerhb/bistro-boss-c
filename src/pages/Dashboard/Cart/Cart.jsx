import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import useSecureAxios from "../../../hooks/useSecureAxios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useSecureAxios();

  const totalCartProductPrice = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  // delete cart item
  const handleDelete = (id) => {
    axiosSecure
      .delete(`/carts/${id}`)
      .then((result) => {
        if (result.data.deletedCount > 0) {
          toast.success("Successfully Delete");
        }
        refetch();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // delete confirmation button
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
      <div>
        <SectionTitle subheading={"My Cart"} heading="WANNA ADD MORE?" />
      </div>
      <div className="bg-white px-10 py-8 w-[850px] mx-auto rounded">
        <div className="flex justify-evenly items-center">
          <span className="uppercase font-bold text-2xl">
            Total orders: {cart.length}
          </span>
          <span className="uppercase font-bold text-2xl">
            Total price: ${totalCartProductPrice}
          </span>
          {cart.length ? (
            <Link to="/dashboard/payment">
              <button className="btn btn-accent uppercase">pay</button>
            </Link>
          ) : (
            <button disabled className="btn btn-accent uppercase">
              pay
            </button>
          )}
        </div>
        <div className="overflow-x-auto pt-4">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
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
                  <td>$ {item.price}</td>
                  <th>
                    <button
                      onClick={() => handleCofirmDelete(item._id)}
                      className="btn btn-ghost btn-md text-red-500"
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

export default Cart;
