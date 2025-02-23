const OrderFoodCard = ({ item }) => {
  const { image, name, recipe, price } = item || {};
  return (
    <div className="card">
      <figure>
        <img
          className="w-[424px] h-[300px] object-cover"
          src={image}
          alt="Food"
        />
      </figure>
      <p className="absolute bg-slate-900 px-5 py-1 rounded right-3 top-3 text-white">
        {price}
      </p>
      <div className="text-center bg-gray-100 flex flex-col flex-auto">
        <h2 className="font-semibold text-xl text-neutral-900 pb-3 pt-8">
          {name}
        </h2>
        <p className="text-base px-6 flex flex-auto">{recipe}</p>
        <div className="py-6">
          <button className="btn btn-outline border-0 border-b-orange-300 border-b-4 hover:bg-[#1F2937] transition-all hover:border-b-[#1F2937] hover:border-b-4 uppercase text-orange-400 font-light">
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderFoodCard;
