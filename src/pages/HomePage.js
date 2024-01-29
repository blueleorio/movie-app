import React from "react";
import Carousel from "react-material-ui-carousel";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useAuth } from "../contexts/AuthContext";
import MovieCard from "../components/MCard";
import CustomAccordion from "../components/CustomAccordion";
import Paging from "../components/Paging";
import Spinner from "../components/Spinner";

export const HomePage = () => {
  const { movies, isLoading, upcomingMovies } = useAuth();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  if (isLoading) return <Spinner />;

  // Configure the number of items to display in each slide for upcoming movies
  const upcomingItemsPerPage = isMobile ? 1 : 3;

  // Calculate the number of slides needed for upcoming movies
  const totalUpcomingSlides = Math.ceil(
    upcomingMovies.length / upcomingItemsPerPage
  );

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={9}>
        <CustomAccordion />
      </Grid>
      <Grid item xs={12} md={9}>
        <Typography variant="h2" align="center" gutterBottom fontWeight="bold">
          Upcoming Movies
        </Typography>
        <Carousel
          animation="fade"
          stopAutoPlayOnHover="true"
          interval="3000"
          duration="1000"
          navButtonsAlwaysVisible="true"
          indicators={false}
          items={isMobile ? 1 : 3}
        >
          {[...Array(totalUpcomingSlides)].map((_, index) => (
            <Grid
              container
              spacing={5}
              key={index}
              justifyContent="center"
              alignItems="center"
            >
              {upcomingMovies
                .slice(
                  index * upcomingItemsPerPage,
                  (index + 1) * upcomingItemsPerPage
                )
                .map((movie) => (
                  <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                    <MovieCard movie={movie} />
                  </Grid>
                ))}
            </Grid>
          ))}
        </Carousel>
      </Grid>
      <Typography variant="h2" align="center" gutterBottom fontWeight="bold">
        Popular Movies
      </Typography>

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
