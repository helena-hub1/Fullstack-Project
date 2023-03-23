import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import "./LatestModels.css";
import latest1 from "../../assets/latest1.jpg";
import latest2 from "../../assets/latest2.jpg";
import latest3 from "../../assets/latest3.jpg";
import latest4 from "../../assets/latest4.jpg";
import latest6 from "../../assets/latest6.jpg";

export default function LatestModels() {
  return (
    <div className="latest-models">
      <Typography variant="h6" sx={{ fontSize: "20px", mt: 5, ml: 3 }}>
        Latest models in stock
      </Typography>
      <div className="card-container">
        <div className="card-one">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={latest1}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom textAlign="center" component="div">
                  Toyota
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="card-two">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={latest4}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom component="div" textAlign="center">
                  Mercedes-Benz
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="card-three">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={latest2}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom component="div" textAlign="center">
                  Mercedes-SUV's
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="card-three">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={latest3}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom textAlign="center" component="div">
                  Mercedes-AMG
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="card-three">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={latest6}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom textAlign="center" component="div">
                  Audi Sport
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
}
