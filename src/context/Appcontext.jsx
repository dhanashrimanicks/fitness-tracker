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

        if (!tokenRes || !tokenRes.token) {
          console.error("Token failed");
          dispatch({ type: "SET_DATA", payload: [] });
          return;
        }

        const dataRes = await getData(tokenRes.token);

        // 🔥 SAFE HANDLING (NO CRASH)
        const cleanData = Array.isArray(dataRes?.data)
          ? dataRes.data
          : [];

        dispatch({
          type: "SET_DATA",
          payload: cleanData
        });

      } catch (err) {
        console.error("FETCH ERROR:", err);
        dispatch({ type: "SET_DATA", payload: [] });
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