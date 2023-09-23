import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./home/home";
import UserDetails from "./components/userDetails/userDetails";
import ProtectedRoute from "./protectedRoute";
import AboutMe from "./components/aboutMe/aboutMe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutMe" element={<AboutMe />}></Route>
        <Route
          path="/userDetails"
          element={
            <ProtectedRoute>
              <UserDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
