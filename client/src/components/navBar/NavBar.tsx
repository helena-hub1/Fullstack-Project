import React from "react";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Home from "@mui/icons-material/Home";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

import car from "../../assets/navbarcar.png";
import "./NavBar.css";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { userAction } from "../../redux/slices/user";
import SearchHandler from "../searchHandler/SearchHandler";
// MUI
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// type
type Prop = {
  setUserInput: Function;
};
export default function NavBar({ setUserInput }: Prop) {
  // state
  let isLoggedind = useSelector(
    (state: RootState) => state.userDetail.isLoggedind
  );
  const cartList = useSelector((state: RootState) => state.cartList.cartList);
  const wishList = useSelector((state: RootState) => state.wishList.wishList);
  // dispatch
  const dispatch = useDispatch();
  // navigate
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link className="link" to="/signin">
        <MenuItem onClick={handleMenuClose} sx={{ color: "#000" }}>
          Sign in
        </MenuItem>
      </Link>
      <Link className="link" to="/signup">
        <MenuItem onClick={handleMenuClose} sx={{ color: "#000" }}>
          Sign up
        </MenuItem>
      </Link>
    </Menu>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </MenuItem>
    </Menu>
  );
  // logout handler
  const logOutHandler = () => {
    localStorage.removeItem("userDetail");
    dispatch(userAction.userLogout());
    navigate("/");
  };
  if (isLoggedind) {
    // render
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="inherit"
          sx={{ backgroundColor: "aliceblue", height: "70px" }}
        >
          <Toolbar>
            <IconButton sx={{ color: "inherit" }} component={Link} to="/">
              <StarBorderIcon sx={{ fontSize: "50px" }} />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontSize: "25px", display: { xs: "none", sm: "block" } }}
            >
              <Box component="span" sx={{ color: "darkblue" }}>
                C
              </Box>
              ar's e
              <Box component="span" sx={{ color: "darkblue" }}>
                S
              </Box>
              hop
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <div className="navbar-icons">
                <Link to="/products">
                  <img src={car} alt="car-icon" height="50px" width="50px" />
                </Link>
                <IconButton color="inherit" component={Link} to="/wishlist">
                  <Badge badgeContent={wishList.length} color="error">
                    <FavoriteIcon />
                  </Badge>
                </IconButton>
                <IconButton component={Link} to="/cartlist" color="inherit">
                  <Badge badgeContent={cartList.length} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
                <Button component={Link} to="/user" sx={{ color: "inherit" }}>
                  Profile
                </Button>
                <Button component={Link} to="/order" sx={{ color: "inherit" }}>
                  order
                </Button>

                <Button onClick={logOutHandler} sx={{ color: "inherit" }}>
                  Logout
                </Button>
              </div>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    );
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="inherit"
        sx={{ backgroundColor: "aliceblue", height: "80px" }}
      >
        <Toolbar>
          <IconButton sx={{ color: "inherit" }} component={Link} to="/">
            <StarBorderIcon sx={{ fontSize: "50px" }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontSize: "25px", display: { xs: "none", sm: "block" } }}
          >
            <Box component="span" sx={{ color: "darkblue" }}>
              C
            </Box>
            ar's e
            <Box component="span" sx={{ color: "darkblue" }}>
              S
            </Box>
            hop
          </Typography>
          <SearchHandler setUserInput={setUserInput} />
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <div className="navbar-icons">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                component={Link}
                to="/"
              >
                <Home />
              </IconButton>
              <Link to="/products">
                <img src={car} alt="car-icon" height="50px" width="50px" />
              </Link>

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
