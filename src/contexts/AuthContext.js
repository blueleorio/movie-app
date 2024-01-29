import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const AuthContextType = {
  user: "",
  movies: [],
  isLoading: true,
  signin: null,
  signout: null,
  fetchMovies: null,
  selectedGenreId: null,
  setSelectedGenreId: null,
  currentPage: 1,
  setPage: null,
};

const AuthContext = createContext(AuthContextType);

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  let signin = (newUser, callback) => {
    setUser(newUser);
    callback();
  };

  let signout = (callback) => {
    setUser(null);
    callback();
  };

  let fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}`,
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

  useEffect(() => {
    fetchMovies();
  }, [currentPage]); // eslint-disable-line

  // Function to set the selected genre ID
  const handleSetSelectedGenreId = (genreId) => {
    setSelectedGenreId(genreId);
  };

  // Function to set the current page
  const handleSetPage = (newPage) => {
    setCurrentPage(newPage);
  };

  // Filter movies based on the selected genre ID
  const filteredMovies = selectedGenreId
    ? movies.filter((movie) => movie.genre_ids.includes(selectedGenreId))
    : movies;

  let value = {
    user,
    movies: filteredMovies, // Use the filteredMovies instead of the original movies
    isLoading,
    signin,
    signout,
    fetchMovies,
    selectedGenreId,
    setSelectedGenreId: handleSetSelectedGenreId,
    currentPage,
    setPage: handleSetPage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
