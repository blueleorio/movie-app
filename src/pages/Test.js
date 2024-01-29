import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useAuth } from "../contexts/AuthContext";

const MovieDetails = () => {
  const { movies } = useAuth();

  return (
    <Paper>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <img
            src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/qhb1qOilapbapxWQn9jtRCMwXJF.jpg"
            alt="Wonka"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={9}>
          <Typography variant="h4">
            <a href="/movie/787699-wonka">Wonka</a>
            <span className="tag release_date">(2023)</span>
          </Typography>
          <div>
            <span className="certification">PG</span>
            <span className="release">12/08/2023 (GB)</span>
            <span>
              <a href="/genre/35-comedy/movie">Comedy</a>,&nbsp;
              <a href="/genre/10751-family/movie">Family</a>,&nbsp;
              <a href="/genre/14-fantasy/movie">Fantasy</a>
            </span>
            <span className="runtime">1h 57m</span>
          </div>
          <div>
            <Button color="primary">Expand</Button>
          </div>
          <div>
            <Typography variant="h5" className="tagline">
              Every good thing in this world started with a dream.
            </Typography>
            <Typography variant="h5">Overview</Typography>
            <Typography>
              Willy Wonka – chock-full of ideas and determined to change the
              world one delectable bite at a time – is proof that the best
              things in life begin with a dream, and if you’re lucky enough to
              meet Willy Wonka, anything is possible.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MovieDetails;
