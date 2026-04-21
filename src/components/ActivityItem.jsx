const ActivityItem = ({ activity }) => {
  return (
    <div data-testid="activity-item">
      <h3>{activity.name || "Unknown"}</h3>

      <p>Steps: {activity.steps}</p>
      <p>Calories: {activity.caloriesburned}</p>
      <p>Workout Minutes: {activity.workoutminutes}</p>

      <p>
        Goal Achieved:{" "}
        {activity.goalachieved ? "Yes" : "No"}
      </p>

      <p>Date: {activity.date || "No Date"}</p>
    </div>
  );
};

export default ActivityItem;