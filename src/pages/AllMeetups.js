import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-meetups-app-9066b-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (let key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setMeetups(meetups);
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
}

export default AllMeetupsPage;
