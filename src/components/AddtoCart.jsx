import React from "react";
import { Grid, Button, Card, CardContent, Badge, Rating } from "@mui/material";

const AddtoCart = ({ item }) => {
  const AddtoCart = (item) => {
    console.log("Cartitem===", item);
    sessionStorage.setItem()
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Card align="center">
          <CardContent>
            <Badge badgeContent={`$${item.price}`} color="error">
              <img height={"150px"} width={"150px"} src={item.image} alt="" />
            </Badge>
            <h3>{item.title.substr(0, 20) + "..."}</h3>
            <h4>{item.category}</h4>
            <p>{item.description.substr(0, 25) + "..."}</p>
            <h6>
              <Rating value={item.rating.rate} />
            </h6>

            <Button variant="contained" color="info">
              Buy
            </Button>
            <Button
              onClick={() => AddtoCart(item)}
              sx={{ margin: 2 }}
              variant="contained"
              color="warning"
            >
              add
            </Button>
            <Button variant="contained" color="secondary">
              delete
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AddtoCart;
