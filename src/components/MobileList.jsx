import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";
import { MobileItem } from "./MobileItem";

export const MobileList = () => {
  const [data, setData] = useState([]);
  const [datacopy, setDatacopy] = useState([]);

  const [text, setText] = useState("");
  //   console.log("mobile======", data);

  const getMobile = async () => {
    const result = await axios.get("http://localhost:4101/mobile");
    setData(result.data);
    setDatacopy(result.data);
  };

  useEffect(() => {
    getMobile();
  }, []);
  useEffect(() => {
    const filt = datacopy.filter((item) =>
      item.brand.toUpperCase().includes(text.toUpperCase())
    );
    setData(filt);
  }, [text]);

  return (
    <Card sx={{ bgcolor: "white" }}>
      <CardContent>
        <Grid sx={{ marginTop: 2 }} container spacing={2}>
          <Grid item xs={8}>
            <TextField
              onChange={(e) => setText(e.target.value)}
              variant="outlined"
              label="Search Here"
              fullWidth
            />
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
      </CardContent>
    </Card>
  );
};
