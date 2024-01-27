import React, { useEffect, useState } from "react";
import axios from "axios";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
// import MDetailCard from "../components/MDetailCard";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function MovieDetail() {
  // let location = useLocation();
  let auth = useAuth();
  console.log(auth.user);

  let { movieId } = useParams();
  console.log(movieId);
  const [loading, setLoading] = useState();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=videos&language=en-US`,
          {
            headers: {
              Accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGRiNjBiOTg4ZjlmOWIxNWQ3ODNkODZhNTkzYTM5MiIsInN1YiI6IjY1NzZkZDU2NGJmYTU0MDBjNDA5YzEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LczGGFStgjMCazXyYf0fo32UtLXgCo29mfESeSxoQ5M",
            },
          }
        );
        console.log(response.data);
        setMovieDetail(response.data);
        setLoading(false);
      } catch (e) {
        console.log("Error fetching movies:", e.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      <Typography variant="h5" mb={2}>
        MOVIE INFO
      </Typography>
      <Divider />
      <Typography variant="h5" mb={2}>
        {movieDetail.budget}
      </Typography>
      {/* <MDetailCard movieDetail={movieDetail} loading={isLoading} /> */}
    </>
  );
}

export default MovieDetail;
