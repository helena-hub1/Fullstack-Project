import React from "react";
import { Avatar, Box, Paper, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./UserInformation.css";
export default function userInformation() {
  const userData =
    localStorage.getItem("userDetail") !== null
      ? JSON.parse(localStorage.getItem("userDetail")!)
      : null;
  // console.log(userData.user, "user");
  return (
    <div className="user-detail-container">
      <Paper
        elevation={3}
        sx={{ width: 300, height: 500, mt: 4, mb: 4, background: "aliceblue" }}
      >
        <div className="profile-container">
          <Avatar
            alt="login-avatar"
            src={userData.user.image}
            sx={{
              mt: 3,
              width: 80,
              height: 80,
              alignItems: "center",
            }}
          />
          <div className="typography-container">
            <Typography className="text-container" component="div">
              <Box component="span" className="box">
                Name:
              </Box>
              <Box className="box2">{userData.user.name}</Box>
            </Typography>

            <Typography component="div" className="text-container">
              <Box component="span" className="box">
                Gender:
              </Box>
              <Box className="box2">{userData.user.gender}</Box>
            </Typography>
            <Typography component="div" className="text-container">
              <Box component="span" className="box">
                City:
              </Box>
              <Box className="box2">{userData.user.city}</Box>
            </Typography>
            <Typography component="div" className="text-container">
              <Box component="span" className="box">
                State:
              </Box>
              <Box className="box2">{userData.user.state}</Box>
            </Typography>
            <Typography component="div" className="text-container">
              <Box component="span" className="box">
                Country:
              </Box>
              <Box className="box2">{userData.user.country}</Box>
            </Typography>
            <Typography component="div" className="text-container">
              <Box component="span" className="box">
                Postcode:
              </Box>
              <Box className="box2">{userData.user.postcode}</Box>
            </Typography>
            <Typography component="div" className="text-container">
              <Box component="span" className="box">
                dob:
              </Box>
              <Box className="box2">{userData.user.dob}</Box>
            </Typography>

            <Typography component="div" className="text-container">
              <Box component="span" className="box">
                Email:
              </Box>
              <Box className="box2">{userData.user.email}</Box>
            </Typography>
            <Button component={Link} to="/update">
              update detail
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}
