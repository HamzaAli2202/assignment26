import React from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}></Grid>
      <Grid item xs={2}>
        <Link to="/">
          <Button variant="contained" fullWidth>
            Home
          </Button>
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Link to="/about">
          <Button variant="contained" fullWidth>
            About
          </Button>
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Link to="/cont">
          <Button variant="contained" fullWidth>
            contact
          </Button>
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Link to="/prod">
          <Button variant="contained" fullWidth>
            product
          </Button>
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Link to="/serv">
          <Button variant="contained" fullWidth>
            Service
          </Button>
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Link to="/tech">
          <Button variant="contained" fullWidth>
            technology
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};
