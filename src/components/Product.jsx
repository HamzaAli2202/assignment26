import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Rating,
  Button,
  Badge,
  TextField,
} from "@mui/material";
import axios from "axios";

export const Product = () => {
  const [data, setData] = useState([]);
  const [datacopy, setDatacopy] = useState([]);
  const [cate, setCate] = useState([]);
  const [sendcate, setSendcate] = useState([]);
  const [text, setText] = useState("");

  // console.log(sendcate);

  const getApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    const catApi = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );

    setData(result.data);
    setDatacopy(result.data);
    setCate(catApi.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    const filt = datacopy.filter((item) => item.category === sendcate);
    setData(filt);
  }, [sendcate]);

  useEffect(() => {
    const filt = datacopy.filter((item) =>
      item.category.toUpperCase().includes(text.toUpperCase())
    );
    setData(filt);
  }, [text]);

  const handleDelete = (item) => {
    console.log("delete====", item);
    const result = data.filter((i) => i !== item);
    setData(result);
  };

  return (
    <Grid sx={{ marginTop: 2 }} container spacing={2}>
      {cate.map((item) => (
        <Grid item xs={3}>
          <Button
            onClick={() => setSendcate(item)}
            variant="contained"
            fullWidth
            color="info"
          >
            {item}
          </Button>
        </Grid>
      ))}
      <Grid item xs={8}>
        <TextField
          onChange={(e) => setText(e.target.value)}
          variant="outlined"
          fullWidth
          label="Serch Here"
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ height: 55 }}
        >
          submit
        </Button>
      </Grid>
      {data.map((item) => (
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
              <Button sx={{ margin: 2 }} variant="contained" color="warning">
                add
              </Button>
              <Button
                onClick={() => handleDelete(item)}
                variant="contained"
                color="secondary"
              >
                delete
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
