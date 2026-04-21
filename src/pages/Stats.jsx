import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Stats = () => {
  const { state } = useContext(AppContext);

  const totalActivities = state.activities.length;

  const goalAchievedCount = state.activities.filter(
    (a) => a.goalachieved === true
  ).length;

  const goalNotAchieved = state.activities.filter(
    (a) => !a.goalachieved
  ).length;

  useEffect(() => {
    window.appState = {
      totalActivities,
      goalAchievedCount,
      goalNotAchieved
    };
  }, [state]);

  return (
    <div>
      <div data-testid="total-activities">{totalActivities}</div>
      <div data-testid="goal-achieved">{goalAchievedCount}</div>
      <div data-testid="goal-not-achieved">{goalNotAchieved}</div>
    </div>
  );
};

export default Stats;