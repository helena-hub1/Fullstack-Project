import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

import "./SuccessOnSignUp.css";

export default function SuccessOnSignUp() {
  return (
    <div className="success-signup">
      <Paper
        elevation={4}
        sx={{
          width: 600,
          mt: 10,
          height: 100,
          mb: 50,
          backgroundColor: "aliceblue",
        }}
      >
        <Typography sx={{ ml: 6, mt: 4, textAlign: "center" }}>
          Welcome to Star
          {/* <Typography
            variant="h6"
            noWrap
             component="div"
            sx={{ fontSize: "18px" }}
          > */}
          <Box component="span" sx={{ ml: 1, color: "darkblue" }}>
            C
          </Box>
          ar's e
          <Box component="span" sx={{ color: "darkblue" }}>
            S
          </Box>
          hop Enjoy staying with us!
          <SentimentSatisfiedAltIcon />
        </Typography>
      </Paper>
    </div>
  );
}
