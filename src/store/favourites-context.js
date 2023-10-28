import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  isFavourite: (meetupId) => {},
});

function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavouriteHandler(favouriteMeetup) {
    // because we depend in a previous version of state
    // if we use this `prevUserFavouritesState.concat(favouriteMeetup)`
    // this will cause problem later because we add and depend on
    // previous state
    setUserFavourites((prevUserFavouritesState) =>
      prevUserFavouritesState.concat(favouriteMeetup)
    );
  }

  function removeFavouriteHandler(meetupId) {
    setUserFavourites((prevUserFavouritesState) =>
      prevUserFavouritesState.filter((meetup) => meetup.id !== meetupId)
    );
  }

  function itemIsFavouriteHandler(meetupId) {
    return userFavourites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    isFavourite: itemIsFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContextProvider;
