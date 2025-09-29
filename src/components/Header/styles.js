import { useMediaQuery } from "@mui/material";

export const HeaderStyles = () => {
  const drawerWidth = "100%";
  const matches = useMediaQuery("(max-width:768px)");
  return {
    wrapBoxStyle: {
      display: "flex",
      textTransform: "none",
      position: "fixed",
      zIndex: 1001,
    },
    navLinkStyles: {
      color: "#FAF9F6",
      textTransform: "none",
      textDecoration: "none",
      fontSize: "18px",
      fontWeight: "200",
    },
    selectedNavLinkStyle: {
      color: "#00AA00",
      textTransform: "none",
      textDecoration: "none",
      fontSize: "21px",
      fontWeight: "200",
    },
    navLinkBoxStyle: {
      display: matches ? "none" : "flex",
      width: "100%",
      flexDirection: "row",
      justifyContent: "right",
      textTransform: "none",
    },
    closeButtonStyle: {
      position: "absolute",
      top: "10px",
      right: "10px",
    },
    toolBarStyles: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingRight: "0px !important",
      paddingLeft: "0px !important",
    },
    logoBoxStyles: {
      // width: matches ? "25%" : "9%",
      width: `${30000 / window.innerWidth}%`,
      backgroundColor: "rgba(255,255,255,0.9)",
      clipPath: "polygon(0% 0%, 70% 0%, 100% 100%, 0% 100%)",
    },
    drawerStyles: {
      display: matches ? "block" : "none",
      "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: drawerWidth,
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      },
      zIndex: 20000,
    },
    iconButtonStyle: { mr: 2, display: matches ? "block" : "none" },
    appBarStyles: {
      backgroundColor: matches ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.6)",
      boxShadow: "none",
      textTransform: "none",
      boxSizing: "border-box",
    },
    sideDrawerBoxStyle: {
      textAlign: "center",
      backgroundColor: "whitesmoke",
      borderBottomLeftRadius: "10px",
    },
    sideDrawerImageBoxStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    lisItemButtonStyle: { textAlign: "center" },
    sideDrawerLinkStyle: {
      color: "#3c3c3c",
      textDecoration: "none",
      fontSize: "18px",
      fontWeight: "200",
      width: "100%",
    },
    selectedSideDrawerLinkStyle: {
      color: "#00AA00",
      textDecoration: "none",
      fontSize: "21px",
      fontWeight: "200",
      width: "100%",
    },
  };
};
