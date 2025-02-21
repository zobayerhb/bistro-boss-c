import MenuCover from "../../../shared/MenuCover/MenuCover";
import MenuItem from "../../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, img, title, subTitle }) => {
  return (
    <div className="mb-20">
      {title && subTitle && (
        <MenuCover title={title} subTitle={subTitle} img={img} />
      )}
      <div className="grid md:grid-cols-2 gap-10 mb-10 pt-14 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="btn btn-outline border-0 border-b-4 uppercase hover:bg-neutral hover:text-white">
          order your favourite food
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
