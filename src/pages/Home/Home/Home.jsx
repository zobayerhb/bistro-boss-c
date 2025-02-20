import Calls from "../../../components/Calls/Calls";
import Banner from "../Banner/Banner";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../Featured/Featured";
import FoodCategories from "../FoodCategories/FoodCategories";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <FoodCategories />
      <PopularMenu />
      <Calls />
      <ChefRecommends />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
