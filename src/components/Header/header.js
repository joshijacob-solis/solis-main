import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import NearMeIcon from "@mui/icons-material/NearMe";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useMediaQuery } from "@mui/material";

import { NavBarLinks } from "../../constants/navBarLinks";
import Logo from "../../assets/images/solis_logo.png";
import longLogo from "../../assets/images/Solis_Long_Logo.png";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderStyles } from "./styles";

export function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const path = useLocation().pathname;
  const matches = useMediaQuery("(max-width:825px)");
  const compact = useMediaQuery("(max-width:1024px)");
  const mobileMatches = useMediaQuery("(max-width:500px)");
  const navigate = useNavigate();

  // ---- CTA config ----
  const PHONE_E164 = "+918301849474";
  const PHONE_DISPLAY = "+91 8301849474";
  const WA_NUMBER = "918301849474"; // no +
  const WA_TEXT = encodeURIComponent("Hi Solis Green Energy, I'd like a solar quote.");
  const DESTINATION =
    "Solis Green Energy Solutions, Mini Kristal Arcade, Muthoor, Thiruvalla 689107";
  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(DESTINATION);

  const callNow = () => (window.location.href = `tel:${PHONE_E164}`);
  const openWhatsApp = () =>
    window.open(`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`, "_blank", "noopener");
  const openDirections = () => window.open(directionsUrl, "_blank", "noopener");

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const s = HeaderStyles();

  const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
    borderRadius: 3,
    position: "absolute",
    bottom: 8,
    left: "calc(50% - 15px)",
  }));

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={s.sideDrawerBoxStyle}
      className="side-drawer-main"
    >
      <Box sx={s.sideDrawerImageBoxStyle}>
        <img
          onClick={() => navigate("/")}
          src={longLogo}
          alt="solis-logo"
          width="250"
          height="100"
        />
      </Box>
      <Divider />
      <List>
        {NavBarLinks.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={s.lisItemButtonStyle}>
              <Link
                to={item.link}
                style={
                  item.name !== "Home"
                    ? path.includes("/" + item.name.toLowerCase())
                      ? s.selectedSideDrawerLinkStyle
                      : s.sideDrawerLinkStyle
                    : path === "/"
                    ? s.selectedSideDrawerLinkStyle
                    : s.sideDrawerLinkStyle
                }
              >
                {item.name}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={s.closeButtonStyle}>
        <CloseIcon />
      </Box>
      <Puller />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={s.wrapBoxStyle}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        sx={s.appBarStyles}
        className="app-bar-wrap"
      >
        <Toolbar sx={s.toolBarStyles}>
          {/* Logo */}
          <Box sx={s.logoBoxStyles}>
            <p
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
              role="button"
              style={{ cursor: "pointer", margin: 0 }}
            >
              <img
                src={Logo}
                alt="solis-logo"
                width={matches ? 64 : 92}
                height={matches ? 64 : 88}
                style={{ objectFit: "contain" }}
              />
            </p>
          </Box>

          {/* Mobile menu icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={s.iconButtonStyle}
          >
            <MenuIcon />
          </IconButton>

          {/* Center nav (hidden on mobile) */}
          <Box sx={s.navLinkBoxStyle}>
            {NavBarLinks.map((item) => (
              <Link
                className="nav-links"
                to={item.link}
                key={item.name}
                style={
                  item.name !== "Home"
                    ? path.includes("/" + item.name.toLowerCase())
                      ? s.selectedNavLinkStyle
                      : s.navLinkStyles
                    : path === "/"
                    ? s.selectedNavLinkStyle
                    : s.navLinkStyles
                }
              >
                {item.name}
              </Link>
            ))}
          </Box>

          {/* Right CTAs */}
          <Box sx={s.ctaGroupStyle}>
            <Button
              onClick={callNow}
              color="primary"
              variant="contained"
              size="small"
              startIcon={<PhoneIcon fontSize="small" />}
              sx={s.ctaButton}
            >
              {!compact && "Call Now"}
            </Button>
            <Button
              onClick={openWhatsApp}
              color="success"
              variant="contained"
              size="small"
              startIcon={<WhatsAppIcon fontSize="small" />}
              sx={s.ctaButton}
            >
              {!compact && "WhatsApp"}
            </Button>
            <Button
              onClick={openDirections}
              color="warning"
              variant="contained"
              size="small"
              startIcon={<NearMeIcon fontSize="small" />}
              sx={s.ctaButton}
            >
              {!compact && "Directions"}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Top Drawer (mobile) */}
      <Box component="nav">
        <SwipeableDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="top"
          onOpen={() => {}}
          onClose={handleDrawerToggle}
          swipeAreaWidth={mobileMatches ? 50 : 0}
          ModalProps={{ keepMounted: true }}
          keepMounted
          sx={s.drawerStyles}
        >
          {drawer}
        </SwipeableDrawer>
      </Box>

      {/* Spacer for fixed AppBar */}
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar sx={{ minHeight: matches ? 56 : 64 }} />
      </Box>
    </Box>
  );
}
