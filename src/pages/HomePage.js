import React from "react";
import Spinner from "../components/Spinner";
import Grid from "@mui/material/Grid";
import { useAuth } from "../contexts/AuthContext";

export const HomePage = () => {
  const { movies, isLoading } = useAuth();

  if (isLoading) return <Spinner />;

  return (
    <Grid container spacing={3}>
      {movies.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`Backdrop for ${movie.title}`}
              style={{ width: "100%", height: "auto" }}
            />
            <div>{movie.title}</div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

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

// useEffect(() => {
//   const fetchMovies = async () => {
//     try {
//       // Simulate a 3-second delay
//       await new Promise((resolve) => setTimeout(resolve, 3000));

//       const response = await axios.get(
//         "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
//         {
//           headers: {
//             Accept: "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGRiNjBiOTg4ZjlmOWIxNWQ3ODNkODZhNTkzYTM5MiIsInN1YiI6IjY1NzZkZDU2NGJmYTU0MDBjNDA5YzEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LczGGFStgjMCazXyYf0fo32UtLXgCo29mfESeSxoQ5M",
//           },
//         }
//       );

//       setIsLoading(false);
//       setMovie(response.data.results);
//     } catch (error) {
//       console.error("Error fetching movies:", error);
//       setIsLoading(false);
//     }
//   };

//   fetchMovies();
// }, []);
