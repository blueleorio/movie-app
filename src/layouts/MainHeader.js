import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import Switch from "@mui/material/Switch";

import { ThemeContext } from "../contexts/ThemeProvider";

import { Link } from "react-router-dom";

function MainHeader() {
  const { isDarkTheme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            to="/page/1"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <GitHubIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/page/1"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ムービー
          </Typography>

          <Link
            to="/page/1"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <GitHubIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          </Link>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/page/1"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ムービー
          </Typography>

          {/* Switch Theme toggle */}
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={toggleTheme}>
              <Switch checked={isDarkTheme} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MainHeader;
