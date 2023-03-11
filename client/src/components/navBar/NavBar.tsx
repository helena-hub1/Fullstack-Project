import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
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

// type
type Prop = {
  setUserInput: Function;
};
export default function NavBar({ setUserInput }: Prop) {
  // state
  const isLoggedind = localStorage.getItem("userLoggedInd");
  const cartList = useSelector((state: RootState) => state.cartList.cartList);
  const wishList = useSelector((state: RootState) => state.wishList.wishList);
  const userData = useSelector(
    (state: RootState) => state.userDetail.userDetail
  );
  // dispatch
  const dispatch = useDispatch();
  // navigate
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

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
        <MenuItem onClick={handleMenuClose} sx={{ color: "#002e5c" }}>
          Sign in
        </MenuItem>
      </Link>
      <Link className="link" to="/signup">
        <MenuItem onClick={handleMenuClose} sx={{ color: "#002e5c" }}>
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
  // dashbord
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  // logout handler
  const logOutHandler = () => {
    localStorage.removeItem("userDetail");
    localStorage.removeItem("userLoggedInd");
    dispatch(userAction.userLogout());
    navigate("/");
  };

  const navigateToOrderHandler = () => {
    navigate("/order");
  };
  const navigateToProfileHandler = () => {
    navigate("/profile");
  };
  const navigateToProductsHandler = () => {
    navigate("/products");
  };
  if (isLoggedind) {
    // render
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#eeeeee", height: "70px" }}
        >
          <Toolbar>
            <IconButton sx={{ color: "inherit" }} component={Link} to="/">
              <StarBorderIcon sx={{ fontSize: "30px", color: "#002e5c" }} />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontSize: "25px",
                color: "#002e5c",
              }}
            >
              Car's eShop
            </Typography>
            <SearchHandler setUserInput={setUserInput} />
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <div className="navbar-icons">
                <Link to="/products">
                  <img
                    src={car}
                    alt="car-icon"
                    height="50px"
                    width="50px"
                    color="#002e5c"
                  />
                </Link>
                <IconButton
                  color="inherit"
                  component={Link}
                  to="/wishlist"
                  sx={{ color: "#002e5c" }}
                >
                  <Badge badgeContent={wishList.length} color="info">
                    <FavoriteIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  component={Link}
                  to="/cartlist"
                  sx={{ color: "#002e5c" }}
                >
                  <Badge badgeContent={cartList.length} color="info">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>

                <Button
                  id="fade-button"
                  aria-controls={open2 ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open2 ? "true" : undefined}
                  onClick={handleClick2}
                  sx={{ color: "#002e5c" }}
                >
                  Dashboard
                </Button>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl2}
                  open={open2}
                  onClose={handleClose2}
                  TransitionComponent={Fade}
                >
                  <MenuItem
                    onClick={navigateToProductsHandler}
                    sx={{ color: "#002e5c" }}
                  >
                    Showroom
                  </MenuItem>
                  <MenuItem
                    onClick={navigateToProfileHandler}
                    sx={{ color: "#002e5c" }}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={navigateToOrderHandler}
                    sx={{ color: "#002e5c" }}
                  >
                    Order
                  </MenuItem>
                  <MenuItem onClick={logOutHandler} sx={{ color: "#002e5c" }}>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="inherit"
        sx={{ backgroundColor: "#eeeeee", height: "80px" }}
      >
        <Toolbar>
          <IconButton sx={{ color: "inherit" }} component={Link} to="/">
            <StarBorderIcon sx={{ fontSize: "30px", color: "#002e5c" }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontSize: "25px",
              color: "#002e5c",
            }}
          >
            Car's eShop
          </Typography>
          <SearchHandler setUserInput={setUserInput} />
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <div className="navbar-icons">
              <Link to="/products">
                <img
                  src={car}
                  alt="car-icon"
                  height="50px"
                  width="50px"
                  color="#002e5c"
                />
              </Link>
              <IconButton color="inherit" component={Link} to="/wishlist">
                <Badge badgeContent={wishList.length} color="info">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
              <IconButton component={Link} to="/cartlist" color="inherit">
                <Badge badgeContent={cartList.length} color="info">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>

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
