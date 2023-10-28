import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {
  const favouritesCtx = useContext(FavouritesContext);
  const itemIsFavourite = favouritesCtx.isFavourite(props.meetup.id);

  function toggleFavouriteStateHandler() {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(props.meetup.id);
      return;
    }
    favouritesCtx.addFavourite({
      id: props.meetup.id,
      title: props.meetup.title,
      description: props.meetup.description,
      image: props.meetup.image,
      address: props.meetup.address,
    });
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.meetup.image} alt={props.meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStateHandler}>{itemIsFavourite ? 'Remove from favourites' : 'Add to favourites'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
