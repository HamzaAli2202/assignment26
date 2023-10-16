import React, { useState } from "react";
import { Grid, TextField, Card, CardContent } from "@mui/material";

export const Assignment26 = () => {
  const [reve, setReve] = useState("");
  const [capital, setCapital] = useState("");
  const [square, setSquare] = useState("0");

  const reversevalue = (reve) => {
    return reve.split("").reverse().join("");
  };
  const convertCapital = (capital) => {
    return capital.toUpperCase();
  };

  const convertoSquare = (square) => {
    return square ** 2;
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <div className="child">
          <h1>Assignment-03</h1>
          <Grid container spacing={3}>
            <Grid item xs={1}></Grid>

            <Grid item xs={6}>
              <TextField
                onChange={(e) => setReve(e.target.value)}
                fullWidth
                variant="outlined"
                label=""
              />
            </Grid>
            <Grid item xs={4}>
              <Card
                sx={{
                  height: 55,
                  bgcolor: "brown",
                  textAlign: "center",
                  fontSize: 25,
                  color: "white",
                }}
              >
                <CardContent>{reversevalue(reve)}</CardContent>
              </Card>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={6}>
              <TextField
                onChange={(e) => setCapital(e.target.value)}
                fullWidth
                variant="outlined"
                label=""
              />
            </Grid>
            <Grid item xs={4}>
              <Card
                sx={{
                  height: 55,
                  bgcolor: "brown",
                  textAlign: "center",
                  fontSize: 25,
                  color: "white",
                }}
              >
                <CardContent>{convertCapital(capital)}</CardContent>
              </Card>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={6}>
              <TextField
                onChange={(e) => setSquare(e.target.value)}
                fullWidth
                variant="outlined"
                label=""
              />
            </Grid>
            <Grid item xs={4}>
              <Card
                sx={{
                  height: 55,
                  bgcolor: "brown",
                  textAlign: "center",
                  fontSize: 25,
                  color: "white",
                }}
              >
                <CardContent>{convertoSquare(square)}</CardContent>
              </Card>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};
