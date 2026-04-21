import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ActivityItem from "../components/ActivityItem";

const Activities = () => {
  const { state } = useContext(AppContext);

  return (
    <div>
      <h2>Activities</h2>
      {state.activities.map((activity) => (
        <ActivityItem key={activity.activityid} activity={activity} />
      ))}
    </div>
  );
};

export default Activities;