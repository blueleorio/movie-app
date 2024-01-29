import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { Link } from "react-router-dom";
export default function MovieCard({ movie }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <CardActionArea LinkComponent={Link} to={`/movie/${movie.id}`}>
        <CardMedia
          component="img"
          style={{ width: "100%", height: "auto" }}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`Backdrop for ${movie.title}`}
        />
        <CardContent sx={{ minHeight: 160 }}>
          <Typography gutterBottom variant="h6" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Release Date:</strong> {movie.release_date} <br />
            <strong>Score:</strong> {movie.vote_average} <br />
            <strong>Total Vote:</strong> {movie.vote_count}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
