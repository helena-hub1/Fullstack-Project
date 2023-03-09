// import React from "react";

// export default function SearchHandler() {
//   return <div>SearchHandler</div>;
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { Divider } from "@mui/material";

// TYPE
type Prop = {
  setUserInput: Function;
};

export default function SearchHandler({ setUserInput }: Prop) {
  // state
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();
  // HANDLERS
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const searchHandler = (e: React.MouseEvent<HTMLElement>) => {
    setUserInput(searchTerm);
    navigate("/products");
  };

  const onClear = () => {
    setSearchTerm("");
  };
  // RENDER
  return (
    <Paper
      component="form"
      elevation={1}
      sx={{
        p: "2px 4px",
        ml: "100px",
        my: 2,
        alignItems: "center",
        width: 600,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#eceff1",
        display: { xs: "none", sm: "flex" },
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          color: "#002e5c",
        }}
        placeholder="Search for cars..."
        inputProps={{ "aria-label": "Search cars" }}
        onChange={changeHandler}
        value={searchTerm}
      />
      <Divider
        sx={{ height: 28, m: 0.5, color: "#002e5c" }}
        orientation="vertical"
      />
      <IconButton
        sx={{ color: "#002e5c", display: searchTerm === "" ? "none" : "block" }}
        onClick={onClear}
      >
        <ClearIcon />
      </IconButton>
      <IconButton
        type="button"
        sx={{ p: "10px", color: "#002e5c" }}
        aria-label="search"
        onClick={searchHandler}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
