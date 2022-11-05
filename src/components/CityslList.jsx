import React, { useContext } from "react";
import List from "@mui/material/List";
import { Box, Button, TextField, Typography } from "@mui/material";
import "../style/weather.css";
import theme from "../theme";
import {StateContext} from "../shared/context/states-context"
function CityList({ City, stateCity }) {
  const [stateItem, setStateItem] = useContext(StateContext);
  const [value, setValue] = React.useState({
    input: "",
    fCity: [...City],
  });
  const [visable, setVisable] = React.useState(false);
  function SearchCity() {
    const copyOfState = [...City];
    const main = copyOfState.filter((item) => {
      if (value.input.includes([" ", ""])) return item;
      if (item.name.includes(value.input)) return item;
    });
    setValue((prev) => ({ ...prev, fstate: main }));
  }
  function handleChanges(e) {
    setValue((prev) => ({ ...prev, input: e.target.value }));
  }
  function clicked(item){
    setStateItem({stateCity:stateCity, city:item.name})
    setValue((prev) => ({ ...prev, input: item.name }))
    setVisable(false)
  }
  React.useEffect(() => {
    SearchCity();
  }, [value.input, City]);
  return (
    <Box

      className="d-grid"
      sx={{ width: "100%", [theme.breakpoints.up("sm")]: { width: "50%", margin:"0 auto" } }}
    >
      <TextField
        dir="rtl"
        variant="outlined"
        label="شهر استان"
        focused
        fullWidth
        value={value.input}
        onChange={handleChanges}
        onClick={() => setVisable(!visable)}
        autoComplete={"off"}
      />

      {visable && (
        <List
          sx={{
            width: "100%",
            bgcolor: "#1746A2",
            position: "relative",
            overflow: "auto",
            maxHeight: 300,
            "& ul": { padding: 0 },
            color: "#fff",
            marginTop: "1.5%",
            borderRadius: "5px",
          }}
          subheader={
            <Typography
              align="center"
              variant="h4"
              fontWeight={700}
              color="#FF731D"
            >
              شهر استان {City[0].name} 
            </Typography>
          }
        >
          <li>
            {value.fstate.map((item, index) => (
              <ul key={index}>
                <Button
                  fullWidth
                  className="state-btn"
                  onClick={() => clicked(item)}
                >
                  {item.name}
                </Button>
              </ul>
            ))}
          </li>
        </List>
      )}
    </Box>
  );
}

export default CityList;
