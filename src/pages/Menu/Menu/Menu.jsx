import { useDynamicTitle } from "../../../hooks/useDynamicTitle";
import MenuCover from "../../../shared/MenuCover/MenuCover";

import menuImg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  useDynamicTitle("Bistro Boss | Menu");
  return (
    <div>
      <MenuCover
        img={menuImg}
        title="OUR MENU"
        subTitle={"would you like to try a dish"}
      />
      <PopularMenu />
    </div>
  );
};

export default Menu;
