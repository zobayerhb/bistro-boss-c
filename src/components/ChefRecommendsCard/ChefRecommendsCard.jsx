import slide1 from "../../assets/home/slide1.jpg";

const ChefRecommendsCard = () => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          className="w-[424px] h-[300px] object-cover"
          src={slide1}
          alt="Food"
        />
      </figure>
      <div className="text-center bg-gray-100">
        <h2 className="font-semibold text-xl text-neutral-900 pb-3 pt-8">
          Caeser Salad
        </h2>
        <p className="text-base px-6">
          Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
        </p>
        <div className=" justify-center py-6">
          <button className="btn btn-outline border-0 border-b-orange-300 border-b-4 hover:bg-[#1F2937] transition-all hover:border-b-[#1F2937] hover:border-b-4 uppercase text-orange-400 font-light">
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommendsCard;
