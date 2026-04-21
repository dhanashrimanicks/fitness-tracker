import { createContext, useReducer, useEffect } from "react";
import { AppReducer, initialState } from "../reducer/AppReducer";
import { getToken, getData } from "../services/api";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 🔹 STEP 1: Get token
        const tokenRes = await getToken();

        if (!tokenRes || !tokenRes.token) {
          console.error("Token error:", tokenRes);
          return;
        }

        // 🔹 STEP 2: Fetch data
        const dataRes = await getData(tokenRes.token);

        console.log("API DATA:", dataRes); // DEBUG

        // 🔹 STEP 3: Handle invalid data safely
        const cleanData = (dataRes.data || []).filter((item) => item);

        // 🔹 STEP 4: Store in reducer
        dispatch({
          type: "SET_DATA",
          payload: cleanData
        });

      } catch (error) {
        console.error("FETCH ERROR:", error);
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