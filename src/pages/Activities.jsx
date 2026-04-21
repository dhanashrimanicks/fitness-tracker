import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ActivityItem from "../components/ActivityItem";

const Activities = () => {
  const { state } = useContext(AppContext);

  const validActivities = (state.activities || []).filter(
    (a) =>
      a &&
      (a.steps || 0) > 0 &&
      (a.caloriesburned || a.caloriesBurned || 0) > 0 &&
      (a.workoutminutes || a.workoutMinutes || 0) > 0 &&
      typeof (a.goalachieved ?? a.goalAchieved) === "boolean"
  );

  return (
    <div>
      <h2>Activities</h2>

      {validActivities.length === 0 ? (
        <p>No Activities Found</p>
      ) : (
        validActivities.map((activity) => (
          <ActivityItem
            key={activity.activityid}
            activity={activity}
          />
        ))
      )}
    </div>
  );
};

export default Activities;