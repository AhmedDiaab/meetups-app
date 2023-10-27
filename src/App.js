import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" exact={true} element={<AllMeetupsPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
      </Routes>
    </div>
  );
}

export default App;
