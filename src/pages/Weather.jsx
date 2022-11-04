import React from "react";
import requets from "../components/requets";
import { Container, Grid} from "@mui/material";
import { useEffect, useState } from "react";
import StatesList from "../components/StatesList";
import theme from "../theme";
function Weather() {
  const req = requets.Requests;
  // const ImportantCisty = ["Shiraz", "Tehran", "isfahan"];

  const [iranCt, setIranCt] = useState({
    states:[],
    city:[]
  })
  // const [impCity, setImpCity] = useState([]);
  // const [city, setCity] = useState({
  //   name: "",
  //   temp: "",
  //   status: "",
  //   cloudSpeed: "",
  // });

  useEffect(() => {
    req.getAllStates()
    .then(data =>{
      setIranCt(prev=>({...prev,states:data}))
    }).catch(error => {
      console.log("error");
    })
  },[])
  
  return (
    <div>
      <Grid>
        <Grid item>
          <Container sx={{
            padding:theme.spacing(2),
            backgroundColor:"#E5E5E5",
            height:"100vh"
          }}>
            <StatesList states={iranCt.states} />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default Weather;
