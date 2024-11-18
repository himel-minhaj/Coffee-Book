import { list } from "postcss";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import nutritionsPic from "../assets/istockphoto-1328838202-612x612.jpg";
import { addFavourite, getAllFavourites } from "../Utils/Index";
const CofeeDetails = () => {
  const coffeesData = useLoaderData();
  const { id } = useParams();
  const [coffee, setCoffee] = useState({});
  const [isFavourite, setIsFavourite] = useState(false);
  useEffect(() => {
    const singleData = [...coffeesData].find(
      (coffee) => coffee.id === parseInt(id)
    );
    setCoffee(singleData);
    const favourites = getAllFavourites();
    const isExist = favourites.find((item) => item.id == singleData.id);
    if (isExist) {
      setIsFavourite(true);
    }
  }, [coffeesData, id]);
  const {
    name,
    image,
    category,
    origin,
    type,
    rating,
    popularity,
    description,
    making_process,
    ingredients,
    nutritions_info,
  } = coffee;
  const handleFavourite = (coffee) => {
    addFavourite(coffee);
    setIsFavourite(true);
  };
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-thin mb-6"> {description}</h1>
      <div className="w-full h-full md:h-[500px] object-cover overflow-hidden rounded-xl shadow-xl">
        <img className="w-full h-full" src={image} alt="" />
      </div>
      <div className=" my-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl">{name}</h1>
            <p>{popularity}</p>
            <p>{rating}</p>
          </div>
          <div>
            <button
              disabled={isFavourite}
              onClick={() => handleFavourite(coffee)}
              className="btn btn-warning"
            >
              Add Favourite
            </button>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl">making_process:</h2>
          <p>{making_process}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-2xl">ingredients :</h1>
          <ul>{ingredients && ingredients.map((i) => <li key={i}>{i}</li>)}</ul>
          <h1 className="font-bold text-2xl">nutritions_info :</h1>
          <ul>
            {nutritions_info &&
              Object.keys(nutritions_info).map((n) => <li key={n}>{n}</li>)}
          </ul>
        </div>
        <div className="">
          <img src={nutritionsPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CofeeDetails;
