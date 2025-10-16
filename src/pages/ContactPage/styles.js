import { useMediaQuery } from "@mui/material";

export const ContactPageStyles = () => {
  const matches = useMediaQuery("(max-width:825px)");

  const cardShadow = "rgba(100, 100, 111, 0.25) 0px 20px 45px 0px";
  const cardRadius = "20px";

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
        bottom: "80px",
        left: 0,
        width: "100%",
        paddingLeft: "70px",
        paddingRight: "70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: "30px",
        zIndex: 50,
        pointerEvents: "none",
      },

      // === EXACT equal height cards ===
      contactBoxStyle: {
        pointerEvents: "auto",
        position: "relative",
        width: "420px",
        height: "420px",               // <-- exact equal height
        borderRadius: cardRadius,
        backgroundColor: "#fff",
        boxShadow: cardShadow,
        zIndex: 999,
        overflow: "hidden",

        display: "flex",               // let inner content stretch
        flexDirection: "column",
      },

      // Reduced header height
      contactHeaderBox: {
        width: "100%",
        height: "64px",                // <-- smaller header
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.55)",
        borderTopLeftRadius: cardRadius,
        borderTopRightRadius: cardRadius,
        fontSize: "22px",
        color: "#fff",
        fontWeight: 700,
        padding: "0 20px",
        flexShrink: 0,
      },

      contactHeaderBoxAccent: {
        width: "100%",
        height: "64px",                // <-- smaller header
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f97316",
        borderTopLeftRadius: cardRadius,
        borderTopRightRadius: cardRadius,
        fontSize: "22px",
        color: "#fff",
        fontWeight: 700,
        padding: "0 20px",
        flexShrink: 0,
      },

      imageIconStyle: { width: "20px", height: "20px" },

      // Content fills remaining space inside the fixed-height card
      contactDataBox: {
        width: "100%",
        padding: "16px 22px 20px 22px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        overflow: "auto",              // scroll if content ever exceeds
        flex: 1,                        // take remaining height under header
      },

      typographyStyles: {
        color: "#3c3c3c",
        fontSize: "16px",
        textAlign: "left",
        lineHeight: 1.55,
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
      gap: "16px",
      zIndex: 50,
      pointerEvents: "none",
    },

    // Exact equal height on mobile too (slightly smaller)
    contactBoxStyle: {
      pointerEvents: "auto",
      position: "relative",
      width: "100%",
      minWidth: "300px",
      height: "360px",                // <-- exact equal height (mobile)
      borderRadius: cardRadius,
      backgroundColor: "#fff",
      boxShadow: cardShadow,
      zIndex: 999,
      overflow: "hidden",

      display: "flex",
      flexDirection: "column",
    },

    // Reduced mobile headers
    contactHeaderBox: {
      width: "100%",
      height: "56px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.55)",
      borderTopLeftRadius: cardRadius,
      borderTopRightRadius: cardRadius,
      fontSize: "18px",
      color: "#fff",
      fontWeight: 700,
      padding: "0 16px",
      flexShrink: 0,
    },

    contactHeaderBoxAccent: {
      width: "100%",
      height: "56px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "#f97316",
      borderTopLeftRadius: cardRadius,
      borderTopRightRadius: cardRadius,
      fontSize: "18px",
      color: "#fff",
      fontWeight: 700,
      padding: "0 16px",
      flexShrink: 0,
    },

    imageIconStyle: { width: "18px", height: "18px" },

    contactDataBox: {
      width: "100%",
      padding: "14px 16px 16px 16px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      overflow: "auto",
      flex: 1,
    },

    typographyStyles: {
      color: "#3c3c3c",
      fontSize: "15px",
      lineHeight: 1.5,
      wordBreak: "break-word",
      marginBottom: "2px",
    },
  };
};
