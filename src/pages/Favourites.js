import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favourites-context";

function FavouritesPage() {
  const favouritesCtx = useContext(FavouritesContext);
console.log(favouritesCtx.favourites)
  let content;
  if (favouritesCtx.totalFavourites === 0) {
    content = <p>There is no favourites, you know you can add some!</p>;
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
