const ActivityItem = ({ activity }) => {
  return (
    <div data-testid="activity-item">
      <h3>{activity.name}</h3>
      <p>Steps: {activity.steps}</p>
      <p>Calories: {activity.caloriesburned}</p>
    </div>
  );
};

export default ActivityItem;