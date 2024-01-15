import React, { useState, useEffect } from "react";
import "./App.css";

const API = {
  // Example: https://api.themoviedb.org/3/movie/550?api_key=04db60b988f9f9b15d783d86a593a392
  key: "04db60b988f9f9b15d783d86a593a392",
  base: "https://api.themoviedb.org/3/",
  token:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGRiNjBiOTg4ZjlmOWIxNWQ3ODNkODZhNTkzYTM5MiIsInN1YiI6IjY1NzZkZDU2NGJmYTU0MDBjNDA5YzEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LczGGFStgjMCazXyYf0fo32UtLXgCo29mfESeSxoQ5M",
};

// TODO:  Components, what and what not
// API Document: https://developer.themoviedb.org/reference/intro/getting-started
// GITHUB Repo: https://github.com/blueleorio/movie-app

function App() {
  return (
    <>
      <p>Hello World!</p>
    </>
  );
}

export default App;
