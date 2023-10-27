import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default MainNavigation;
