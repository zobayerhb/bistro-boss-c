import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  // console.log(menu);
  return (
    <div>
      <SectionTitle subheading="Check it out" heading="FROM OUR MENU" />
      <div className="grid md:grid-cols-2 gap-10 mb-10 pt-5">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="w-[236px] mx-auto mb-16">
        <button className="text-center cursor-pointer uppercase bg-gray-100 rounded-xl py-3 px-6 text-[#1F2937] text-xl font-medium">
          view full menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
