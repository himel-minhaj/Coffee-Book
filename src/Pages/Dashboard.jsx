import React, { useEffect, useState } from "react";
import Heading from "../Components/Heading";
import { getAllFavourites, removeFavourite } from "../Utils/Index";
import Card from "../Components/Card";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const favourites = getAllFavourites();
    setCoffees(favourites);
  }, []);
  const handleRemove = (id) => {
    removeFavourite(id);
    const favourites = getAllFavourites();
    setCoffees(favourites);
  };
  return (
    <>
      <Heading
        title={"Welcome to DashBoard"}
        subtitle={"manage coffees"}
      ></Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
        {/* <h1>cards...{category}</h1>
      <h1>cards...{coffeeData.length}</h1> */}
        {coffees.map((coffee) => (
          <Card
            key={coffee.id}
            coffee={coffee}
            handleRemove={handleRemove}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
