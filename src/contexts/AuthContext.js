import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
const AuthContextType = {
  user: "",
  movies: [],
  isLoading: true,
  signin: null,
  signout: null,
  fetchMovies: null,
};
const AuthContext = createContext(AuthContextType);

export function AuthProvider({ children }) {
  let [user, setUser] = useState("");
  let [movies, setMovies] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  let signin = (newUser, callback) => {
    setUser(newUser);
    console.log(user);
    callback();
  };
  let signout = (callback) => {
    setUser(null);
    callback();
  };

  let fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGRiNjBiOTg4ZjlmOWIxNWQ3ODNkODZhNTkzYTM5MiIsInN1YiI6IjY1NzZkZDU2NGJmYTU0MDBjNDA5YzEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LczGGFStgjMCazXyYf0fo32UtLXgCo29mfESeSxoQ5M",
          },
        }
      );

      setMovies(response.data.results);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setIsLoading(false);
    }
  };

  // Fetch movies on component mount
  useEffect(() => {
    fetchMovies();
  }, []);

  let value = { user, movies, isLoading, signin, signout, fetchMovies };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
