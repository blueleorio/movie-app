import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import GenresChips from "./GenresChip";
const CustomAccordion = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleSearch = () => {
    // Handle search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<SortIcon />}>
        <Typography variant="h6" align="center">
          OPTION
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flex: 1 }} // Set flex to 1 to fill the width
        />
        <IconButton color="primary" onClick={handleSearch}>
          <SearchIcon />
        </IconButton>

        <Typography variant="h5" align="center" gutterBottom>
          Genres
        </Typography>
        <GenresChips />
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
