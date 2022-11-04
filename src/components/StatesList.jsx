import React from "react";
import List from "@mui/material/List";
import { Box, Button, TextField, Typography } from "@mui/material";
import "../style/weather.css"
import theme from "../theme";
function StatesList({ states }) {
  const [value, setValue] = React.useState({
    input:"",
    fstate:[...states]
  })
  function SearchStates(){
    const copyOfState = [...states];
    const main = copyOfState.filter( item=>{
      if(value.input.includes([" ", ""])) return item
      if(item.name.includes(value.input)) return item
    } )
    setValue(prev =>({...prev, fstate:main}))
  }
  function handleChanges(e){
    setValue(prev=>({...prev,input:e.target.value}))
  }

  React.useEffect(()=>{
    SearchStates()
  },[value.input, states])
  return (
    <Box className="d-flex" sx={{width:"100%",[theme.breakpoints.up("sm")]:{width:"50%"}}}>
      <TextField dir="rtl" variant="outlined"  label="استان خود را انتخاب کنید" focused fullWidth value={value.input} onChange={handleChanges}/>
      <List
        sx={{
          width: "100%",
          bgcolor: "#1746A2",
          position: "relative",
          overflow: "auto",
          maxHeight: 300,
          "& ul": { padding: 0 },
          color: "#fff",
          marginTop:"1.5%",
          borderRadius:"5px"
        }}
        subheader={<Typography align="center" variant="h4" fontWeight={700} color="#FF731D">استان ها</Typography>}
      >
        <li>
          {value.fstate.map((item, index) => (
            <ul key={index}>
              <Button fullWidth className="state-btn" onClick={()=> setValue(prev =>({...prev, input:item.name}))}>{item.name}</Button>
            </ul>
          ))}
        </li>
      </List>
    </Box>
  );
}

export default StatesList;
