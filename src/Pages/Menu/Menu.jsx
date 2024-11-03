import React from "react";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import useMenu from "../../Hooks/UseMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Cover img={menuImg} title={"our menu"}></Cover>
      <SectionTitle
        subHeading={"Dont miss"}
        heading={"TODAYS OFFER"}
      ></SectionTitle>
      {/* Offers */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert */}
      <MenuCategory
        img={dessertImg}
        title={"DESSERT"}
        items={dessert}
      ></MenuCategory>
      {/* pizza */}
      <MenuCategory img={pizzaImg} title={"PIZZA"} items={pizza}></MenuCategory>
      {/* salads */}
      <MenuCategory img={saladImg} title={"SALAD"} items={salad}></MenuCategory>
      {/* Soup */}
      <MenuCategory img={soupImg} title={"SOUP"} items={soup}></MenuCategory>
    </div>
  );
};

export default Menu;
