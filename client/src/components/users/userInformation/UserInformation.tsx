import React, { useEffect } from "react";
import { Avatar, Box, Paper, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./UserInformation.css";
// import getUserDetail from "../../../redux/thunks/user";
import { AppDispatch, RootState } from "../../../redux/store";

export default function UserInformation() {
  // state
  const userDetail = useSelector(
    (state: RootState) => state.userDetail.userDetail
  );
  console.log("userDetail", userDetail);
  return (
    <div className="user-detail-container">
      <Paper
        elevation={3}
        sx={{ width: 300, height: 500, mt: 4, mb: 4, background: "aliceblue" }}
      >
        <div className="profile-container">
          <Avatar
            alt="login-avatar"
            src={userDetail.image}
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
              <Box className="box2">{userDetail.name}</Box>
            </Typography>

            <Typography component="div" className="text-container">
              <Box component="span" className="box">
                Gender:
              </Box>
              <Box className="box2">{userDetail.gender}</Box>
            </Typography>
            <Typography component="div" className="text-container">
              <Box component="span" className="box">
                City:
              </Box>
              <Box className="box2">{userDetail.city}</Box>
            </Typography>
            <Typography component="div" className="text-container">
              <Box component="span" className="box">
                State:
              </Box>
              <Box className="box2">{userDetail.state}</Box>
            </Typography>
            <Typography component="div" className="text-container">
              <Box component="span" className="box">
                Country:
              </Box>
              <Box className="box2">{userDetail.country}</Box>
            </Typography>
            <Typography component="div" className="text-container">
              <Box component="span" className="box">
                Postcode:
              </Box>
              <Box className="box2">{userDetail.postcode}</Box>
            </Typography>
            <Typography component="div" className="text-container">
              <Box component="span" className="box">
                dob:
              </Box>
              {/* <Box className="box2">{userDetail.}</Box> */}
            </Typography>

            <Typography component="div" className="text-container">
              <Box component="span" className="box">
                Email:
              </Box>
              <Box className="box2">{userDetail.email}</Box>
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
