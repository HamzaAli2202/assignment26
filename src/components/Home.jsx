import React from "react";
import { Card, CardContent, Button, TextField, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}></Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Card
          sx={{
            bgcolor: "lightkhaki",
            textAlign: "center",
            boxShadow: "5px 5px 5px Gray",
          }}
        >
          <CardContent>
            <Grid container item spacing={2}>
              <Grid item xs={12}>
                <h1 style={{ fontStyle: "oblique" }}>LOGIN</h1>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  color="info"
                  label="username"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  color="info"
                  type="password"
                  label="password"
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <Link to="/prod">
                  <Button
                    sx={{ height: 55 }}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Login
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link to="cont">
                  <Button
                    sx={{ height: 55 }}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Singup
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={10}>
                <p style={{ color: "blue" }}>Don't Have Account ? Need Help</p>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={12}>
                {/* <img src="images/pngwing.com.png" alt="" /> */}
                Login with Google
              </Grid>
              <Grid item xs={12}>
                {/* <img src="images/facebook.png" alt="" /> */}
                Login with Facebook
              </Grid>
              <Grid item xs={12}>
                {/* <img src="images/insta.png" alt="" /> */}
                Login with Instagram
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};
