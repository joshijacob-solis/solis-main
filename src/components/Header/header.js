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
  const mobile = useMediaQuery("(max-width:825px)");
  const navigate = useNavigate();

  // ---- Contact / CTA URLs ----
  const PHONE_E164 = "+918301849474";
  const WA_NUMBER = "918301849474";
  const WA_TEXT = encodeURIComponent("Hi Solis Green Energy, I'd like a solar quote.");
  const DESTINATION =
    "Solis Green Energy Solutions, Mini Kristal Arcade, Muthoor, Thiruvalla 689107";
  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(DESTINATION);
  const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

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
    <Box onClick={handleDrawerToggle} sx={s.sideDrawerBoxStyle} className="side-drawer-main">
      <Box sx={s.sideDrawerImageBoxStyle}>
        <img
          onClick={() => navigate("/")}
          src={longLogo}
          alt="solis-logo"
          width="250"
          height="100"
          style={{ cursor: "pointer" }}
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
        sx={(theme) => ({
          ...s.appBarStyles,
          zIndex: theme.zIndex.modal + 1,
        })}
      >
        <Toolbar sx={s.toolBarStyles}>
          {/* Hamburger (mobile only) */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={s.iconButtonStyle}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo (immediately after hamburger on mobile) */}
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
                width={mobile ? 60 : 92}
                height={mobile ? 60 : 88}
                style={{ objectFit: "contain" }}
              />
            </p>
          </Box>

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

          {/* CTA group — icon-only, equal square size on all breakpoints */}
          <Box sx={s.ctaGroupStyle}>
            <Button
              className="cta-btn"
              href={`tel:${PHONE_E164}`}
              color="primary"
              variant="contained"
              size="small"
              startIcon={<PhoneIcon fontSize="small" />}
              sx={s.ctaButton}
              aria-label="Call"
              title="Call"
            />
            <Button
              className="cta-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener"
              color="success"
              variant="contained"
              size="small"
              startIcon={<WhatsAppIcon fontSize="small" />}
              sx={s.ctaButton}
              aria-label="WhatsApp"
              title="WhatsApp"
            />
            <Button
              className="cta-btn"
              href={directionsUrl}
              target="_blank"
              rel="noopener"
              color="warning"
              variant="contained"
              size="small"
              startIcon={<NearMeIcon fontSize="small" />}
              sx={s.ctaButton}
              aria-label="Directions"
              title="Directions"
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer (opens ONLY on hamburger) */}
      <Box component="nav">
        <SwipeableDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="top"
          onClose={handleDrawerToggle}
          disableSwipeToOpen
          swipeAreaWidth={0}
          ModalProps={{ keepMounted: true }}
          keepMounted
          sx={s.drawerStyles}
        >
          {drawer}
        </SwipeableDrawer>
      </Box>

      {/* Spacer for fixed header */}
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar sx={{ minHeight: mobile ? 56 : 64 }} />
      </Box>
    </Box>
  );
}
