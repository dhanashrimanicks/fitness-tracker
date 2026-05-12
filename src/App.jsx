<<<<<<< HEAD
import AppRouter from "./router/AppRouter";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
=======
import React from "react";
import AppRouter from "./routers/AppRouter.jsx";
import { ActivityProvider } from "./context/ActivityContext.jsx";
import "./App.css";

const App = () => {
  return (
    <ActivityProvider>
      <AppRouter />
    </ActivityProvider>
  );
};

export default App;
>>>>>>> e0020a7 (Initial commit)
