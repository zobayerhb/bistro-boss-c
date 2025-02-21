import { useDynamicTitle } from "../../../hooks/useDynamicTitle";
import useMenu from "../../../hooks/useMenu";

import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

import MenuCover from "../../../shared/MenuCover/MenuCover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  useDynamicTitle("Bistro Boss | Menu");
  const [menu] = useMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <MenuCover
        title={"OUR MENU"}
        subTitle={"WOULD YOU LIKE TO TRY A DISH"}
        img={menuImg}
      />
      <SectionTitle heading={"TODAY'S OFFER"} subheading={"Don't miss"} />
      <MenuCategory items={offered} />
      <MenuCategory
        items={dessert}
        img={dessertImg}
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        title="desserts"
      />
      <MenuCategory
        items={pizza}
        img={pizzaImg}
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        title="pizzas"
      />
      <MenuCategory
        items={salad}
        img={saladImg}
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        title="salads"
      />
      <MenuCategory
        items={soup}
        img={soupImg}
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        title="soup"
      />
    </div>
  );
};

export default Menu;
