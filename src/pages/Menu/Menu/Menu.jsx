// import DynamicPageTitle from "../../../components/DynamicPageTitle/DynamicPageTitle";
import { useDynamicTitle } from "../../../hooks/useDynamicTitle";

const Menu = () => {
  useDynamicTitle("Bistro Boss | Menu");
  return (
    <div>
      {/* <DynamicPageTitle title={"Bistro Boss | Menu"} /> */}
      Menu
    </div>
  );
};

export default Menu;
