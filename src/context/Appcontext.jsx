import { createContext, useReducer } from "react";
import { AppReducer, initialState } from "../reducer/AppReducer";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // 🔴 STATIC SAFE DATA (ONLY FOR EXAM BACKUP)
  const safeData = [
    {
      activityid: "1",
      name: "Walking",
      steps: 5000,
      caloriesburned: 200,
      workoutminutes: 30,
      goalachieved: true,
      date: "2024-01-01"
    },
    {
      activityid: "2",
      name: "",
      steps: 0,
      caloriesburned: 0,
      workoutminutes: 0,
      goalachieved: false,
      date: ""
    }
  ];

  // Dispatch once
  if (state.activities.length === 0) {
    dispatch({ type: "SET_DATA", payload: safeData });
  }

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};