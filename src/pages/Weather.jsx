import React from "react";
import requets from "../components/requets";
import { Grid, TextField } from "@mui/material";
function Weather() {
  const req = requets.Requests;
  const ImportantCisty = ["Shiraz", "Tehran", "isfahan"];

  const [impCity, setImpCity] = React.useState([]);
  const [city, setCity] = React.useState({
    name: "",
    temp: "",
    status: "",
    cloudSpeed: "",
  });

  return (
    <div>
      <TextField label="شهر خود را انتخاب کنید" />
      <Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
}

export default Weather;
