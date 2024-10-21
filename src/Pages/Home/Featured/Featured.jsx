import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-bgImg bg-fixed text-white">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="flex justify-center items-center py-8 px-16 space-x-4 bg-slate-400 bg-opacity-35 ">
        <img className="w-[600px] h-[400px]" src={featuredImg} alt="" />
        <div>
          <h2 className="text-2xl">
            March 20, 2023 <br /> WHERE CAN I GET SOME?
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="mt-5 btn btn-outline border-0 border-b-4 text-slate-950 text-xl">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
