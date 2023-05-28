/* Application Provider */

import { createContext, useContext, useState } from "react";
const AppState = createContext({
  Code_ProjectBudget: null,
  setCode_ProjectBudget: () => {},
});

export const AppsProvider = ({ children }) => {
  const [Code_ProjectBudget, setCode_ProjectBudget] = useState(1);
  return (
    <AppState.Provider
      value={{
        Code_ProjectBudget,
        setCode_ProjectBudget,
      }}
    >
      {children}
    </AppState.Provider>
  );
};

export const useAppState = () => useContext(AppState);
