import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { removeFavourite } from "../Utils/Index";

const Card = ({ coffee, handleRemove }) => {
  const { pathname } = useLocation();
  // console.log(pathname);
  // console.log(coffee);
  const { id, name, image, category, origin, type, rating, popularity } =
    coffee || {};

  return (
    <div className="card bg-base-100 w-96 shadow-2xl my-5 p-3 hover:scale-105 relative ">
      <Link to={`/coffee/${id}`}>
        <figure className="object-cover w-full h-48 overflow-hidden p-5 bg-slate-200 rounded-lg">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-2xl ">{name}</h2>
          <p>Category : {category}</p>
          <p>Type : {type}</p>
          <p>Origin : {origin}</p>
          <p>Rating : {rating}</p>
          <p>Popularity : {popularity}</p>
        </div>
      </Link>
      {pathname == "/dashboard" && (
        <div
          onClick={() => handleRemove(id)}
          className="absolute p-3 bg-warning rounded-full -top-5 -right-5"
        >
          <FaTrashAlt size={20}></FaTrashAlt>
        </div>
      )}
    </div>
  );
};

export default Card;
