import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Users from "../src/user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/context/authContext";
import { useCallback, useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let route;

  if (isLoggedIn) {
    route = (
      <Routes>
        <Route exact path="/" Component={Users}></Route>
        <Route
          path="/:userId/places"
          exact="true"
          Component={UserPlaces}
        ></Route>
        <Route path="/places/new" exact="true" Component={NewPlace}></Route>
        <Route path="/places/:placeId" Component={UpdatePlace}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  } else {
    route = (
      <Routes>
        <Route exact path="/" Component={Users}></Route>
        <Route
          path="/:userId/places"
          exact="true"
          Component={UserPlaces}
        ></Route>
        <Route exact path="/auth" Component={Auth}></Route>
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedIn }}>
      <BrowserRouter>
        <MainNavigation />
        {route}
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
