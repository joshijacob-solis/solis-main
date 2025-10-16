import { useMediaQuery } from "@mui/material";

export const ContactPageStyles = () => {
  const matches = useMediaQuery("(max-width:825px)");

  const cardShadow = "rgba(100, 100, 111, 0.25) 0px 20px 45px 0px";
  const cardRadius = "22px";

  if (!matches) {
    // ===== Desktop (>=825px)
    return {
      // Map section wrapper
      wrapGridStyle: {
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        position: "relative",
        overflow: "hidden",
      },

      // Bottom overlay holding BOTH cards: left = contact, right = form
      overlayContainer: {
        position: "absolute",
        bottom: "80px",        // distance above footer (adjust as you like)
        left: 0,
        width: "100%",
        paddingLeft: "70px",   // inset from edges
        paddingRight: "70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: "30px",
        zIndex: 50,            // above the map background
        pointerEvents: "none", // prevent background map from capturing scroll/click
      },

      // Shared card style (BOTH cards)
      contactBoxStyle: {
        pointerEvents: "auto", // re-enable interactions inside the card
        position: "relative",
        width: "420px",        // same width for Contact & Form
        // minHeight: "420px", // (optional) uncomment to force equal height
        borderRadius: cardRadius,
        backgroundColor: "#fff",
        boxShadow: cardShadow,
        zIndex: 999,
        overflow: "hidden",
      },

      // Left card header (Contact Us)
      contactHeaderBox: {
        width: "100%",
        height: "80px",               // shorter header
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.55)",
        borderTopLeftRadius: cardRadius,
        borderTopRightRadius: cardRadius,
        fontSize: "26px",
        color: "#fff",
        fontWeight: 600,
        padding: "18px 25px",
      },

      // Right card header (Form)
      contactHeaderBoxAccent: {
        width: "100%",
        height: "80px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f97316",    // change to your brand color if needed
        borderTopLeftRadius: cardRadius,
        borderTopRightRadius: cardRadius,
        fontSize: "26px",
        color: "#fff",
        fontWeight: 600,
        padding: "18px 25px",
      },

      imageIconStyle: { width: "22px", height: "22px" },

      // Clean inner spacing; keeps long email within margins
      contactDataBox: {
        width: "100%",
        padding: "20px 28px 26px 28px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      },

      typographyStyles: {
        color: "#3c3c3c",
        fontSize: "17px",
        textAlign: "left",
        lineHeight: 1.6,
        wordBreak: "break-word",
        marginBottom: "2px",
      },
    };
  }

  // ===== Mobile (<825px)
  return {
    wrapGridStyle: {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      position: "relative",
      overflow: "hidden",
    },

    // stack the cards and center them near bottom on mobile
    overlayContainer: {
      position: "absolute",
      bottom: "60px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "95%",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      gap: "20px",
      zIndex: 50,
      pointerEvents: "none",
    },

    contactBoxStyle: {
      pointerEvents: "auto",
      position: "relative",
      width: "100%",
      minWidth: "300px",
      borderRadius: cardRadius,
      backgroundColor: "#fff",
      boxShadow: cardShadow,
      zIndex: 999,
      overflow: "hidden",
    },

    contactHeaderBox: {
      width: "100%",
      height: "70px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.55)",
      borderTopLeftRadius: cardRadius,
      borderTopRightRadius: cardRadius,
      fontSize: "18px",
      color: "#fff",
      fontWeight: 600,
      padding: "16px 20px",
    },

    contactHeaderBoxAccent: {
      width: "100%",
      height: "70px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "#f97316",
      borderTopLeftRadius: cardRadius,
      borderTopRightRadius: cardRadius,
      fontSize: "18px",
      color: "#fff",
      fontWeight: 600,
      padding: "16px 20px",
    },

    imageIconStyle: { width: "18px", height: "18px" },

    contactDataBox: {
      width: "100%",
      padding: "18px 20px 20px 20px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },

    typographyStyles: {
      color: "#3c3c3c",
      fontSize: "15px",
      lineHeight: 1.55,
      wordBreak: "break-word",
      marginBottom: "2px",
    },
  };
};
