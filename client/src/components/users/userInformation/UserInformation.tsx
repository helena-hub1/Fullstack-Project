import { Box, Paper, Typography, Button, Divider, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./UserInformation.css";
import { RootState } from "../../../redux/store";

export default function UserInformation() {
  // state
  const userData = useSelector(
    (state: RootState) => state.userDetail.userDetail
  );
  const isLoggedInd = localStorage.getItem("userLoggedInd");

  if (isLoggedInd) {
    return (
      <div className="user-detail-container">
        <Paper
          elevation={3}
          sx={{
            width: 300,
            height: 300,
            mt: 10,
            mb: 50,
            backgroundColor: "#eeeeee",
          }}
        >
          <div className="profile-container">
            <Typography sx={{ textAlign: "center", mt: 3 }}>
              {userData.firstName}'s profile
            </Typography>
            <Divider></Divider>
            <div className="typography-container">
              <Typography className="text-container" component="div">
                <Box component="span" className="box">
                  First Name:
                </Box>
                <Box className="box2">{userData.firstName}</Box>
              </Typography>
              <Typography component="div" className="text-container">
                <Box component="span" className="box">
                  Last Name:
                </Box>
                <Box className="box2">{userData.lastName}</Box>
              </Typography>
              <Typography component="div" className="text-container">
                <Box component="span" className="box">
                  Email:
                </Box>
                <Box className="box2">{userData.email}</Box>
              </Typography>
              <Button
                component={Link}
                to="/update"
                type="submit"
                sx={{
                  width: "250px",
                  height: "40px",
                  mt: 3,
                  color: "#fff",
                  backgroundColor: "#000",
                }}
                variant="outlined"
              >
                update detail
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
  return (
    <Card
      className="order-login"
      sx={{
        width: 600,
        height: 100,
        my: 10,
        backgroundColor: "#eeeeee",
        mb: 50,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "monospace",
          fontSize: "20px",
        }}
      >
        Access is denied! Please log in first.
      </Typography>
    </Card>
  );
}
