import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import MenuCover from "../../../shared/MenuCover/MenuCover";
import orderFoodImg from "../../../assets/shop/banner2.jpg";
import OrderFoodTabs from "../../../components/OrderFoodTabs/OrderFoodTabs";
import "./OrderFood.css";
import { useDynamicTitle } from "../../../hooks/useDynamicTitle";

const OrderFood = () => {
  useDynamicTitle("Bistro Boss | Order Food");
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  //   console.log(drinks, dessert, pizza, salad, soup);

  return (
    <div>
      <MenuCover
        img={orderFoodImg}
        title="our shop"
        subTitle="would you like to try a dish"
      />

      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="my-16"
      >
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUP</Tab>
          <Tab>DESSERT</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel>
          <OrderFoodTabs items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderFoodTabs items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderFoodTabs items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderFoodTabs items={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderFoodTabs items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;
