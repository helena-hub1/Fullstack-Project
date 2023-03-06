import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";

import "./LatestModels2.css";
import audione from "../../assets/audione.jpg";
import auditwo from "../../assets/auditwo.jpg";
import audifour from "../../assets/audifour.jpg";
import audifive from "../../assets/audifive.jpg";

export default function LatestModels2() {
  return (
    <div className="latest-models2">
      <div className="latest-models">
        <Typography variant="h6" sx={{ fontSize: "20px", mt: 5, ml: 3 }}>
          New collections from Audi-Q8 vtron
        </Typography>
        <div className="card-container">
          <div className="card-two">
            <Card
              sx={{ maxWidth: 345, borderRadius: 10, objectFit: "scale-down" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={audione}
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
          </div>
          <div className="card-two">
            <Card
              sx={{ maxWidth: 345, borderRadius: 10, objectFit: "scale-down" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={auditwo}
                  alt="audi"
                />
              </CardActionArea>
            </Card>
          </div>
          {/* <div className="card-three">
            <Card
              sx={{ maxWidth: 345, borderRadius: 10, objectFit: "scale-down" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={audithree}
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
          </div> */}
          <div className="card-three">
            <Card
              sx={{ maxWidth: 345, borderRadius: 10, objectFit: "scale-down" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={audifour}
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
          </div>
          <div className="card-one">
            <Card
              sx={{ maxWidth: 345, borderRadius: 10, objectFit: "scale-down" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={audifive}
                  alt="audi"
                />
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
