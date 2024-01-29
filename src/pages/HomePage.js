import React from "react";
import Spinner from "../components/Spinner";
import Grid from "@mui/material/Grid";

import { useAuth } from "../contexts/AuthContext";
import MovieCard from "../components/MCard";
import CustomAccordion from "../components/CustomAccordion";
import Paging from "../components/Paging";

export const HomePage = () => {
  const { movies, isLoading } = useAuth();

  if (isLoading) return <Spinner />;

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={9}>
        <CustomAccordion />
      </Grid>
      <Grid item xs={12} md={9} justifyContent="center">
        <Paging />
      </Grid>
      <Grid item xs={12} md={9}>
        <Grid container spacing={3}>
          {movies.map((movie) => (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
