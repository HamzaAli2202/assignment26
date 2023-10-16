import React from "react";
import { Grid, Card, CardContent, Button, TextField } from "@mui/material";

export const Contact = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent></CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
