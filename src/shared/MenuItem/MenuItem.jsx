const MenuItem = ({ item }) => {
  const { image, name, recipe, price } = item || {};
  return (
    <>
      <div className="flex">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[118px] pr-4"
          src={image}
          alt=""
        />
        <div>
          <h5 className="text-[#151515] text-xl uppercase">
            {name} ------------------
          </h5>
          <p className="text-[#737373] text-base">{recipe}</p>
        </div>
        <span className="text-[#BB8506]">{price}</span>
      </div>
    </>
  );
};

export default MenuItem;
