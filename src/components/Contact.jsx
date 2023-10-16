import React from "react";
import { Grid, Card, CardContent, Button, TextField } from "@mui/material";

export const Contact = () => {
  return (
    <Card sx={{ height: "100vh", bgcolor: "lightseagreen" }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                marginTop: 2,
                bgcolor: "lightkhaki",
                boxShadow: "5px 5px 5px black",
              }}
            >
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField placeholder="Enter Username" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField placeholder="Enter Email" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField placeholder="Enter Password" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField placeholder="Confirm Password" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      sx={{ height: 55 }}
                      variant="contained"
                      fullWidth
                      color="info"
                    >
                      Create Account
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <p>
                      <b>
                        By Clicking join Now. You agree to User Agreement
                        Privacy Policy and Terms Condition.
                      </b>
                    </p>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
