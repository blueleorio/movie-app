import React, { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import { useAuth } from "../contexts/AuthContext";

export default function GenresChips() {
  const { movies, selectedGenreId, setSelectedGenreId } = useAuth();

  const [genre, setGenre] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenre = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGRiNjBiOTg4ZjlmOWIxNWQ3ODNkODZhNTkzYTM5MiIsInN1YiI6IjY1NzZkZDU2NGJmYTU0MDBjNDA5YzEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LczGGFStgjMCazXyYf0fo32UtLXgCo29mfESeSxoQ5M",
        },
      };

      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?language=en",
          options
        );
        const data = await response.json();

        setGenre(data.genres);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchGenre();
  }, []);

  const handleChipClick = (GenreId) => {
    // Toggle selection on chip click
    if (GenreId === selectedGenreId) {
      setSelectedGenreId(null); // Deselect if already selected
    } else {
      setSelectedGenreId(GenreId);
    }
  };

  return (
    <Grid container spacing={1} sx={{ justifyContent: "center" }}>
      {genre.map((genre) => (
        <Grid item key={genre.id}>
          <Chip
            label={genre.name}
            component="button"
            variant={selectedGenreId === genre.id ? "filled" : "outlined"}
            clickable
            onClick={() => handleChipClick(genre.id)}
          />
        </Grid>
      ))}
    </Grid>
  );
}
