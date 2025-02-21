import OrderFoodCard from "../OrderFoodCard/OrderFoodCard";

const OrderFoodTabs = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item) => (
        <OrderFoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default OrderFoodTabs;
