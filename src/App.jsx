import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Users from "../src/user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route exact path="/" Component={Users}></Route>
        <Route path="/places/new" Component={NewPlace}></Route>
        <Route path="/:userId/places" exact Component={UserPlaces}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
