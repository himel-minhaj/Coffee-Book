import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";

const Coffees = () => {
  const loaderData = useLoaderData();
  const [coffee, setCoffee] = useState(loaderData);
  const handleSort = (sortBy) => {
    if (sortBy == "Popularity") {
      const sorted = [...loaderData].sort(
        (a, b) => b.popularity - a.popularity
      );
      setCoffee(sorted);
    } else if (sortBy == "Rating") {
      const sorted = [...loaderData].sort((a, b) => b.rating - a.rating);
      setCoffee(sorted);
    }
  };
  return (
    <>
      <div className="flex justify-between items-center my-5">
        <div>
          <h1 className="text-3xl font-thin">
            Sort Coffee&apos;s by Popularity & ratings-&gt;
          </h1>
        </div>
        <div className="space-x-3">
          <button
            onClick={() => handleSort("Popularity")}
            className="btn btn-warning"
          >
            Sort By Popularity
          </button>
          <button
            onClick={() => handleSort("Rating")}
            className="btn btn-warning"
          >
            Sort By Rating
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {coffee.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </>
  );
};

export default Coffees;
