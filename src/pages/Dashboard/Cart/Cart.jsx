import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalCartProductPrice = cart.reduce(
    (accu, currentPrice) => accu + currentPrice.price,
    0
  );

  return (
    <div className="">
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
          <button className="btn btn-accent uppercase">pay</button>
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
                    <button className="btn btn-ghost btn-xs">details</button>
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
