import React, { useEffect } from "react";
import { Avatar, Box, Paper, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./UserInformation.css";
import getUserDetail from "../../../redux/thunks/user";
import { AppDispatch, RootState } from "../../../redux/store";

export default function UserInformation() {
  // state
  const userData = useSelector(
    (state: RootState) => state.userDetail.userDetail
  );
  console.log(userData, "from user information page");
  return (
    <div className="user-detail-container">
      <Paper
        elevation={3}
        sx={{
          width: 300,
          height: 300,
          mt: 4,
          mb: 4,
          backgroundColor: "aliceblue",
        }}
      >
        <div className="profile-container">
          <Typography sx={{ textAlign: "center", mt: 3 }}>
            {userData.firstName}'s profile
          </Typography>
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
