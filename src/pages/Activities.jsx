import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ActivityItem from "../components/ActivityItem";

const Activities = () => {
  const { state } = useContext(AppContext);

  // ✅ FILTER VALID ACTIVITIES (MANDATORY)
  const validActivities = state.activities.filter(
    (a) =>
      a &&
      a.steps > 0 &&
      a.caloriesburned > 0 &&
      a.workoutminutes > 0 &&
      typeof a.goalachieved === "boolean"
  );

  return (
    <div>
      <h2>Activities</h2>

      {validActivities.map((activity) => (
        <ActivityItem
          key={activity.activityid}
          activity={activity}
        />
      ))}
    </div>
  );
};

export default Activities;