import { createContext, useReducer, useEffect } from "react";
import { AppReducer, initialState } from "../reducer/AppReducer";
import { getToken, getData } from "../services/api";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenRes = await getToken();
        const dataRes = await getData(tokenRes.token);

        // CLEAN INVALID DATA
        const cleanData = dataRes.data.filter(
          (item) =>
            item.activityid &&
            item.name &&
            item.steps >= 0 &&
            item.caloriesburned >= 0
        );

        dispatch({ type: "SET_DATA", payload: cleanData });
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};