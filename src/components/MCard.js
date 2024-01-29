import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { Link } from "react-router-dom";
export default function MovieCard({ movie }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea LinkComponent={Link} to={`/movie/${movie.id}`}>
        <CardMedia
          component="img"
          style={{ width: "100%", height: "auto" }}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`Backdrop for ${movie.title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
