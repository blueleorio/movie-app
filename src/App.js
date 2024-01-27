import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
// import { AuthProvider } from "./contexts/AuthContext";
import ThemeProvider from "./contexts/ThemeProvider";
import { Test } from "./components/random";
// TODO:  Components, what and what not
// API Document: https://developer.themoviedb.org/reference/intro/getting-started
// GITHUB Repo: https://github.com/blueleorio/movie-app

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
  // return (
  //   <AuthProvider>
  //     <BrowserRouter>
  //       <ThemeProvider>
  //         <Router />
  //       </ThemeProvider>
  //     </BrowserRouter>
  //   </AuthProvider>
  // );
}

export default App;
