import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
function NotFoundCard() {
  return (
    <div>
      <Card sx={{ maxWidth: 345, backgroundColor:"#EF233C"}} dir="rtl">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/images/404-1.jpg"
            alt="green iguana"
            sx={{imageRendering:"-webkit-optimize-contrast", objectFit:"cover"}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color={"#fff"}>
              شهر شما پیدا نشد!
            </Typography>
            <Typography variant="body2" color="#fff">
              این اپلیکیشن شهر شما را پیدا نکرد
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default NotFoundCard;
