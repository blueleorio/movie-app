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

import { useAuth } from "../contexts/AuthContext";

const CustomAccordion = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { setQuery } = useAuth();

  const handleSearch = () => {
    // Handle search logic here
    console.log("Searching for:", searchTerm);
    setQuery(searchTerm);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<SortIcon />}>
        <Typography variant="h6" align="center">
          H I D E & S E E K
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          label="Search"
          variant="standard"
          value={searchTerm}
          style={{ flex: 1 }}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <IconButton color="primary" onClick={handleSearch}>
          <SearchIcon />
        </IconButton>

        <Typography variant="h5" align="center" gutterBottom>
          Filter:
        </Typography>
        <GenresChips />
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
