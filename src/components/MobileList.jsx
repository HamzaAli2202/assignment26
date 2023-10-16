import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, TextField, Button } from "@mui/material";
import { MobileItem } from "./MobileItem";

export const MobileList = () => {
  const [data, setData] = useState([]);
  //   console.log("mobile======", data);

  const getMobile = async () => {
    const result = await axios.get("http://localhost:4101/mobile");
    setData(result.data);
  };

  useEffect(() => {
    getMobile();
  }, []);

  return (
    <Grid sx={{ marginTop: 2 }} container spacing={2}>
      <Grid item xs={8}>
        <TextField variant="outlined" label="Search Here" fullWidth />
      </Grid>
      <Grid item xs={4}>
        <Button
          sx={{ height: 55 }}
          variant="contained"
          color="warning"
          fullWidth
        >
          search
        </Button>
      </Grid>
      {data.map((item) => {
        return <MobileItem item={item} />;
      })}
    </Grid>
  );
};
