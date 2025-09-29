import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { NavBarLinks } from "../../constants/navBarLinks";
import Logo from "../../assets/images/solis_logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";
import { HeaderStyles } from "./styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import longLogo from "../../assets/images/Solis_Long_Logo.png";

export function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const path = useLocation().pathname;
  const matches = useMediaQuery("(max-width:825px)");
  const mobileMatches = useMediaQuery("(max-width:500px)");
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const headerStyles = HeaderStyles();
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
      sx={headerStyles.sideDrawerBoxStyle}
      className="side-drawer-main"
    >
      <Box sx={headerStyles.sideDrawerImageBoxStyle}>
        <img
          onClick={(e) => {
            navigate("/");
          }}
          src={longLogo}
          alt="solis-logo"
          width="250px"
          height="100px"
        ></img>
      </Box>
      <Divider />
      <List>
        {NavBarLinks.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={headerStyles.lisItemButtonStyle}>
              <Link
                to={item.link}
                style={
                  item.name !== "Home"
                    ? path.includes("/" + item.name.toLowerCase())
                      ? headerStyles.selectedSideDrawerLinkStyle
                      : headerStyles.sideDrawerLinkStyle
                    : path === "/"
                    ? headerStyles.selectedSideDrawerLinkStyle
                    : headerStyles.sideDrawerLinkStyle
                }
              >
                {item.name}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={headerStyles.closeButtonStyle}>
        <CloseIcon />
      </Box>
      <Puller />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={headerStyles.wrapBoxStyle}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={headerStyles.appBarStyles}
        className="app-bar-wrap"
      >
        <Toolbar sx={headerStyles.toolBarStyles}>
          <Box sx={headerStyles.logoBoxStyles}>
            <p
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
              role="button"
              style={{ cursor: "pointer" }}
            >
              <img
                src={Logo}
                style={{ cursor: "pointer" }}
                alt="solis-logo"
                width={matches ? "70px" : "130px"}
                height={matches ? "70px" : "120px"}
              ></img>
            </p>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={headerStyles.iconButtonStyle}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={headerStyles.navLinkBoxStyle}>
            {NavBarLinks.map((item) => (
              <Link
                className="nav-links"
                to={item.link}
                key={item.name}
                style={
                  item.name !== "Home"
                    ? path.includes("/" + item.name.toLowerCase())
                      ? headerStyles.selectedNavLinkStyle
                      : headerStyles.navLinkStyles
                    : path === "/"
                    ? headerStyles.selectedNavLinkStyle
                    : headerStyles.navLinkStyles
                }
              >
                {item.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <SwipeableDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="top"
          onClose={handleDrawerToggle}
          swipeAreaWidth={mobileMatches?50:0}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          keepMounted={true}
          sx={headerStyles.drawerStyles}
        >
          {drawer}
        </SwipeableDrawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
