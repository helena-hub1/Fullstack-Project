import { Link, animateScroll as scroll } from "react-scroll";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./Footer.css";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Container,
  Paper,
} from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        color="inherit"
        sx={{ backgroundColor: "aliceblue" }}
      >
        <Container maxWidth="xl" className="footer">
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              backgroundColor: "aliceblue",
            }}
          >
            <Link
              to="/"
              className="someDiv"
              onClick={() => scroll.scrollToTop()}
            >
              <Typography sx={{ textAlign: "center", fontSize: "18px", mt: 2 }}>
                Back to Top
              </Typography>
            </Link>
          </Paper>
          <div className="footer-icons">
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit">
              <TwitterIcon />
            </IconButton>
          </div>
          <div className="footer-text">
            <div className="shopping-tools">
              SHOPPING TOOLS
              <Typography sx={{ fontSize: "small", mt: 3 }}>
                Trade-in value
              </Typography>
              <Typography sx={{ fontSize: "small" }}>Build your car</Typography>
              <Typography sx={{ fontSize: "small" }}>
                Search inventory
              </Typography>
              <Typography sx={{ fontSize: "small" }}>Find a dealer</Typography>
              <Typography sx={{ fontSize: "small" }}>SmartPath</Typography>
              <Typography sx={{ fontSize: "small" }}>Local Specials</Typography>
              <Typography sx={{ fontSize: "small" }}>
                What Fits my budget
              </Typography>
              <Typography sx={{ fontSize: "small" }}>
                Payment Estimator
              </Typography>
              <Typography sx={{ fontSize: "small" }}>
                Request a quate
              </Typography>
              <Typography sx={{ fontSize: "small" }}>Buy parts</Typography>
              <Typography sx={{ fontSize: "small" }}>
                Buy accessories
              </Typography>
            </div>
            <div className="vehicles">
              VIHICLES
              <Typography sx={{ fontSize: "small", mt: 3 }}>
                All type vhicles
              </Typography>
              <Typography sx={{ fontSize: "small" }}>SUVs</Typography>
              <Typography sx={{ fontSize: "small" }}>Truks</Typography>
              <Typography sx={{ fontSize: "small" }}>Trucks</Typography>
              <Typography sx={{ fontSize: "small" }}>Cars</Typography>
              <Typography sx={{ fontSize: "small" }}>Crossovers</Typography>
              <Typography sx={{ fontSize: "small" }}>
                Electiefied Vehicles
              </Typography>
              <Typography sx={{ fontSize: "small" }}>Hybrids</Typography>
              <Typography sx={{ fontSize: "small" }}>Haybrid cars</Typography>
              <Typography sx={{ fontSize: "small" }}>Hybrid SUVs</Typography>
              <Typography sx={{ fontSize: "small" }}>TRD pro series</Typography>
              <Typography sx={{ fontSize: "small" }}>
                Nightshade service
              </Typography>
            </div>
            <div className="helpful-links">
              HELPFUL LINKS
              <Typography sx={{ fontSize: "small", mt: 3 }}>Dealers</Typography>
              <Typography sx={{ fontSize: "small" }}>
                Deals & incentives
              </Typography>
              <Typography sx={{ fontSize: "small" }}>
                Audio multimedia
              </Typography>
              <Typography sx={{ fontSize: "small" }}>
                Mobile phone compatibilities
              </Typography>
              <Typography sx={{ fontSize: "small" }}>
                Connected services
              </Typography>
              <Typography sx={{ fontSize: "small" }}>Mobility</Typography>
              <Typography sx={{ fontSize: "small" }}>Toyota fleet</Typography>
              <Typography sx={{ fontSize: "small" }}>rent a car</Typography>
              <Typography sx={{ fontSize: "small" }}>
                Financial services
              </Typography>
              <Typography sx={{ fontSize: "small" }}>Insurances</Typography>
              <Typography sx={{ fontSize: "small" }}>Email updates</Typography>
            </div>
            <div className="owners">
              OWNERS
              <Typography sx={{ fontSize: "small", mt: 3 }}>
                Owners home
              </Typography>
              <Typography sx={{ fontSize: "small" }}>
                Care & maintenance
              </Typography>
              <Typography sx={{ fontSize: "small" }}>
                Safety recalls{" "}
              </Typography>
              <Typography sx={{ fontSize: "small" }}>
                Service Campaigns
              </Typography>
              <Typography sx={{ fontSize: "small" }}>
                Service centers
              </Typography>
              <Typography sx={{ fontSize: "small" }}>
                Service specials
              </Typography>
              <Typography sx={{ fontSize: "small" }}>
                Star saftey sennse
              </Typography>
              <Typography sx={{ fontSize: "small" }}>
                Manuals & waranties
              </Typography>
              <Typography sx={{ fontSize: "small" }}>Car for family</Typography>
              <Typography sx={{ fontSize: "small" }}>
                Service coupons discounts
              </Typography>
            </div>
            <div className="about-us">
              ABOUT US
              <Typography sx={{ fontSize: "small", mt: 3 }}>Careers</Typography>
              <Typography sx={{ fontSize: "small" }}>About us</Typography>
              <Typography sx={{ fontSize: "small" }}>Our company </Typography>
              <Typography sx={{ fontSize: "small" }}>
                Star out fitters
              </Typography>
              <Typography sx={{ fontSize: "small" }}>News room</Typography>
              <Typography sx={{ fontSize: "small" }}>
                Star world wide
              </Typography>
              <Typography sx={{ fontSize: "small" }}>TRD Denmark</Typography>
              <Typography sx={{ fontSize: "small" }}>Plant tours</Typography>
            </div>
          </div>
          <div className="copyright-information">
            <Typography sx={{ fontWeight: "bold" }}>Contact us</Typography>
            <Typography sx={{ fontWeight: "bold" }}>FAQ's</Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              More Information
            </Typography>
          </div>
          <div className="copyright-information2">
            <Typography sx={{ fontSize: "x-small" }}>
              ©2023 Star Car Sales,Denmark, Inc. All information applies to
              Denmark vehicles only.
            </Typography>
            <Typography sx={{ fontSize: "x-small" }}>
              The use of Star Marks, Terminology and Imagery is authorized by
              the Denmark & Paralympic Committee pursuant to Title 36 Denmark
              Code Section 220506.
            </Typography>
          </div>
          {/* </div> */}
        </Container>
        <Toolbar></Toolbar>
      </AppBar>
    </Box>
  );
}
