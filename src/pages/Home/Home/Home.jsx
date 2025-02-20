import Calls from "../../../components/Calls/Calls";
import Banner from "../Banner/Banner";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FoodCategories from "../FoodCategories/FoodCategories";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      <FoodCategories />
      <PopularMenu />
      <Calls />
      <ChefRecommends />
    </div>
  );
};

export default Home;
