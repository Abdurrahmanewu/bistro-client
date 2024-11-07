import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt="foods" />
        </figure>
        <p className="bg-slate-900 text-white px-5 absolute right-0 mr-5 mt-5">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="m-5 btn btn-outline bg-slate-100  border-0 border-b-4 border-amber-400 text-slate-400 text-xl">
              Order Food
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
