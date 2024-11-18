import toast from "react-hot-toast";

// get all coffees from localstorage
const getAllFavourites = () => {
  const all = localStorage.getItem("favourites");
  console.log(all);
  if (all) {
    const FavouriteParse = JSON.parse(all);
    // console.log(FavouriteParse);
    return FavouriteParse;
  } else {
    console.log([]);
    return [];
  }
};
// add a coffee to lacalstorage
const addFavourite = (coffee) => {
  const favourites = getAllFavourites();
  const isExist = favourites.find((item) => item.id == coffee.id);
  if (isExist) {
    return toast.error("Coffee already exist");
  }
  // console.log(favourites);
  favourites.push(coffee);
  localStorage.setItem("favourites", JSON.stringify(favourites));
  toast.success("Successfully Added To Favourite!");
};
// remove a coffee from localstorage
const removeFavourite = (id) => {
  const favourites = getAllFavourites();
  const remaining = favourites.filter((coffee) => coffee.id !== id)
  localStorage.setItem("favourites", JSON.stringify(remaining));
  toast.success("Successfully Added To removed!");
}

export { addFavourite, getAllFavourites ,removeFavourite};
