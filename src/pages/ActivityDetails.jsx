import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ActivityDetails = () => {
  const { id } = useParams();
  const { state } = useContext(AppContext);

  const activity = state.activities.find(
    (a) => a.activityid === id
  );

  if (!activity) return <p>Not Found</p>;

  return (
    <div>
      <h2>{activity.name}</h2>
      <p>{activity.steps}</p>
    </div>
  );
};

export default ActivityDetails;