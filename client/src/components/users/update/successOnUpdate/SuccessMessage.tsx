import React from "react";
import { Paper, Typography } from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

import "./SuccessMessage.css";

export default function SuccessMessage() {
  return (
    <div className="success-massage">
      <Paper elevation={4} sx={{ width: 600, mt: 5, height: 100 }}>
        <Typography sx={{ ml: 6, mt: 4 }}>
          You have successfully updated your information in the system!
          <SentimentSatisfiedAltIcon />
        </Typography>
      </Paper>
    </div>
  );
}
