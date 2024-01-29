import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
// import MDetailCard from "../components/MDetailCard";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import Spinner from "../components/Spinner";

function MovieDetail() {
  // let location = useLocation();
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
            <CardMedia
              component="img"
              alt={`Backdrop for ${movieDetail.original_title}`}
              height="450"
              image={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={9}>
            <CardContent>
              <Typography variant="h4">
                <Link href={movieDetail.homepage} underline="hover">
                  {movieDetail.original_title}
                </Link>
                <br />
                <span className="tag release_date">
                  ({movieDetail.release_date})
                </span>
              </Typography>

              <div>
                <Typography variant="h4" className="tagline">
                  {movieDetail.tagline}
                </Typography>
                <Typography variant="h5">Overview</Typography>
                <Typography>{movieDetail.overview}</Typography>
              </div>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      {/* <MDetailCard movieDetail={movieDetail} loading={isLoading} /> */}
    </>
  );
}

export default MovieDetail;
