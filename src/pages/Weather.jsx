import React, { useContext } from "react";
import requets from "../components/requets";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import StatesList from "../components/StatesList";
import theme from "../theme";
import CityList from "../components/CityslList";

import { StateContext } from "../shared/context/states-context";
import NotFoundCard from "../components/NotFoundCard";

function Weather() {
  const req = requets.Requests;
  // const ImportantCisty = ["Shiraz", "Tehran", "isfahan"];

  const [stateItem, setStateItem] = useContext(StateContext);
  const [visably, setVisably] = useState(false);
  const [iranCt, setIranCt] = useState({
    states: [],
    city: [],
  });

  useEffect(() => {
    req
      .getAllStates()
      .then((data) => {
        setIranCt((prev) => ({ ...prev, states: data }));
      })
      .catch((error) => {
        console.log("error");
      });
    if (stateItem) {
      req
        .getAllCityOfStatesByName(stateItem.name)
        .then((res) => setIranCt((prev) => ({ ...prev, city: res.cities })))
        .catch((error) => {
          console.log("error");
        });
    }
  }, [stateItem]);

  return (
    <div>
      <Grid>
        <Grid item>
          <Container
            sx={{
              padding: theme.spacing(2),
              backgroundColor: "#E5E5E5",
              height: "100vh",
            }}
          >
            <Typography align="center">{stateItem?.stateCity}/{stateItem?.city}</Typography>
            <div className="d-flex" dir="rtl">
              {!visably && (
                <Typography
                  onClick={() => {
                    setVisably(!visably);
                  }}
                  variant="h3"
                  fontWeight={700}
                  textAlign="right"
                  color={"goldenrod"}
                  sx={{ cursor: "pointer" }}
                >
                  تغیر شهر
                </Typography>
              )}
              {visably && (
                <>
                  
                  <div className="d-grid" style={{width:"100%", gap:"25%"}}>
                    <Button
                    color="success"
                    sx={{width:"25%", margin:"0 auto" }}
                    onClick={() => setVisably(false)}
                    variant="contained"
                  >
                   نمایش
                  </Button>
                    <StatesList states={iranCt.states} />
                    {stateItem &&
                    <CityList City={iranCt.city} stateCity={stateItem.name}/>
                    }
                  </div>
                </>
              )}
            </div>

            <NotFoundCard/>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default Weather;
