import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";

import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import Spinner from "../components/Spinner";

const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

function MovieDetail() {
  let auth = useAuth();
  console.log(auth.user);

  let { movieId } = useParams();
  console.log(movieId);
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGRiNjBiOTg4ZjlmOWIxNWQ3ODNkODZhNTkzYTM5MiIsInN1YiI6IjY1NzZkZDU2NGJmYTU0MDBjNDA5YzEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LczGGFStgjMCazXyYf0fo32UtLXgCo29mfESeSxoQ5M",
        },
      };

      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=videos&language=en-US`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setMovieDetail(response);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    };
    fetchData();
  }, [movieId]);

  if (loading) return <Spinner />;
  return (
    <>
      <Card elevation={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={`Backdrop for ${movieDetail.original_title}`}
                width="auto"
                image={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
              />
            </CardActionArea>
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={9}>
            <CardContent>
              <Typography variant="h3">
                <Link href={movieDetail.homepage} underline="hover">
                  <strong>{movieDetail.original_title}</strong>
                </Link>
              </Typography>
              <span className="tag release_date">
                ({movieDetail.release_date})
              </span>

              <div>
                <Typography
                  variant="h4"
                  className="tagline"
                  sx={{ textAlign: "center" }}
                >
                  {movieDetail.tagline}
                </Typography>
                <Typography variant="h5" style={{ marginTop: "8px" }}>
                  <strong>Overview</strong>
                </Typography>
                <Typography style={{ marginTop: "8px" }}>
                  {movieDetail.overview}
                </Typography>
                <Typography variant="h5" style={{ marginTop: "8px" }}>
                  <strong>Budget:</strong> {formatCurrency(movieDetail.budget)}
                </Typography>
                <Typography variant="h5" style={{ marginTop: "8px" }}>
                  <strong>Status:</strong> {movieDetail.status}
                </Typography>
              </div>
            </CardContent>
            <Divider variant="middle" style={{ marginBottom: "8px" }}>
              ID: {movieDetail.id}
            </Divider>
            <Grid container spacing={1} sx={{ justifyContent: "center" }}>
              {movieDetail.genres.map((genre) => (
                <Grid item key={genre.id}>
                  <Chip
                    label={genre.name}
                    component="button"
                    variant="outlined"
                    clickable
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default MovieDetail;
