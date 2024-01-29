import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { HomePage } from "../pages/HomePage";
import MovieDetail from "../pages/MovieDetail";

import NoMatch from "../pages/NoMatch";

function Router() {
  let location = useLocation();

  return (
    <>
      <Routes location={location}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/page/:pageId" element={<HomePage />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
