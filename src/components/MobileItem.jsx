import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const MobileItem = ({ item }) => {
  return (
    <Card>
      <CardContent>
        <Grid item xs={4}>
          <img src={item.img} alt="" />
          <h3>{item.brand}</h3>
          <h4>
            {item.model}-{item.storage}
          </h4>
          <Button variant="text" color="error">
            {item.price}
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};
