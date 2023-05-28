/* Application Context Provider */

import { createContext, useContext, useState } from "react";
import secureLocalStorage from "react-secure-storage";

const StateContext = createContext({
  userContext: {},
  userToken: null,
  UserTokenId: null,
  setUserContext: () => {},
  setUserToken: () => {},
  setUserTokenId: () => {},
});

export const ContextProvider = ({ children }) => {
  const [CurrentUser, _setCurrentUser] = useState(
    secureLocalStorage.getItem("Sess") || ""
  );
  const [UserToken, _setUserToken] = useState(
    secureLocalStorage.getItem("AuthToken") || ""
  );
  const [UserTokenId, _setUserTokenId] = useState(
    secureLocalStorage.getItem("AuthTokenId") || ""
  );

  const setUserToken = (token) => {
    if (token) {
      secureLocalStorage.setItem("AuthToken", token);
    } else {
      secureLocalStorage.removeItem("AuthToken");
    }
    _setUserToken(token);
  };

  const setUserTokenId = (tokenId) => {
    if (tokenId) {
      secureLocalStorage.setItem("AuthTokenId", tokenId);
    } else {
      secureLocalStorage.removeItem("AuthTokenId");
    }
    _setUserTokenId(tokenId);
  };

  const setCurrentUser = (userData) => {
    if (userData) {
      secureLocalStorage.setItem("Sess", userData);
    } else {
      secureLocalStorage.removeItem("Sess");
    }
    _setCurrentUser(userData);
  };

  return (
    <StateContext.Provider
      value={{
        CurrentUser,
        setCurrentUser,
        UserToken,
        setUserToken,
        UserTokenId,
        setUserTokenId,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
