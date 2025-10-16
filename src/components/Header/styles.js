import { useMediaQuery } from "@mui/material";

export const HeaderStyles = () => {
  const mobile = useMediaQuery("(max-width:825px)");

  // Round, icon-only CTA size
  const ctaSize = mobile ? 36 : 40;

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
      gap: "12px",
      position: "relative",
      // ✅ Mobile: align from the left so the logo sits right after the hamburger
      justifyContent: mobile ? "flex-start" : "space-between",
      // breathing room for CTAs pinned at the right on mobile
      paddingRight: mobile ? 4 : undefined,
    },

    // 🍔 Hamburger pinned to left on mobile
    iconButtonStyle: mobile
      ? {
          color: "#111",
          display: "inline-flex",
          position: "absolute",
          left: 8,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
        }
      : { display: "none" },

    // 🔆 Logo sits immediately after hamburger on mobile
    logoBoxStyles: {
      display: "flex",
      alignItems: "center",
      // Make room for the hamburger so the logo appears right next to it
      marginLeft: mobile ? 4 : 0, // tweak to 44/52 if needed
      flexShrink: 0,               // don’t let it stretch or push
      marginRight: mobile ? "auto" : 0, // keep it left-anchored on mobile
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

    // 📞 CTAs: icon-only, equal size, circular
    // Mobile: pinned right; Desktop: normal right-aligned
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
          gap: "10px",
          marginLeft: "auto",
        },

    ctaButton: {
      minWidth: ctaSize,
      width: ctaSize,
      height: ctaSize,
      padding: 0,
      borderRadius: "50%", // ⬅ round buttons
      boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
      ".MuiButton-startIcon": { margin: 0 },
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
