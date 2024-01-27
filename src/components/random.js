import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Grid from "@mui/material/Grid";

export const Test = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGRiNjBiOTg4ZjlmOWIxNWQ3ODNkODZhNTkzYTM5MiIsInN1YiI6IjY1NzZkZDU2NGJmYTU0MDBjNDA5YzEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LczGGFStgjMCazXyYf0fo32UtLXgCo29mfESeSxoQ5M",
  //     },
  //   };

  //   fetch(
  //     "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setIsLoading(false);
  //       setMovie(response.results);
  //     })
  //     .catch((err) => setIsLoading(false));
  // }, []);

  // !Todo: Challenge => Convert to async await in useEffect

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Simulate a 3-second delay
        await new Promise((resolve) => setTimeout(resolve, 3000));

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

        setIsLoading(false);
        setMovie(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <>
      {movie.map((movie) => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt="blank"
          />
          <div>Title: {movie.title} </div>
        </div>
      ))}
    </>
  );
};
