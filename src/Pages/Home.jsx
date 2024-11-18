import React from "react";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../Components/Categories";

const Home = () => {
  const CategoriesData = useLoaderData();
  // console.log(CategoriesData);
  return (
    <div>
      <h1>Home page</h1>
      {/* banner */}
      <Banner></Banner>
      {/* heading */}
      <Heading
        title={"Browse Coffees By Category"}
        subtitle={
          "Choose Your Desire Coffee Category To Brouse through specific coffees that fit your teste"
        }
      ></Heading>
      {/* catagory  */}
      <Categories categories={CategoriesData}></Categories>
      {/* dynamic nested components */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
