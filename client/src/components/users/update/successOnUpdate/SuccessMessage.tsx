import React from "react";
import { Paper, Typography } from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

import "./SuccessMessage.css";

export default function SuccessMessage() {
  return (
    <div className="success-massage">
      <Paper
        elevation={6}
        sx={{
          width: 600,
          mt: 10,
          mb: 50,
          height: 100,
          backgroundColor: "aliceblue",
        }}
      >
        <Typography sx={{ ml: 6, mt: 4, textAlign: "center" }}>
          Your profile has been updated successfully!
          <SentimentSatisfiedAltIcon />
        </Typography>
      </Paper>
    </div>
  );
}
