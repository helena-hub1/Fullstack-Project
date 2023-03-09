import Slider from "react-slick";

import "./Slick.css";
import "./Slick-Theme.css";
import "./ImageSlidder.css";
import slidecar2 from "../../assets/sliddercar2.jpg";
import slidecar3 from "../../assets/sliddercar3.jpg";
import slidecar4 from "../../assets/sliddercar4.jpg";
import slidecar6 from "../../assets/sliddercar6.jpg";
import slidecar8 from "../../assets/sliddercar8.jpg";
import slidecar10 from "../../assets/sliddercar10.jpg";
import slidecar11 from "../../assets/sliddercar11.jpg";
import slidecar12 from "../../assets/sliddercar12.jpg";
import slidecar13 from "../../assets/sliddercar13.jpg";
import slidecar14 from "../../assets/sliddercar14.jpg";
import slidecar15 from "../../assets/sliddercar15.jpg";
import slidecar16 from "../../assets/sliddercar16.jpg";

import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";

export default function ImageSlidder() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="image-slidder">
      <Typography variant="h6" sx={{ m: 3 }}>
        Customers frequently viewed
      </Typography>
      <Slider {...settings}>
        <div>
          <Card sx={{ maxWidth: 345, objectFit: "scale-down" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={slidecar2}
                alt="car"
              />
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345, ml: 2, objectFit: "scale-down" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={slidecar14}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345, ml: 2, objectFit: "scale-down" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={slidecar4}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345, ml: 2, objectFit: "scale-down" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={slidecar16}
                alt="car"
              />
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345, ml: 2, objectFit: "scale-down" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={slidecar6}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345, ml: 2, objectFit: "scale-down" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={slidecar15}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345, ml: 2, objectFit: "scale-down" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={slidecar10}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345, ml: 2, objectFit: "scale-down" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={slidecar8}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345, ml: 2, objectFit: "scale-down" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={slidecar11}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345, ml: 2, objectFit: "scale-down" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={slidecar12}
                alt="car"
              />
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345, ml: 2, objectFit: "scale-down" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={slidecar13}
                alt="car"
              />
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345, ml: 2, objectFit: "scale-down" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={slidecar3}
                alt="car"
              />
            </CardActionArea>
          </Card>
        </div>
      </Slider>
    </div>
  );
}
