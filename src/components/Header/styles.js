import { useMediaQuery } from "@mui/material";

export const HeaderStyles = () => {
  const matches = useMediaQuery("(max-width:825px)");

  return {
    wrapBoxStyle: { flexGrow: 1 },

    appBarStyles: {
      bgcolor: "rgba(255,255,255,0.92)",
      color: "#111",
      backdropFilter: "saturate(180%) blur(8px)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
    },

    toolBarStyles: {
      minHeight: matches ? 56 : 64,
      px: matches ? 1 : 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "12px",
    },

    logoBoxStyles: {
      display: "flex",
      alignItems: "center",
      mr: 1,
    },

    // Mobile menu icon visible only on <=825px
    iconButtonStyle: {
      color: "#111",
      display: matches ? "inline-flex" : "none",
      ml: 0.5,
    },

    // Center nav (hidden on mobile)
    navLinkBoxStyle: {
      display: matches ? "none" : "flex",
      alignItems: "center",
      gap: "26px",
      mx: 2,
      flex: 1,
      justifyContent: "center",
    },

    navLinkStyles: {
      color: "#2b2b2b",
      textDecoration: "none",
      fontWeight: 600,
      opacity: 0.9,
    },
    selectedNavLinkStyle: {
      color: "#0ea5e9",
      textDecoration: "none",
      fontWeight: 800,
      opacity: 1,
    },

    // CTA buttons (always visible; icons-only on medium screens using component logic)
    ctaGroupStyle: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      ml: "auto",
    },
    ctaButton: {
      textTransform: "none",
      fontWeight: 800,
      borderRadius: "10px",
      px: 1.25,
      boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
    },

    // Drawer styles
    drawerStyles: {
      "& .MuiDrawer-paper": {
        height: "auto",
        borderBottomLeftRadius: "18px",
        borderBottomRightRadius: "18px",
      },
    },
    sideDrawerBoxStyle: {
      width: "100%",
      p: 2,
      pt: 3,
      position: "relative",
    },
    sideDrawerImageBoxStyle: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      mb: 1,
    },
    lisItemButtonStyle: { px: 2 },
    sideDrawerLinkStyle: {
      color: "#222",
      textDecoration: "none",
      fontWeight: 600,
      fontSize: "16px",
    },
    selectedSideDrawerLinkStyle: {
      color: "#0ea5e9",
      textDecoration: "none",
      fontWeight: 800,
      fontSize: "16px",
    },
    closeButtonStyle: {
      position: "absolute",
      top: 8,
      right: 8,
      cursor: "pointer",
      color: "#444",
    },
  };
};
