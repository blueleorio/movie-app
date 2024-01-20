import React, { useEffect, useState } from "react";

export const Test = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGRiNjBiOTg4ZjlmOWIxNWQ3ODNkODZhNTkzYTM5MiIsInN1YiI6IjY1NzZkZDU2NGJmYTU0MDBjNDA5YzEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LczGGFStgjMCazXyYf0fo32UtLXgCo29mfESeSxoQ5M",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setIsLoading(false);
        setMovie(response.results);
      })
      .catch((err) => setIsLoading(false));
  }, []);

  // !Todo: Challenge => Convert to async await in useEffect

  if (isLoading) return <p>Loading</p>;

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
