import * as React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { HomePage } from "../pages/HomePage";
import LogInModal from "../components/LogInModal";
import MovieDetail from "../pages/MovieDetail";
// import FavoritePage from "../pages/Favorite";
import NoMatch from "../pages/NoMatch";
import { useAuth } from "../contexts/AuthContext";
// import LogInForm from "../components/LogInForm";
import MovieDetails from "../pages/Test";

function Router() {
  let location = useLocation();
  let state = location.state;
  function RequireAuth({ children }) {
    let auth = useAuth();
    console.log("user status:", auth.user);
    if (!auth.user) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.

      return <Navigate to="/form" state={{ from: location }} replace />;
    }
    return children;
  }
  return (
    <>
      <Routes location={location}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/page/:pageId" element={<HomePage />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/form" element={<LogInModal />} />
          <Route path="*" element={<NoMatch />} />
          {/* <Route
            path="/favorite"
            element={
              <RequireAuth>
                <FavoritePage />
              </RequireAuth>
            }
          /> */}
        </Route>
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/form" element={<LogInModal />} />
        </Routes>
      )}
    </>
  );
}

export default Router;
