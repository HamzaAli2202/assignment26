import React from "react";
import { Grid, Button } from "@mui/material";
import { NavData } from "./navData";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <Grid container spacing={2}>
      {NavData.map((item) => {
        return (
          <Grid item xs={item.xs}>
            <Link to={item.path}>
              <Button variant="contained" fullWidth>
                {item.label}
              </Button>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};
