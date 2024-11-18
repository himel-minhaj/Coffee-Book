import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

const CoffeeCards = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const coffeesData = useLoaderData();
  const [coffees, setCoffees] = useState([]);
  console.log(category);
  console.log(coffeesData);

  useEffect(() => {
    if (category) {
      const filterCoffeesByCategorys = [...coffeesData].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filterCoffeesByCategorys);
    } else {
      setCoffees(coffeesData.slice(0, 6));
    }
  }, [category, coffeesData]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        {/* <h1>cards...{category}</h1>
      <h1>cards...{coffeeData.length}</h1> */}
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
      <button className="btn btn-warning" onClick={() => navigate("/coffees")}>
        View All
      </button>
    </>
  );
};

export default CoffeeCards;
