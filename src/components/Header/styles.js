import { useMediaQuery } from "@mui/material";

export const HeaderStyles = () => {
  const mobile = useMediaQuery("(max-width:825px)");

  return {
    wrapBoxStyle: { flexGrow: 1 },

    appBarStyles: {
      bgcolor: "rgba(255,255,255,0.94)",
      color: "#111",
      backdropFilter: "saturate(180%) blur(8px)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
    },

    toolBarStyles: {
      minHeight: mobile ? 56 : 64,
      px: mobile ? 1 : 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center", // center contents; we place hamburger/CTAs absolutely
      gap: "12px",
      position: "relative", // needed for absolute hamburger & CTAs
    },

    // Logo (add left space so it doesn't collide with absolute hamburger)
    logoBoxStyles: {
      display: "flex",
      alignItems: "center",
      ...(mobile
        ? { marginLeft: 44 } // space for hamburger (40px button + 4px gap)
        : { marginLeft: 0 }),
    },

    // 🍔 Hamburger: ALWAYS visible on mobile, fixed to left
    iconButtonStyle: mobile
      ? {
          color: "#111",
          display: "inline-flex",
          position: "absolute",
          left: 8,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2, // above anything else in header
        }
      : {
          display: "none",
        },

    // Center nav hidden on mobile
    navLinkBoxStyle: {
      display: mobile ? "none" : "flex",
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

    // 📞 CTAs: permanent; on mobile pinned right, icon-only
    ctaGroupStyle: mobile
      ? {
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 6,
          zIndex: 2,
        }
      : {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginLeft: "auto",
        },

    ctaButton: {
      textTransform: "none",
      fontWeight: 800,
      borderRadius: "10px",
      px: mobile ? 0.75 : 1.25,
      minWidth: mobile ? 36 : 0, // icon-only on mobile
      boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
      ".MuiButton-startIcon": {
        marginRight: mobile ? 0 : 8,
      },
      "& svg": { fontSize: mobile ? "18px" : "20px" },
    },

    // Drawer
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
